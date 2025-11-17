# Contact Form Setup Guide

This guide will help you configure the contact form with Cloudflare Turnstile protection and email delivery via SMTP.

## Overview

The contact form includes:
- **Cloudflare Turnstile**: Bot protection (privacy-friendly CAPTCHA alternative)
- **Nodemailer**: Email delivery via SMTP
- **Responsive Design**: Works on all devices with dark mode support

## Setup Instructions

### 1. Configure Cloudflare Turnstile

1. Go to [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Create a new site
3. Choose a widget mode:
   - **Managed**: Recommended for most use cases
   - **Non-Interactive**: Invisible to users
   - **Invisible**: No user interaction
4. Add your domain(s) (e.g., `cotersus.be`, `localhost` for development)
5. Copy your keys:
   - **Site Key**: Used in the frontend (public)
   - **Secret Key**: Used in the backend (private)

### 2. Configure SMTP Settings

Choose an SMTP provider and get your credentials:

#### Gmail (Recommended for testing)
1. Enable 2-factor authentication on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords)
3. Use these settings:
   - Host: `smtp.gmail.com`
   - Port: `587`
   - User: Your Gmail address
   - Password: The app password generated

#### Other Providers

**SendGrid**
- Host: `smtp.sendgrid.net`
- Port: `587`
- User: `apikey`
- Password: Your API key

**Mailgun**
- Host: `smtp.mailgun.org`
- Port: `587`
- User: Your SMTP username
- Password: Your SMTP password

**Outlook/Office 365**
- Host: `smtp.office365.com`
- Port: `587`
- User: Your email address
- Password: Your password

### 3. Set Environment Variables

Copy the `.env.local` file and fill in your credentials:

```bash
# Cloudflare Turnstile Configuration
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Contact Email (where form submissions will be sent)
CONTACT_EMAIL=info@cotersus.be
```

**Important Notes:**
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` must have the `NEXT_PUBLIC_` prefix (it's used in the browser)
- `TURNSTILE_SECRET_KEY` should NEVER be exposed to the client
- Keep `.env.local` secure and never commit it to version control

### 4. Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit [http://localhost:3000/contact](http://localhost:3000/contact)

3. Fill out and submit the form

4. Check that:
   - Turnstile widget loads and can be completed
   - Form submits successfully
   - Email arrives at the configured `CONTACT_EMAIL`

### 5. Production Deployment

When deploying to production (e.g., Vercel), add the environment variables:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add all variables from `.env.local`
4. Make sure to update the Turnstile domain settings to include your production domain

## Troubleshooting

### Turnstile widget not appearing
- Check that `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set correctly
- Verify the domain is added to your Turnstile site configuration
- Check browser console for errors

### Email not sending
- Verify SMTP credentials are correct
- Check that your SMTP provider allows the connection
- For Gmail, ensure 2FA is enabled and you're using an App Password
- Check server logs for detailed error messages

### Form submission fails
- Open browser DevTools Network tab
- Look for the `/api/contact` request
- Check the response for specific error messages
- Verify all environment variables are set

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use App Passwords** - Don't use your main email password
3. **Rotate keys regularly** - Especially if they're ever exposed
4. **Monitor submissions** - Watch for suspicious activity
5. **Rate limiting** - Consider adding rate limiting in production

## File Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # API endpoint with Turnstile verification and email sending
├── components/
│   └── ContactForm.tsx       # Contact form component with Turnstile
├── contact/
│   └── page.tsx              # Contact page
.env.local                     # Local environment variables (not committed)
.env.example                   # Template for environment variables
```

## Email Template

The email sent to `CONTACT_EMAIL` includes:
- Sender's name
- Sender's email (as reply-to)
- Subject line
- Message body
- Branded HTML template with Cotersus colors

You can customize the email template in `app/api/contact/route.ts`.

## Support

For issues or questions:
- Check the [Cloudflare Turnstile documentation](https://developers.cloudflare.com/turnstile/)
- Check the [Nodemailer documentation](https://nodemailer.com/)
- Contact your SMTP provider's support
