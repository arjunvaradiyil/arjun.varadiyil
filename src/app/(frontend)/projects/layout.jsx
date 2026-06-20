import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Projects',
  description: `Portfolio by ${SITE_NAME} — healthcare, civic, education, and campaign platforms with Next.js and full stack development.`,
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
      'Six live full stack builds — Biennale CMS, Prajasakti news, clinic, civic, quiz, and AI campaign.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Six live full stack builds — Biennale CMS, Prajasakti news, clinic, civic, quiz, and AI campaign.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
