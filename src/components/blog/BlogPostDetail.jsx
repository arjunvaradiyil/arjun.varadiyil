'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import RajanPageShell from '../home-rajan/RajanPageShell';
import BlogPostContent from './BlogPostContent';
import { PROFILE, PROFESSIONAL_SUMMARY } from '../../data/aboutData';
import { LINKEDIN_URL } from '../../data/proof';

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMMM d, yyyy');
  } catch {
    return String(date);
  }
}

export default function BlogPostDetail({
  post,
  related = [],
  readingTime,
  topic,
  shareUrl,
}) {
  return (
    <RajanPageShell>
      <article className="px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black"
          >
            <ArrowLeft size={14} /> Blogs
          </Link>

          {post.image ? (
            <div className="relative mt-8 aspect-[21/10] w-full overflow-hidden border-2 border-black bg-neutral-100">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 896px"
                className="object-cover object-center"
              />
            </div>
          ) : null}

          <header className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-black/20 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-700">
                {topic}
              </span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
                {post.date ? ' · ' : ''}
                {readingTime} min read
              </p>
            </div>

            <h1 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {post.description ? (
              <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-neutral-600 sm:text-base">
                {post.description}
              </p>
            ) : null}

            {post.tags?.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-neutral-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          <div className="prose-rajan mt-12 border-t border-black/10 pt-10">
            <BlogPostContent content={post.content} variant="rajan" />
          </div>

          <section
            className="mt-14 flex flex-col gap-5 border border-black/10 bg-neutral-50 p-6 sm:flex-row sm:items-start sm:gap-6"
            aria-labelledby="blog-author-heading"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-black/20 bg-white">
              <Image
                src="/profilepic-removebg-preview.png"
                alt={PROFILE.name}
                fill
                sizes="64px"
                className="object-cover object-center"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Author</p>
              <h2 id="blog-author-heading" className="mt-2 font-display text-lg font-bold">
                {PROFILE.name}
              </h2>
              <p className="mt-2 font-mono text-sm leading-relaxed text-neutral-600">
                {PROFESSIONAL_SUMMARY}
              </p>
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer me"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition hover:text-[#ff5e3a]"
              >
                Connect on LinkedIn <ArrowUpRight size={12} />
              </Link>
            </div>
          </section>

          {shareUrl ? (
            <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-gray-400">
              Share · {shareUrl.replace(/^https?:\/\//, '')}
            </p>
          ) : null}
        </div>

        {related.length > 0 ? (
          <section className="mx-auto mt-20 max-w-6xl border-t border-black/10 pt-14">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
                  [ Keep reading ]
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">More blogs</h2>
              </div>
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black"
              >
                All posts →
              </Link>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col border border-black/10 p-6 transition hover:border-black"
                  >
                    {item.date ? (
                      <time
                        dateTime={item.date}
                        className="font-mono text-[10px] uppercase tracking-widest text-gray-400"
                      >
                        {formatDate(item.date)}
                      </time>
                    ) : null}
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:underline">
                      {item.title}
                    </h3>
                    {item.description ? (
                      <p className="mt-3 line-clamp-3 flex-1 font-mono text-xs leading-relaxed text-neutral-500">
                        {item.description}
                      </p>
                    ) : null}
                    <span className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Read <ArrowUpRight size={12} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </RajanPageShell>
  );
}
