import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../lib/siteSeo';

export const metadata = {
  title: 'Contact',
  description: `Contact ${SITE_NAME} for freelance web development in Kerala, Kochi, and Perinthalmanna — MERN stack, React, Node.js, MongoDB, and modern web apps.`,
  keywords: [...KEYWORDS, 'Hire Web Developer Kerala', 'Contact Freelance Developer'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/contact'),
    siteName: SITE_NAME,
    title: `Contact | ${SITE_NAME}`,
    description: `Hire ${SITE_NAME} for freelance web development and MERN stack projects in Kerala.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description: `Hire ${SITE_NAME} for freelance web development and MERN stack projects in Kerala.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
