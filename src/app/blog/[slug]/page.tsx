import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Mdx } from '@/components/Mdx';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return { frontmatter: data, content: compiledContent };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getPost(params.slug);

  return (
    <div className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-base font-semibold text-amber-400">{new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">{frontmatter.title}</h1>
        </div>
        
        <article>
          <Mdx source={content} />
        </article>

        <div className="mt-16 text-center">
          <Link href="/blog">
            <span className="text-amber-400 hover:text-amber-500 font-semibold">&larr; Back to all posts</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 