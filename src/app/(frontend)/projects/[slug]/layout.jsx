import { getProjects } from '../../../../lib/cms/content';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../../lib/siteSeo';

export async function generateStaticParams() {
  const projects = await getProjects();
  const seen = new Set();
  return projects
    .filter((p) => {
      if (!p?.slug || seen.has(p.slug)) return false;
      seen.add(p.slug);
      return true;
    })
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project',
      robots: { index: false, follow: true },
    };
  }

  const description =
    project.tagline?.length > 40
      ? project.tagline
      : `${project.title}. ${project.description || project.about || ''}`.slice(0, 235);

  const path = `/projects/${slug}`;
  const image = project.image?.startsWith('/') ? project.image : `/${project.image}`;

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
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: `${project.title} — case study`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${SITE_NAME}`,
      description,
      images: image ? [image] : undefined,
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
