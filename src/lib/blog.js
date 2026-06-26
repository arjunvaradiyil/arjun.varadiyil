import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

/** Default cover images when frontmatter `image` is omitted. */
const DEFAULT_POST_IMAGES = {
  'building-my-portfolio-with-nextjs-and-payload-cms': '/portfloio.png',
  'payload-cms-collections-for-newsroom-workflows': '/payloadworkflow.png',
  'nextjs-isr-patterns-for-editorial-sites': '/nextjsisr.png',
  'payload-cms-tutorial': '/payloadcms.png',
  'nextjs-interview-questions': '/nextjs.png',
  'mongodb-performance-tips': '/mongo.png',
  'react-performance-optimization': '/REACT.png',
  'ai-agents-practical-guide': '/aiagents.png',
  'langchain-for-developers': '/langchain.png',
  'headless-cms-architecture': '/headless.png',
};

function normalizeImagePath(image) {
  if (!image || typeof image !== 'string') return '';
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  return image.startsWith('/') ? image : `/${image}`;
}

function normalizeDate(date) {
  if (!date) return '';
  if (date instanceof Date && !Number.isNaN(date.getTime())) {
    return date.toISOString().slice(0, 10);
  }

  const str = String(date).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);

  const parsed = new Date(str);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return str;
}

function resolvePostImage(data, slug) {
  const fromFrontmatter = normalizeImagePath(data.image);
  if (fromFrontmatter) return fromFrontmatter;
  return DEFAULT_POST_IMAGES[slug] || '/assets/images/lighthouse-home.png';
}

function parsePostFile(filename) {
  const slug = filename.replace(/\.md$/, '');
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const title =
    data.title ||
    content.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
    slug.replace(/-/g, ' ');

  return {
    slug: data.slug || slug,
    title,
    description: data.description || content.replace(/^#.+$/m, '').trim().slice(0, 180),
    date: normalizeDate(data.date),
    published: data.published !== false,
    tags: Array.isArray(data.tags) ? data.tags.filter(Boolean) : [],
    image: resolvePostImage(data, data.slug || slug),
    imageAlt: data.imageAlt || `${title} — cover image`,
    content: stripTrailingCta(stripLeadingH1(content)),
  };
}

/** Remove duplicate markdown H1 — title is rendered in the page header. */
export function stripLeadingH1(content) {
  return content.replace(/^#\s+[^\n]+\n+/, '').trimStart();
}

/** Remove Related / Connect footers — rendered in the page layout. */
export function stripTrailingCta(content) {
  return content.replace(/\n---\n+\*\*Related:\*\*[\s\S]*$/m, '').trimEnd();
}

export function getReadingTimeMinutes(content) {
  const text = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#*`_~[\]()>-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getPostTopic(slug, tags = []) {
  if (tags.length > 0) return tags[0];
  if (slug.includes('payload')) return 'Payload CMS';
  if (slug.includes('nextjs')) return 'Next.js';
  if (slug.includes('mongodb')) return 'MongoDB';
  if (slug.includes('react')) return 'React';
  if (slug.includes('langchain')) return 'AI';
  if (slug.includes('ai-agents')) return 'AI Agents';
  if (slug.includes('cms')) return 'CMS';
  return 'Full Stack';
}

/** Split long titles at em dash for headline + subtitle display. */
export function splitPostTitle(title) {
  if (!title || !title.includes(' — ')) {
    return { main: title, sub: null };
  }

  const [main, sub] = title.split(' — ');
  return { main: main.trim(), sub: sub?.trim() || null };
}

export function getRelatedPosts(slug, limit = 3) {
  return getBlogPosts().filter((post) => post.slug !== slug).slice(0, limit);
}

export function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(parsePostFile)
    .filter((post) => post.published)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getBlogPost(slug) {
  return getBlogPosts().find((post) => post.slug === slug) ?? null;
}

export function getBlogSlugs() {
  return getBlogPosts().map((post) => post.slug);
}

/** Sitemap entries for published blog posts. */
export function getBlogPostsForSitemap() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));
}
