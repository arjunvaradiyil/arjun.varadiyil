import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import BlogPostContent from '../../../../components/blog/BlogPostContent';
import PageStructuredData from '../../../../components/PageStructuredData';
import { getBlogPost, getBlogSlugs } from '../../../../lib/blog';
import { buildBlogPostingSchema } from '../../../../lib/zeroClickSeo';
import { NEU } from '../../../../components/ui/neuTheme';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../../lib/siteSeo';

function formatDate(date) {
  if (!date) return '';
  try {
    return format(parseISO(date), 'MMMM d, yyyy');
  } catch {
    return date;
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

  return {
    title: post.title,
    description: post.description,
    keywords: [...KEYWORDS, 'Next.js', 'Payload CMS', post.title],
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
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
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

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <PageStructuredData schemas={buildBlogPostingSchema(post)} />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32 lg:px-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-foreground)]"
        >
          <FiArrowLeft aria-hidden />
          All posts
        </Link>

        <header className="mt-10 border-b border-[var(--color-border)] pb-10">
          {post.date ? (
            <time
              dateTime={post.date}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]"
            >
              {formatDate(post.date)}
            </time>
          ) : null}
          <h1 className={`mt-4 ${NEU.display} text-3xl sm:text-4xl lg:text-5xl`}>{post.title}</h1>
          {post.description ? (
            <p className={`mt-5 ${NEU.bodyText}`}>{post.description}</p>
          ) : null}
        </header>

        <div className="mt-10">
          <BlogPostContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
