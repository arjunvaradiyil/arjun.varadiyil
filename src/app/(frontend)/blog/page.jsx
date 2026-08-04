import PageStructuredData from '../../../components/PageStructuredData';
import BlogPostCard from '../../../components/blog/BlogPostCard';
import EditorialShell from '../../../components/editorial/EditorialShell';
import { getBlogPosts } from '../../../lib/blog';
import { buildItemListSchema } from '../../../lib/zeroClickSeo';
import { absoluteUrl } from '../../../lib/siteSeo';

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
    <EditorialShell>
      <PageStructuredData schemas={listSchema} />
      <div className="px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl border-b border-black/10 pb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">[ Writing ]</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Blogs
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-neutral-600 sm:text-base">
              Architecture, CMS patterns, and lessons from shipping production Next.js systems.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="mt-12 font-mono text-sm text-neutral-500">Posts coming soon.</p>
          ) : (
            <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <BlogPostCard post={post} variant="editorial" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </EditorialShell>
  );
}
