import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Contact',
  description: `Contact ${SITE_NAME} — Full Stack Developer at Faircode Infotech, Kerala. Next.js, Payload CMS. Send a message or book a call.`,
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
    description: `Contact ${SITE_NAME} — Full Stack Developer at Faircode Infotech building Next.js and Payload CMS platforms in Kerala.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} — Full Stack Developer at Faircode Infotech building Next.js and Payload CMS platforms in Kerala.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
