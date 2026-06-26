import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BlogPostCard from './BlogPostCard';
import { NEU } from '../ui/neuTheme';

export default function BlogRelatedPosts({ posts = [] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-[var(--color-border)] pt-10" aria-labelledby="related-posts-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={NEU.eyebrow}>Keep reading</p>
          <h2 id="related-posts-heading" className={`mt-3 ${NEU.display} text-2xl sm:text-3xl`}>
            More blogs
          </h2>
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
    </section>
  );
}
