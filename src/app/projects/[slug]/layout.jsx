import { projects } from '../../../data/projectData';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../lib/siteSeo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project',
      robots: { index: false, follow: true },
    };
  }

  const description =
    project.tagline?.length > 40 ? project.tagline : `${project.title}. ${project.description}`.slice(0, 235);

  const path = `/projects/${slug}`;

  return {
    title: project.title,
    description,
    keywords: [...KEYWORDS, project.title, project.industry, ...(project.services || [])],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      title: `${project.title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProjectDetailLayout({ children }) {
  return children;
}
