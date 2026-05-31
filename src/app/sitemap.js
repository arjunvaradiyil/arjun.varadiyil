import { STATIC_SITEMAP_PAGES } from '../lib/sitemap';
import { SITE_URL } from '../lib/siteSeo';

export const revalidate = 3600;

export default async function sitemap() {
  // const projects = await getProjectsForSitemap();
  const now = new Date();

  const staticRoutes = STATIC_SITEMAP_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // const projectRoutes = projects
  //   .filter((project) => project.slug)
  //   .map((project) => ({
  //     url: `${SITE_URL}/projects/${project.slug}`,
  //     lastModified: project.lastModified ?? now,
  //     changeFrequency: 'monthly',
  //     priority: 0.8,
  //   }));

  return staticRoutes;
  // return [...staticRoutes, ...projectRoutes];
}
