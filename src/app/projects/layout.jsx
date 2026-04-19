import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../lib/siteSeo';

export const metadata = {
  title: 'Projects',
  description: `Portfolio and case studies by ${SITE_NAME}: Next.js, React, and MERN web builds for healthcare, civic, and more — freelance web developer Kerala, Kochi, Perinthalmanna.`,
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
      'Web development portfolio — Next.js, React, MERN projects in Kerala by Arjun Varadiyil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Web development portfolio — Next.js, React, MERN projects in Kerala by Arjun Varadiyil.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
