'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogData';
import NextLink from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-12 md:pt-32 md:pb-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-blue-500 dark:text-cyan-400 mb-4"
          >
            Writing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-gray-900 dark:text-white max-w-3xl"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-xl"
          >
            Insights on web development, MERN stack, and modern tech.
          </motion.p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <NextLink href={`/blog/${post.slug}`} className="block h-full">
                  <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none flex flex-col">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-[10px] font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="font-anton text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-cyan-400 group-hover:gap-3 transition-all">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </NextLink>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
