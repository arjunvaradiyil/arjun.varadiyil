import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../lib/siteSeo';

export const metadata = {
  title: 'Certifications',
  description: `Credentials and certifications — MERN stack, JavaScript, Python, and NSDC programs — ${SITE_NAME}, full stack web developer Kerala, Kochi, Perinthalmanna.`,
  keywords: [...KEYWORDS, 'Full Stack Certification', 'MERN Stack Certification', 'HackerRank', 'NSDC'],
  alternates: {
    canonical: '/certifications',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/certifications'),
    siteName: SITE_NAME,
    title: `Certifications | ${SITE_NAME}`,
    description:
      'Professional certifications in full-stack MERN, JavaScript, Python, and NSDC — Arjun Varadiyil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Certifications | ${SITE_NAME}`,
    description:
      'Professional certifications in full-stack MERN, JavaScript, Python, and NSDC — Arjun Varadiyil.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CertificationsLayout({ children }) {
  return children;
}
