'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { CHAT_SUGGESTIONS } from '../lib/chatKnowledge';
import { isEditorialPage } from '../lib/editorialPages';

const EASE = [0.16, 1, 0.3, 1];

function toApiMessages(messages) {
  return messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .filter((m, index) => !(index === 0 && m.role === 'assistant'))
    .map((m) => ({ role: m.role, content: m.content }));
}

export default function AiChatAssistant({ enabled = true }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTip, setShowTip] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi — I'm Arjun's portfolio assistant. Ask about projects, stack, experience, or how to get in touch.",
    },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const hidden = !enabled || pathname?.startsWith('/admin');

  useEffect(() => {
    if (!open) return undefined;
    const id = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!showTip) return undefined;
    const id = window.setTimeout(() => setShowTip(false), 4500);
    return () => window.clearTimeout(id);
  }, [showTip]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  if (hidden) return null;

  // Sit just above the editorial bottom pill (bottom-8 + ~3rem height).
  const editorial = isEditorialPage(pathname);
  const dockClass = editorial ? 'bottom-20' : 'bottom-6';

  async function sendMessage(text) {
    const content = String(text || '').trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: toApiMessages(nextMessages) }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'Could not reach the assistant.');
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className={`fixed right-4 z-[60] flex h-[min(32rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden border-2 border-black bg-white text-black shadow-2xl md:right-6 ${dockClass}`}
            role="dialog"
            aria-label="Portfolio AI assistant"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Assistant
                </p>
                <p className="font-display text-lg font-bold tracking-tight">Ask about Arjun</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-black/15 transition hover:bg-black hover:text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[90%] whitespace-pre-wrap text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'ml-auto bg-black px-3 py-2 text-white'
                      : 'border border-black/10 bg-neutral-50 px-3 py-2 text-neutral-800'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {loading ? (
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  Thinking…
                </p>
              ) : null}
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
            </div>

            {messages.length < 3 ? (
              <div className="flex flex-wrap gap-2 border-t border-black/5 px-4 py-3">
                {CHAT_SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="border border-black/15 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-600 transition hover:border-black hover:text-black"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="flex gap-2 border-t border-black/10 p-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question…"
                maxLength={1200}
                disabled={loading}
                className="min-w-0 flex-1 border border-black/15 bg-white px-3 py-2 font-mono text-xs outline-none transition focus:border-black disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center bg-black text-white transition hover:bg-neutral-800 disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!open ? (
          <motion.button
            key="fab"
            type="button"
            onClick={() => setOpen(true)}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className={`group fixed right-4 z-[45] flex h-12 w-12 items-center justify-center md:right-6 md:h-14 md:w-14 ${dockClass}`}
            aria-expanded={false}
            aria-label="Open AI assistant — Hi! How can I help you?"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <span
              className={`pointer-events-none absolute bottom-full right-0 mb-2 w-max max-w-[min(12rem,calc(100vw-2rem))] border-2 border-black bg-white px-3 py-2 text-left text-xs leading-snug text-black shadow-lg transition-opacity duration-200 ${
                showTip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
              }`}
            >
              <span aria-hidden>👋</span> Hi! How can I help you?
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-black text-white shadow-lg transition group-hover:bg-white group-hover:text-black md:h-14 md:w-14">
              <MessageCircle size={20} />
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
