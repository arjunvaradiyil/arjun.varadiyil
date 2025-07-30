import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      frontmatter: data,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">My Blog</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Thoughts on technology, development, and everything in between.
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="block bg-slate-800/50 p-8 rounded-lg shadow-lg hover:bg-slate-800 transition-colors duration-300 cursor-pointer">
                <p className="text-sm text-gray-400">{new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="mt-2 text-2xl font-bold text-white hover:text-amber-400">{post.frontmatter.title}</h2>
                <p className="mt-3 text-gray-300">{post.frontmatter.summary}</p>
                <span className="mt-4 inline-block font-semibold text-amber-400 hover:text-amber-500">Read more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 