import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Projects',
  description: `Portfolio by ${SITE_NAME} — arts & culture, news publishing, and civic tech with Next.js, Payload CMS, and full stack development.`,
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
      'Selected work — arts & culture CMS, news portal, and civic tech built with Next.js and Payload CMS.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Selected work — arts & culture CMS, news portal, and civic tech built with Next.js and Payload CMS.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
