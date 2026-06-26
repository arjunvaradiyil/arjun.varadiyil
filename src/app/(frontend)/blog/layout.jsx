import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Blogs',
  description: `Technical blogs on Next.js, Payload CMS, and full stack delivery — ${SITE_NAME}.`,
  keywords: [...KEYWORDS, 'Next.js blog', 'Payload CMS', 'Full Stack Developer Kerala'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/blog'),
    siteName: SITE_NAME,
    title: `Blogs | ${SITE_NAME}`,
    description: 'Technical posts on Next.js, Payload CMS, and production full stack work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blogs | ${SITE_NAME}`,
    description: 'Technical posts on Next.js, Payload CMS, and production full stack work.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({ children }) {
  return children;
}
