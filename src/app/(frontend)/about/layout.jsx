import { DEFAULT_DESCRIPTION, KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'About',
  description: `About Arjun Varadiyil — Full Stack Developer at Faircode Infotech, Kerala. Biennale platforms, news portals, and civic tech with Next.js and Payload CMS.`,
  keywords: [...KEYWORDS, 'About Web Developer Kerala', 'Developer portfolio Kerala'],
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl('/about'),
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }) {
  return children;
}
