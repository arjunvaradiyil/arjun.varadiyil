'use client';

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import NextLink from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="relative text-gray-700 dark:text-white pt-20 pb-12 md:pt-28 md:pb-20 px-4 md:px-16 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-anton font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 mb-4">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl">
            Insights, tutorials, and thoughts on web development, MERN stack, and modern technologies.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300"
            >
              <NextLink href={`/blog/${post.slug}`}>
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-500 dark:text-cyan-400 bg-blue-500/10 dark:bg-cyan-400/10 rounded-full mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-anton font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-blue-500 dark:text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </NextLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
