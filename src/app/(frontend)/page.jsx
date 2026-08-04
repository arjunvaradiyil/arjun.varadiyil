import HomeClient from '../../components/editorial/HomeClient';
import MaintenanceScreen from '../../components/MaintenanceScreen';
import PageStructuredData from '../../components/PageStructuredData';
import { getProjects } from '../../lib/cms/content';
import { getFeaturedHomeProjects } from '../../lib/homeFeatured';
import { getBlogPosts } from '../../lib/blog';
import { isMaintenanceMode } from '../../lib/maintenance';
import { buildItemListSchema } from '../../lib/zeroClickSeo';
import {
  DEFAULT_DESCRIPTION,
  OG_DESCRIPTION,
  OG_TITLE,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  TWITTER_DESCRIPTION,
  absoluteUrl,
} from '../../lib/siteSeo';

export const revalidate = 60;

export const metadata = {
  title: SITE_TITLE_DEFAULT,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    url: absoluteUrl('/'),
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/profilepic-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — AI Engineer & Full Stack Developer in Kerala`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: TWITTER_DESCRIPTION,
    images: ['/profilepic-removebg-preview.png'],
  },
};

export default async function HomePage() {
  if (isMaintenanceMode()) {
    return <MaintenanceScreen />;
  }

  const projects = await getProjects();
  const featuredProjects = getFeaturedHomeProjects(projects);
  const posts = getBlogPosts().slice(0, 3);
  const featuredListSchema = buildItemListSchema({
    name: 'Featured projects — Arjun Varadiyil',
    description:
      'Selected production builds: Kochi Muziris Biennale CMS and Deshabhimani News Portal.',
    items: featuredProjects.map((project) => ({
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
  });

  return (
    <>
      <PageStructuredData schemas={featuredListSchema} />
      <HomeClient projects={featuredProjects} posts={posts} />
    </>
  );
}
