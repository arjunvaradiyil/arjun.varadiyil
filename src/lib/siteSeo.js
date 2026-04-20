/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Default `<title>` / OG title — aim ~50–60 characters for SERP display. */
export const SITE_TITLE_DEFAULT = 'Arjun Varadiyil | Full-Stack MERN Web Developer in Kerala';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/** Primary meta description — ~100–130 chars for stricter audit tools; sync layout + OG + Twitter + JSON-LD. */
export const DEFAULT_DESCRIPTION =
  'MERN full-stack developer in Kerala: React, Next.js, Node.js, MongoDB. Freelance web apps — portfolio & contact.';

/** Optional social URLs — set when you have profiles; Footer/Sidebar can link them. */
export const FACEBOOK_URL = '';
export const X_URL = '';
export const YOUTUBE_URL = '';

export const KEYWORDS = [
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
