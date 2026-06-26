import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

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
    date: data.date ? String(data.date) : '',
    published: data.published !== false,
    content,
  };
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
