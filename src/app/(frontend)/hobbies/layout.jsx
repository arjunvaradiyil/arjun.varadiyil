import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Hobbies',
  description: `Hobbies and interests outside of code — ${SITE_NAME}, full stack developer based in Kerala.`,
  keywords: [...KEYWORDS, 'Developer hobbies', 'Creative portfolio'],
  alternates: {
    canonical: '/hobbies',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/hobbies'),
    siteName: SITE_NAME,
    title: `Hobbies | ${SITE_NAME}`,
    description: 'Creative interests and personal projects — Arjun Varadiyil, web developer Kerala.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hobbies | ${SITE_NAME}`,
    description: 'Creative interests and personal projects — Arjun Varadiyil, web developer Kerala.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HobbiesLayout({ children }) {
  return children;
}
