/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/** Primary meta description (~235 chars) — keep in sync across layout + OG where used. */
export const DEFAULT_DESCRIPTION =
  'Professional Web Developer & Web Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack. Expert in React, Node.js, MongoDB. Hire the best web developer near you for modern web applications.';

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
