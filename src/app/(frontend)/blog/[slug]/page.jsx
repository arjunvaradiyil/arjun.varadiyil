import { notFound } from 'next/navigation';
import BlogPostDetail from '../../../../components/blog/BlogPostDetail';
import PageStructuredData from '../../../../components/PageStructuredData';
import {
  getBlogPost,
  getBlogSlugs,
  getPostTopic,
  getReadingTimeMinutes,
  getRelatedPosts,
} from '../../../../lib/blog';
import { buildBlogPostingSchema, buildBreadcrumbSchema } from '../../../../lib/zeroClickSeo';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '../../../../lib/siteSeo';

export const revalidate = 60;

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
    <>
      <PageStructuredData schemas={schemas} />
      <BlogPostDetail
        post={post}
        related={related}
        readingTime={readingTime}
        topic={topic}
        shareUrl={shareUrl}
      />
    </>
  );
}
