'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';

export function Mdx(props: MDXRemoteProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...props} />
    </div>
  );
} 