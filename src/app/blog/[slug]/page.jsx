'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "../../../data/blogData";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Post Not Found</h1>
          <button
            onClick={() => router.push('/blog')}
            className="text-blue-500 dark:text-cyan-400 hover:underline"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 10);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString)
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .toLowerCase();
  };

  return (
    <section className="text-gray-700 dark:text-white min-h-screen px-6 md:px-16 py-20">
      {/* Header - Keep same as old code */}
      <button 
        onClick={() => router.back()} 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 transition-colors w-12 h-12 rounded-full border border-gray-600 justify-center hover:border-[#8f8f8f] hover:bg-[#8f8f8f] text-gray-800 dark:text-[#cacaca] hover:text-blue-500 dark:hover:text-cyan-400"
      >
        <ArrowLeft className="w-7 h-7"/>
      </button>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-[128px] sm:mt-[4.27vw]">
        {/* Left Sidebar - Sticky */}
        <div className="max-w-[628px] sm:w-[32.7vw] sm:sticky sm:top-[calc(80px+4.27vw)] h-min overflow-hidden">
          <div className="border-b border-b-[#EF3942] pb-[20px] sm:pb-[1.82vw]">
            <p className="text-[#666666] text-sm sm:text-base mb-4">
              {post.category || "Blog Post"}
            </p>
            <h1 className="uppercase mt-[24px] sm:mt-[1.25vw] text-[40px] md:text-[56px] leading-tight text-gray-800 dark:text-[#cacaca] font-anton break-words">
              {post.title}
            </h1>
          </div>
          <div className="mt-[24px] sm:mt-[1.82vw] flex sm:justify-between gap-[53px] sm:gap-4 text-[#666666]">
            <div className="flex flex-col">
              <p className="mb-4 sm:mb-[0.72vw] text-sm sm:text-base">
                Author:
              </p>
              <p className="text-sm sm:text-base">
                {post.author || "N/A"}
              </p>
            </div>
            <div>
              <p className="mb-4 sm:mb-[0.72vw] text-sm sm:text-base">
                Published on:
              </p>
              <p className="text-sm sm:text-base">
                {formatDate(post.date)}
              </p>
            </div>
          </div>
          {post.readTime && (
            <div className="mt-[24px] sm:mt-[1.82vw]">
              <p className="text-[#666666] text-sm sm:text-base">
                {post.readTime}
              </p>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-[40px] sm:mt-0">
          <div className="mb-[40px] sm:mb-[4.68vw]">
            <div className="relative w-full aspect-video rounded-xl shadow-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {post.excerpt && (
            <p className="text-[#666666] font-semibold mb-6 text-base">
              {post.excerpt}
            </p>
          )}

          {/* Blog Content */}
          {post.content && (
            <div className="text-[#666666] mb-8">
              <div
                className="text-[14px] lg:text-[18px] leading-relaxed prose prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-[#cacaca] prose-p:text-[#666666] prose-ul:text-[#666666] prose-strong:text-gray-800 dark:prose-strong:text-[#cacaca]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8">
              <h3 className="font-anton text-xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 dark:text-[#cacaca]">
                Tags<span className="text-blue-500 dark:text-cyan-400">.</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-[#666666] bg-gray-200 dark:bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[80px] sm:h-[4.27vw]"></div>

      {/* Related Posts Section */}
      <section className="relative">
        <div className="flex gap-[3vw] sm:mb-[3.22vw]">
          <div className="min-w-[50%] sm:min-w-auto w-[28vw] max-w-[540px] flex items-stretch sm:items-end justify-start gap-4">
            <h2 className="pb-4 uppercase sm:pb-0 text-[32px] md:text-[44px] leading-tight text-gray-800 dark:text-[#cacaca] font-anton">
              RELATED
              <br />
              POSTS
            </h2>
            <span className="block w-[0.8px] h-auto sm:h-[5vw] translate-none sm:-translate-y-[9px] bg-[#323031]"></span>
          </div>
          <span></span>
        </div>
        
        {/* Horizontal Scroller for Related Posts */}
        <div className="overflow-x-auto pb-8 -mx-6 md:-mx-16 px-6 md:px-16">
          <div className="flex gap-0 min-w-max">
            {relatedPosts.map((relatedPost, index) => (
              <div
                key={relatedPost.id}
                className={`min-w-[317px] lg:min-w-[28vw] max-w-[540px] border border-[#AAAAAA] ${index === 0 ? 'border-l' : 'border-l-0'} flex flex-col bg-white dark:bg-gray-900`}
              >
                <div className="min-h-[177px] h-[15.10vw] max-h-[290px] relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="px-[clamp(16px,2.2vw,44px)] pt-[clamp(8px,0.8vw,17px)] pb-[clamp(16px,1.3vw,26px)] flex-1 flex flex-col bg-white dark:bg-gray-900">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-[#878585] dark:text-[#878585] text-sm">
                      {relatedPost.category || "Blog Post"}
                    </p>
                    <p className="text-[#878585] dark:text-[#878585] text-sm">
                      {formatDate(relatedPost.date)}
                    </p>
                  </div>
                  <h3 className="mt-4 line-clamp-2 flex-1 font-anton text-lg sm:text-xl text-gray-800 dark:text-[#cacaca] mb-4">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center gap-4 justify-end mt-auto">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <p className="text-[#666666] dark:text-[#666666] text-sm sm:text-base hover:text-blue-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                        Read More →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {relatedPosts.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-[#666666] text-base sm:text-lg">
              No related posts found
            </p>
          </div>
        )}
      </section>
    </section>
  );
}
