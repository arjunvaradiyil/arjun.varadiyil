import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { getBlogPosts } from '../../lib/blog';
import { NEU } from '../ui/neuTheme';

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMM d, yyyy');
  } catch {
    return date;
  }
}

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
            <p className={NEU.eyebrow}>Writing</p>
            <h2 id="home-blog-heading" className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>
              Technical notes
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

        <ul className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 py-7 transition hover:bg-[var(--color-hover)] sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-4"
              >
                <div className="max-w-2xl">
                  {post.date ? (
                    <time
                      dateTime={post.date}
                      className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]"
                    >
                      {formatDate(post.date)}
                    </time>
                  ) : null}
                  <h3 className={`mt-2 ${NEU.display} text-xl sm:text-2xl`}>{post.title}</h3>
                  {post.description ? (
                    <p className={`mt-2 ${NEU.bodyText}`}>{post.description}</p>
                  ) : null}
                </div>
                <span className={`inline-flex shrink-0 items-center gap-1.5 ${NEU.link}`}>
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
