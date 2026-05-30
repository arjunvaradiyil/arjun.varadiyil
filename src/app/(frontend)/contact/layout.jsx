import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Contact',
  description: `Contact ${SITE_NAME} — full stack developer in Kerala. Next.js, Payload CMS, and MERN stack. Send a message or book a call.`,
  keywords: [...KEYWORDS, 'Contact Full Stack Developer Kerala', 'Hire Web Developer Kerala'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/contact'),
    siteName: SITE_NAME,
    title: `Contact | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} — full stack developer building Next.js and Payload CMS platforms in Kerala.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} — full stack developer building Next.js and Payload CMS platforms in Kerala.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
