import { Resend } from 'resend';
import { NextResponse } from 'next/server';

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

    // Send emails in parallel: notification to owner and confirmation to submitter
    const [ownerEmailResult, confirmationEmailResult] = await Promise.allSettled([
      // Email to portfolio owner
      resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['arjunvaradiyil203@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #9333ea;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
        replyTo: email,
      }),
      // Confirmation email to submitter
      resend.emails.send({
        from: 'Arjun Varadiyil <onboarding@resend.dev>',
        to: [email],
        subject: 'Thank you for contacting me!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            </div>
            <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                I've received your message and I'm excited to learn more about your project idea!
              </p>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;"><strong>Your Message:</strong></p>
                <p style="color: #333; font-size: 14px; margin: 0; white-space: pre-wrap; font-style: italic;">${message}</p>
              </div>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
              </p>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                Looking forward to working with you!
              </p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #333;">Arjun Varadiyil</strong>
                </p>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
            </div>
          </div>
        `,
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
