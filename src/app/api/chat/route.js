import { NextResponse } from 'next/server';
import { buildSystemPrompt, offlineReply } from '../../../lib/chatKnowledge';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY = 12;
const OPENAI_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const MODEL = process.env.OPENAI_CHAT_MODEL || 'gpt-4o-mini';

const buckets = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

function rateLimit(ip, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const entry = buckets.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }
  entry.count += 1;
  buckets.set(ip, entry);
  return entry.count <= limit;
}

function normalizeMessages(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: String(m.content).slice(0, MAX_MESSAGE_LENGTH).trim(),
    }))
    .filter((m) => m.content.length > 0);
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests. Try again in a minute.' }, { status: 429 });
    }

    const body = await request.json().catch(() => null);
    const messages = normalizeMessages(body?.messages);
    if (messages.length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (!lastUser) {
      return NextResponse.json({ error: 'A user message is required.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: offlineReply(lastUser.content),
        offline: true,
      });
    }

    const res = await fetch(`${OPENAI_URL.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 500,
        messages: [{ role: 'system', content: buildSystemPrompt() }, ...messages],
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[chat] provider error', res.status, detail.slice(0, 400));
      return NextResponse.json({
        reply: offlineReply(lastUser.content),
        offline: true,
      });
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({
        reply: offlineReply(lastUser.content),
        offline: true,
      });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('[chat]', error);
    return NextResponse.json({ error: 'Chat is temporarily unavailable.' }, { status: 500 });
  }
}
