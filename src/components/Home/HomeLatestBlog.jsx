import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getBlogPosts } from '../../lib/blog';
import { NEU } from '../ui/neuTheme';
import BlogPostCard from '../blog/BlogPostCard';

export default function HomeLatestBlog({ limit = 3 }) {
  const posts = getBlogPosts().slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
      aria-labelledby="home-blog-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={NEU.eyebrow}>Blogs</p>
            <h2 id="home-blog-heading" className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>
              Blogs
            </h2>
            <p className={`mt-4 max-w-2xl ${NEU.bodyText}`}>
              Architecture patterns, CMS workflows, and lessons from shipping production Next.js
              systems.
            </p>
          </div>
          <Link href="/blog" className={`inline-flex shrink-0 items-center gap-1.5 ${NEU.link}`}>
            All posts
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="min-w-0">
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
