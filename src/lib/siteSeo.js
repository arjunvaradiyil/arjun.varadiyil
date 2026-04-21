/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Default `<title>` / OG title — query-aligned phrase first (~55 chars); brand second. */
export const SITE_TITLE_DEFAULT = 'Professional Web Developer in Kerala | Arjun Varadiyil';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/** Primary meta description — ~100–160 chars; sync layout + OG + Twitter + JSON-LD. */
export const DEFAULT_DESCRIPTION =
  'Professional web developer in Kerala — Kochi, Malappuram & Perinthalmanna. MERN stack & Next.js — marketing sites, dashboards, APIs. Portfolio, projects & contact.';

/** Optional social URLs — set when you have profiles; Footer/Sidebar can link them. */
export const FACEBOOK_URL = '';
export const X_URL = '';
export const YOUTUBE_URL = '';

export const KEYWORDS = [
  'Professional Web Developer in Kerala',
  'Professional Web Developer in Malappuram',
  'Web Developer Malappuram',
  'Web Developer Kerala',
  'Web Designer Kerala',
  'Web Developer Kochi',
  'Web Designer Kochi',
  'Web Developer Perinthalmanna',
  'Freelance Web Developer Kerala',
  'Best Web Developer Kerala',
  'Web Developer Near Me',
  'MERN Stack Developer Kerala',
  'React Developer Kerala',
  'Full Stack Developer Kerala',
  'Node.js Developer Kerala',
  'Freelance Web Designer',
  'Professional Web Developer',
  'Web Development Services Kerala',
  'Arjun Varadiyil',
];

export function absoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${path === '//' ? '/' : path}`;
}
