/**
 * Public pages included in /sitemap.xml — keep in sync with src/lib/navLinks.js routes.
 */
export const STATIC_SITEMAP_PAGES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/projects', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/certifications', changeFrequency: 'monthly', priority: 0.75 },
];
