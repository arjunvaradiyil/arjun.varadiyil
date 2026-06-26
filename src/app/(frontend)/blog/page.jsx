import PageStructuredData from '../../../components/PageStructuredData';
import BlogPostCard from '../../../components/blog/BlogPostCard';
import { getBlogPosts } from '../../../lib/blog';
import { buildItemListSchema } from '../../../lib/zeroClickSeo';
import { absoluteUrl } from '../../../lib/siteSeo';
import { NEU } from '../../../components/ui/neuTheme';

export default function BlogPage() {
  const posts = getBlogPosts();
  const listSchema = buildItemListSchema({
    name: 'Blogs — Arjun Varadiyil',
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
          <p className={NEU.eyebrow}>Blogs</p>
          <h1 className={`mt-4 ${NEU.display} text-4xl sm:text-5xl lg:text-6xl`}>
            Blogs
          </h1>
          <p className={`mt-6 max-w-2xl ${NEU.bodyText}`}>
            Architecture, CMS patterns, and lessons from shipping production Next.js systems.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className={`mt-12 ${NEU.bodyText}`}>Posts coming soon.</p>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="min-w-0">
                <BlogPostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
