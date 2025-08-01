# Email Setup Guide

This guide will help you set up the contact form email functionality to receive emails at `arjunvardiyill203@gmail.com` using any SMTP provider.

## Supported Email Providers

You can use any of these popular email services:
- **SendGrid** (Recommended for production)
- **Mailgun**
- **Amazon SES**
- **Gmail SMTP**
- **Outlook/Hotmail SMTP**
- **Your own SMTP server**

## Setup Steps

### 1. Choose Your Email Provider

#### Option A: SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Use these settings:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   ```

#### Option B: Mailgun
1. Sign up at [Mailgun](https://mailgun.com/)
2. Get your SMTP credentials
3. Use these settings:
   ```
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_SECURE=false
   ```

#### Option C: Gmail SMTP
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password
3. Use these settings:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   ```

#### Option D: Amazon SES
1. Set up Amazon SES in your AWS account
2. Get your SMTP credentials
3. Use these settings:
   ```
   SMTP_HOST=email-smtp.us-east-1.amazonaws.com
   SMTP_PORT=587
   SMTP_SECURE=false
   ```

### 2. Configure Environment Variables

1. Open the `.env.local` file in your portfolio directory
2. Add the following variables:

```env
# SMTP Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=your-from-email@domain.com
```

**Example for SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=noreply@yourdomain.com
```

**Example for Gmail:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-gmail@gmail.com
```

### 3. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email at `arjunvardiyill203@gmail.com`

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use API keys or app passwords instead of regular passwords
- The contact form includes validation and rate limiting

## Troubleshooting

### Common Issues:

1. **"Authentication failed" error**
   - Verify your SMTP credentials are correct
   - Check if your email provider requires specific settings
   - Ensure you're using the correct port and security settings

2. **"Network error"**
   - Check your internet connection
   - Ensure the development server is running
   - Verify your SMTP host is accessible

3. **"Failed to send message"**
   - Verify your environment variables are correct
   - Check the server logs for detailed error messages
   - Ensure your email provider allows SMTP access

4. **"Email service not configured"**
   - Make sure all required environment variables are set
   - Check that `.env.local` file exists and is properly formatted

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. The API route will work the same way in production
3. Consider using a dedicated email service like SendGrid for better deliverability
4. Set up proper DNS records (SPF, DKIM) for better email delivery

## Email Template

The emails will include:
- Sender's name and email
- Their message
- Professional HTML formatting
- Clear subject line for easy identification

The emails will be sent to `arjunvardiyill203@gmail.com` with the subject: "New Contact Form Submission from [Name]"

## Recommended Providers

### For Development/Testing:
- **Gmail SMTP** - Easy to set up, good for testing

### For Production:
- **SendGrid** - Excellent deliverability, good free tier
- **Mailgun** - Reliable, good for high volume
- **Amazon SES** - Cost-effective for high volume 