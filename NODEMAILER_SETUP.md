# Nodemailer Setup Guide

This guide shows you how to set up the contact form using nodemailer with simple SMTP configuration.

## Quick Setup Options

### Option 1: Gmail (Easiest)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password
3. Add to `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-gmail@gmail.com
```

### Option 2: Outlook/Hotmail
1. Use your Outlook account
2. Add to `.env.local`:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-outlook@outlook.com
SMTP_PASS=your-password
SMTP_FROM=your-outlook@outlook.com
```

### Option 3: Yahoo Mail
1. Use your Yahoo account
2. Add to `.env.local`:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-yahoo@yahoo.com
SMTP_PASS=your-app-password
SMTP_FROM=your-yahoo@yahoo.com
```

### Option 4: Free SMTP Services

#### Brevo (formerly Sendinblue)
1. Sign up at [Brevo](https://brevo.com/)
2. Get your SMTP credentials
3. Add to `.env.local`:
```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-brevo-username
SMTP_PASS=your-brevo-password
SMTP_FROM=noreply@yourdomain.com
```

#### Mailgun (Free tier)
1. Sign up at [Mailgun](https://mailgun.com/)
2. Get your SMTP credentials
3. Add to `.env.local`:
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
SMTP_FROM=noreply@yourdomain.com
```

## Development Mode

For development, the system uses a test SMTP server. You don't need to configure anything for development - it will work out of the box.

## Production Setup

1. Choose one of the options above
2. Create `.env.local` file with your SMTP settings
3. Deploy to your hosting platform
4. Add the same environment variables to your hosting platform

## Testing

1. Start development server: `npm run dev`
2. Go to contact section
3. Fill and submit the form
4. Check `arjunvardiyill203@gmail.com` for the email

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check your username/password
   - For Gmail, use App Password, not regular password
   - Ensure 2FA is enabled for Gmail

2. **"Connection timeout"**
   - Check your SMTP host and port
   - Verify your internet connection
   - Try different port (587 or 465)

3. **"Message not received"**
   - Check spam folder
   - Verify the "to" email address
   - Check SMTP logs in console

## Environment Variables

Required for production:
```env
SMTP_HOST=your-smtp-server
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM=your-from-email
```

## Code Structure

The nodemailer setup is in `/src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

## Security Notes

- Never commit `.env.local` to git
- Use App Passwords for Gmail
- Enable 2FA where possible
- Rate limiting is already implemented 