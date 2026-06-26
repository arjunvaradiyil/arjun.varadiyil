import { getProjectsForSitemap } from '../lib/cms/content';
import { getBlogPostsForSitemap } from '../lib/blog';
import { STATIC_SITEMAP_PAGES } from '../lib/sitemap';
import { SITE_URL } from '../lib/siteSeo';

export const revalidate = 3600;

export default async function sitemap() {
  const [projects, blogPosts] = await Promise.all([
    getProjectsForSitemap(),
    Promise.resolve(getBlogPostsForSitemap()),
  ]);
  const now = new Date();

  const staticRoutes = STATIC_SITEMAP_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: project.lastModified ?? now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastModified ?? now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
