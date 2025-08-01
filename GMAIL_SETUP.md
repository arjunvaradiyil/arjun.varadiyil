# Gmail Setup for Nodemailer

This guide shows you how to set up Gmail SMTP with nodemailer using App Passwords (not OAuth).

## Step 1: Enable 2-Factor Authentication

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Enable it if not already enabled

## Step 2: Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Scroll down to "2-Step Verification" and click on it
3. Scroll down to "App passwords"
4. Click "Select app" and choose "Mail"
5. Click "Generate"
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 3: Configure Environment Variables

Create or edit your `.env.local` file:

```env
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=your-gmail@gmail.com
```

**Important Notes:**
- Replace `your-gmail@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated
- The app password is 16 characters with spaces (you can remove the spaces)

## Step 4: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check `arjunvardiyill203@gmail.com` for the email

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Make sure you're using the App Password, not your regular Gmail password
   - Ensure 2-Factor Authentication is enabled
   - Check that the App Password is exactly 16 characters

2. **"Invalid credentials"**
   - Verify your Gmail address is correct
   - Make sure you copied the entire App Password
   - Try regenerating the App Password

3. **"Connection timeout"**
   - Check your internet connection
   - Verify the SMTP settings are correct
   - Try using port 465 with `SMTP_SECURE=true`

## Alternative: Using OAuth (Advanced)

If you want to use OAuth instead of App Passwords:

1. Use the OAuth credentials you created
2. Install additional packages: `npm install googleapis`
3. Modify the nodemailer configuration to use OAuth2

However, **App Passwords are recommended** for simplicity and reliability.

## Security Notes

- Never share your App Password
- The App Password is different from your regular Gmail password
- You can revoke App Passwords from your Google Account settings
- The contact form includes rate limiting to prevent abuse

## Example Configuration

```env
# Example .env.local file
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=arjunvardiyill203@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
SMTP_FROM=arjunvardiyill203@gmail.com
```

## Verification

To verify your setup is working:

1. Check the console logs when submitting the form
2. Look for: `Message sent: <message-id>`
3. Check your email at `arjunvardiyill203@gmail.com`
4. Check spam folder if email doesn't appear in inbox 