'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { blogPosts } from "../../../data/blogData";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Contactform from "../../../components/Contactform";

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

  return (
    <div className="text-gray-800 dark:text-white overflow-hidden bg-white dark:bg-black min-h-screen">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 transition-colors w-12 h-12 rounded-full border border-gray-600 justify-center hover:border-[#8f8f8f] hover:bg-[#8f8f8f] text-gray-800 dark:text-[#cacaca] hover:text-blue-500 dark:hover:text-cyan-400"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Category */}
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-500 dark:text-cyan-400 bg-blue-500/10 dark:bg-cyan-400/10 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-300 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6 prose-headings:text-gray-800 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>

      {/* Contact Form */}
      <Contactform />
    </div>
  );
}
