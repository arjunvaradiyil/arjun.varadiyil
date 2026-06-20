import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { BRAND, escapeHtml } from '../../../lib/brandColors';

function ownerEmailHtml({ name, email, message }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: ${BRAND.surface}; color: ${BRAND.foreground};">
      <div style="padding: 28px 24px 16px; border-bottom: 3px solid ${BRAND.accent};">
        <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.08em; text-transform: uppercase; color: ${BRAND.foreground};">
          New contact submission
        </h2>
      </div>
      <div style="padding: 24px;">
        <p style="margin: 0 0 12px; color: ${BRAND.foregroundMuted};"><strong style="color: ${BRAND.foreground};">Name:</strong> ${name}</p>
        <p style="margin: 0 0 12px; color: ${BRAND.foregroundMuted};"><strong style="color: ${BRAND.foreground};">Email:</strong> ${email}</p>
        <p style="margin: 0 0 8px; color: ${BRAND.foregroundMuted};"><strong style="color: ${BRAND.foreground};">Message:</strong></p>
        <div style="background: ${BRAND.surfaceElevated}; padding: 16px; border-left: 4px solid ${BRAND.accent}; color: ${BRAND.foreground};">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      </div>
      <p style="padding: 0 24px 24px; margin: 0; font-size: 12px; color: ${BRAND.foregroundMuted};">
        Sent from arjunvaradiyil.in contact form
      </p>
    </div>
  `;
}

function confirmationEmailHtml({ name, message }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: ${BRAND.surface}; padding: 32px 28px; border-bottom: 3px solid ${BRAND.accent}; text-align: left;">
        <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: ${BRAND.accent};">Portfolio</p>
        <h1 style="margin: 0; font-size: 28px; color: ${BRAND.foreground};">Thank you, ${name}</h1>
      </div>
      <div style="background: ${BRAND.lightSurface}; padding: 28px; border: 1px solid rgba(139, 105, 20, 0.2); border-top: none;">
        <p style="color: ${BRAND.lightForeground}; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
          I've received your message and will get back to you within a few business days.
        </p>
        <div style="background: #ffffff; padding: 18px; border-left: 4px solid ${BRAND.accent}; margin: 20px 0;">
          <p style="color: ${BRAND.lightMuted}; font-size: 13px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.12em;">Your message</p>
          <p style="color: ${BRAND.lightForeground}; font-size: 14px; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        <p style="color: ${BRAND.lightForeground}; font-size: 16px; line-height: 1.6; margin: 0;">
          Best regards,<br><strong>Arjun Varadiyil</strong>
        </p>
      </div>
      <p style="text-align: center; margin: 16px 0 0; font-size: 12px; color: ${BRAND.lightMuted};">
        Automated confirmation — please do not reply
      </p>
    </div>
  `;
}

export async function POST(request) {
  try {
    // Check if API key is available first
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Send emails in parallel: notification to owner and confirmation to submitter
    const [ownerEmailResult, confirmationEmailResult] = await Promise.allSettled([
      // Email to portfolio owner
      resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['arjunvaradiyil203@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        html: ownerEmailHtml({ name: safeName, email: safeEmail, message: safeMessage }),
        replyTo: email,
      }),
      // Confirmation email to submitter
      resend.emails.send({
        from: 'Arjun Varadiyil <onboarding@resend.dev>',
        to: [email],
        subject: 'Thank you for contacting me!',
        html: confirmationEmailHtml({ name: safeName, message: safeMessage }),
      }),
    ]);

    // Check if owner email was sent successfully
    if (ownerEmailResult.status === 'rejected' || ownerEmailResult.value?.error) {
      const error = ownerEmailResult.status === 'rejected' 
        ? ownerEmailResult.reason 
        : ownerEmailResult.value.error;
      console.error('Failed to send owner notification:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { 
          error: 'Failed to send notification email',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    // Log confirmation email status (but don't fail if it doesn't send)
    if (confirmationEmailResult.status === 'rejected' || confirmationEmailResult.value?.error) {
      const error = confirmationEmailResult.status === 'rejected' 
        ? confirmationEmailResult.reason 
        : confirmationEmailResult.value.error;
      console.warn('Failed to send confirmation email:', JSON.stringify(error, null, 2));
      // Continue anyway since the main email was sent
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        id: ownerEmailResult.value?.data?.id,
        confirmationSent: confirmationEmailResult.status === 'fulfilled' && !confirmationEmailResult.value?.error
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
