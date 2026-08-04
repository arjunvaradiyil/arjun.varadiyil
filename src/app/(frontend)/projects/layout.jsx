import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export const metadata = {
  title: 'Projects',
  description: `Portfolio by ${SITE_NAME} — festival CMS, Malayalam and Telugu newsrooms, and civic tools with Next.js and Payload CMS.`,
  keywords: [...KEYWORDS, 'Portfolio Web Developer', 'Next.js Projects Kerala', 'AI Engineer Portfolio'],
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
      'Production builds — Biennale CMS, Deshabhimani, Prajasakti, and My Vote My Voice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Production builds — Biennale CMS, Deshabhimani, Prajasakti, and My Vote My Voice.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
