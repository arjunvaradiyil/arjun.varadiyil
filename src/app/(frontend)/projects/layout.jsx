import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Projects',
  description: `Portfolio by ${SITE_NAME}: Kochi–Muziris Biennale platform, Deshabhimani news portal, and MyIdukki civic app — Next.js, Payload CMS, and full stack delivery in Kerala.`,
  keywords: [...KEYWORDS, 'Portfolio Web Developer', 'Next.js Projects Kerala', 'React Portfolio'],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/projects'),
    siteName: SITE_NAME,
    title: `Projects | ${SITE_NAME}`,
    description:
      'Selected work — biennale platform, news portal, and civic tech built with Next.js and Payload CMS by Arjun Varadiyil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Selected work — biennale platform, news portal, and civic tech built with Next.js and Payload CMS by Arjun Varadiyil.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
