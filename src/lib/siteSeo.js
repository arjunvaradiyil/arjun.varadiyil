/** Shared defaults for metadata (title, description, keywords, canonical base). */

export const SITE_NAME = 'Arjun Varadiyil';
export const SITE_URL = 'https://arjunvaradiyil.in';

/** Contact email — use in mailto/API/schema only; avoid plain text in visible UI. */
export const SITE_EMAIL = 'arjunvaradiyil203@gmail.com';

/** Default `<title>` — 50–60 chars; primary keywords first. */
export const SITE_TITLE_DEFAULT =
  'AI Engineer & Full Stack Developer Kerala | Arjun Varadiyil';

/** Meta description — 120–160 chars. */
export const DEFAULT_DESCRIPTION =
  'AI Engineer & Full Stack Developer in Kerala — Next.js, Payload CMS, and AI agent workflows for newsrooms, festivals, and civic platforms.';

/** Open Graph title — 25–35 chars. */
export const OG_TITLE = 'Arjun Varadiyil | AI & Full Stack';

/** Open Graph description — 55–65 chars. */
export const OG_DESCRIPTION =
  'Next.js, Payload CMS & AI agents — production platforms from Kerala.';

/** Twitter card description — 150–200 chars. */
export const TWITTER_DESCRIPTION =
  'AI Engineer & Full Stack Developer building Next.js and Payload CMS products plus LangChain/RAG workflows. Based in Kerala, India.';

/** Book-a-call link (Topmate) — career guidance, resume review, mentoring */
export const TOPMATE_URL = 'https://topmate.io/arjun_varadiyil';

/** Absolute sitemap URL — use in robots.txt and Search Console. */
export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

export const KEYWORDS = [
  'AI Engineer Kerala',
  'AI Engineer India',
  'Full Stack Developer in Kerala',
  'Full Stack Developer Kerala',
  'Next.js Developer India',
  'Payload CMS Developer',
  'Next.js Developer Kerala',
  'LangChain developer',
  'RAG engineer',
  'headless CMS architecture',
  'production-grade web systems',
  'digital journalism tech stack',
  'civic tech tools',
  'Professional Web Developer in Kerala',
  'Web Developer Kerala',
  'Web Developer Kochi',
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
