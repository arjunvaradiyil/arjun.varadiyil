import { SITEMAP_URL } from '../lib/siteSeo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: SITEMAP_URL,
  };
}
