import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import BlogPostThumbnail from './BlogPostThumbnail';
import { splitPostTitle } from '../../lib/blog';
import { NEU } from '../ui/neuTheme';

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMM d, yyyy');
  } catch {
    return date;
  }
}

export default function BlogPostCard({ post }) {
  const { main: titleMain, sub: titleSub } = splitPostTitle(post.title);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full min-w-0 flex-col border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-hover)]"
    >
      <BlogPostThumbnail
        src={post.image}
        alt={post.imageAlt}
        className="w-full sm:w-full"
        aspect="video"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {post.date ? (
          <time
            dateTime={post.date}
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]"
          >
            {formatDate(post.date)}
          </time>
        ) : null}
        <h3 className={`mt-3 ${NEU.display} text-lg leading-snug sm:text-xl`}>{titleMain}</h3>
        {titleSub ? (
          <p className={`mt-1 ${NEU.display} text-sm leading-snug text-[var(--color-foreground-soft)] sm:text-base`}>
            {titleSub}
          </p>
        ) : null}
        {post.description ? (
          <p className={`mt-3 line-clamp-3 flex-1 ${NEU.bodyText}`}>{post.description}</p>
        ) : null}
        <span className={`mt-5 inline-flex items-center gap-1.5 ${NEU.link}`}>
          Read
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
