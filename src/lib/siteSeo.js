/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Contact email — use in mailto/API/schema only; avoid plain text in visible UI. */
export const SITE_EMAIL = 'arjunvaradiyil203@gmail.com';

/** Default `<title>` — 50–60 chars; primary keywords first. */
export const SITE_TITLE_DEFAULT =
  'Next.js & Payload CMS Developer in Kerala | Arjun Varadiyil';

/** Meta description — 120–160 chars. */
export const DEFAULT_DESCRIPTION =
  'Full Stack Developer at Faircode Infotech in Kerala — production Next.js platforms with Payload CMS for healthcare, civic, education, and campaign clients.';

/** Open Graph title — 25–35 chars. */
export const OG_TITLE = 'Arjun Varadiyil | Next.js Dev';

/** Open Graph description — 55–65 chars. */
export const OG_DESCRIPTION =
  'Kerala Full Stack Developer — Next.js, Payload CMS, civic tech.';

/** Twitter card description — 150–200 chars. */
export const TWITTER_DESCRIPTION =
  'Full Stack Developer at Faircode Infotech, Kerala. Builds production Next.js platforms with Payload CMS for healthcare, civic, and education clients — live work includes Kochi Muziris Biennale CMS.';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

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
