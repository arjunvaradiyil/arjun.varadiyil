import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import BlogPostAuthor from '../../../../components/blog/BlogPostAuthor';
import BlogPostContent from '../../../../components/blog/BlogPostContent';
import BlogPostCover from '../../../../components/blog/BlogPostCover';
import BlogPostShare from '../../../../components/blog/BlogPostShare';
import BlogRelatedPosts from '../../../../components/blog/BlogRelatedPosts';
import PageStructuredData from '../../../../components/PageStructuredData';
import {
  getBlogPost,
  getBlogSlugs,
  getPostTopic,
  getReadingTimeMinutes,
  getRelatedPosts,
} from '../../../../lib/blog';
import { buildBlogPostingSchema, buildBreadcrumbSchema } from '../../../../lib/zeroClickSeo';
import { NEU } from '../../../../components/ui/neuTheme';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../../lib/siteSeo';

export const revalidate = 60;

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMMM d, yyyy').toUpperCase();
  } catch {
    return String(date).toUpperCase();
  }
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post',
      robots: { index: false, follow: true },
    };
  }

  const path = `/blog/${slug}`;
  const ogImage = post.image?.startsWith('http') ? post.image : absoluteUrl(post.image);

  return {
    title: post.title,
    description: post.description,
    keywords: [...KEYWORDS, 'Next.js', 'Payload CMS', post.title, ...post.tags],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      publishedTime: post.date || undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const readingTime = getReadingTimeMinutes(post.content);
  const topic = getPostTopic(slug, post.tags);
  const shareUrl = absoluteUrl(`/blog/${slug}`);

  const schemas = [
    buildBlogPostingSchema(post),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blogs', url: '/blog' },
      { name: post.title, url: `/blog/${slug}` },
    ]),
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] pb-16 text-[var(--color-foreground)] sm:pb-24">
      <PageStructuredData schemas={schemas} />

      <div className="mx-auto max-w-5xl px-5 pt-20 sm:px-8 sm:pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-accent)]"
        >
          <FiArrowLeft aria-hidden />
          Blogs
        </Link>

        {post.image ? (
          <BlogPostCover
            src={post.image}
            alt={post.imageAlt}
            priority
            variant="hero"
            className="mt-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)]"
          />
        ) : null}

        <div
          className={`relative z-10 border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 ${
            post.image ? '-mt-10 sm:-mt-14' : 'mt-6'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-foreground)]">
              {topic}
            </span>
            <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-subtle)]">
              {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
              {post.date ? ' • ' : ''}
              {readingTime} min read
            </p>
          </div>

          <h1 className="mt-6 font-syne text-3xl font-bold normal-case leading-tight tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-[2.65rem]">
            {post.title}
          </h1>

          {post.description ? (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-foreground-muted)] sm:text-lg">
              {post.description}
            </p>
          ) : null}

          {post.tags?.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag} className={NEU.techTag}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-10 border-t border-[var(--color-border)] pt-8 lg:mt-12 lg:pt-10">
            <div className="mb-8 lg:hidden">
              <BlogPostShare shareUrl={shareUrl} title={post.title} />
            </div>

            <div className="relative lg:pl-16">
              <BlogPostShare
                shareUrl={shareUrl}
                title={post.title}
                className="absolute left-0 top-0 hidden lg:flex"
              />
              <BlogPostContent content={post.content} />
            </div>
          </div>

          <BlogPostAuthor />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <BlogRelatedPosts posts={related} />
      </div>
    </div>
  );
}
