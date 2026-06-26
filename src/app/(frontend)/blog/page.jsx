import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import PageStructuredData from '../../../components/PageStructuredData';
import { getBlogPosts } from '../../../lib/blog';
import { buildItemListSchema } from '../../../lib/zeroClickSeo';
import { absoluteUrl } from '../../../lib/siteSeo';
import { NEU } from '../../../components/ui/neuTheme';

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMM d, yyyy');
  } catch {
    return date;
  }
}

export default function BlogPage() {
  const posts = getBlogPosts();
  const listSchema = buildItemListSchema({
    name: 'Technical notes — Arjun Varadiyil',
    description: 'Architecture, CMS patterns, and lessons from shipping production Next.js systems.',
    items: posts.map((post) => ({
      name: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  });

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <PageStructuredData schemas={listSchema} />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32 lg:px-12">
        <header className="max-w-3xl border-b border-[var(--color-border)] pb-10">
          <p className={NEU.eyebrow}>Writing</p>
          <h1 className={`mt-4 ${NEU.display} text-4xl sm:text-5xl lg:text-6xl`}>
            Technical notes
          </h1>
          <p className={`mt-6 max-w-2xl ${NEU.bodyText}`}>
            Architecture, CMS patterns, and lessons from shipping production Next.js systems.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className={`mt-12 ${NEU.bodyText}`}>Posts coming soon.</p>
        ) : (
          <ul className="mt-12 divide-y divide-[var(--color-border)]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 py-8 transition hover:bg-[var(--color-hover)] sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-4"
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
                    <h2 className={`mt-3 ${NEU.display} text-2xl sm:text-3xl`}>{post.title}</h2>
                    {post.description ? (
                      <p className={`mt-3 ${NEU.bodyText}`}>{post.description}</p>
                    ) : null}
                  </div>
                  <span className={`inline-flex shrink-0 items-center gap-1.5 ${NEU.link}`}>
                    Read post
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
