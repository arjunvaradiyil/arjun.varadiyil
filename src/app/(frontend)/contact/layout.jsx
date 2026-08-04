import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Contact',
  description: `Contact ${SITE_NAME} — AI Engineer & Full Stack Developer at Faircode Infotech, Kerala. Next.js, Payload CMS, AI agents. Send a message or book a call.`,
  keywords: [
    ...KEYWORDS,
    'Contact AI Engineer Kerala',
    'Hire Full Stack Developer Kerala',
    'Hire Web Developer Kerala',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/contact'),
    siteName: SITE_NAME,
    title: `Contact | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} — AI Engineer & Full Stack Developer shipping Next.js, Payload CMS, and agent workflows from Kerala.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} — AI Engineer & Full Stack Developer shipping Next.js, Payload CMS, and agent workflows from Kerala.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
