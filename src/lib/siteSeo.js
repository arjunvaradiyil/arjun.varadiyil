/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Default `<title>` / OG title — query-aligned phrase first (~55 chars); brand second. */
export const SITE_TITLE_DEFAULT = 'Full Stack Developer in Kerala | Arjun Varadiyil';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/** Primary meta description — ~100–160 chars; sync layout + OG + Twitter + JSON-LD. */
export const DEFAULT_DESCRIPTION =
  'Full Stack Developer in Kerala — Next.js, Payload CMS & TypeScript for editorial platforms, headless CMS architecture, and high-traffic publishing. Biennale, news & civic tech.';

export const KEYWORDS = [
  'Full Stack Developer in Kerala',
  'Full Stack Developer Kerala',
  'Next.js Developer India',
  'Payload CMS Developer',
  'Next.js Developer Kerala',
  'headless CMS architecture',
  'production-grade web systems',
  'high-traffic application development',
  'digital journalism tech stack',
  'civic tech tools',
  'Professional Web Developer in Kerala',
  'Web Developer Kerala',
  'Web Developer Kochi',
  'Freelance Web Developer Kerala',
  'MERN Stack Developer Kerala',
  'React Developer Kerala',
  'Node.js Developer Kerala',
  'Editorial platform developer',
  'CMS developer India',
  'Arjun Varadiyil',
];

/** Optional social URLs — set when you have profiles; Footer/Sidebar can link them. */
export const FACEBOOK_URL = '';
export const X_URL = '';
export const YOUTUBE_URL = '';

export function absoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${path === '//' ? '/' : path}`;
}
