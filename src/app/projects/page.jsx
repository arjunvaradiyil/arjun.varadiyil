'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectData';
import NextLink from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProjectsPage() {
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
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-gray-900 dark:text-white max-w-3xl"
          >
            Selected work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-xl"
          >
            Real-world projects across news portals, digital platforms, and web applications.
          </motion.p>
        </div>
      </div>

      {/* Project cards */}
      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <NextLink
                  href={`/projects/${project.slug}`}
                  className="block group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 md:py-12 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-white dark:hover:bg-gray-900/50 transition-colors rounded-2xl -mx-4 px-4 md:-mx-6 md:px-6">
                    {/* Image */}
                    <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      {project.previewLink && (
                        <span className="absolute top-3 left-3 px-2 py-1 rounded bg-gray-900/80 dark:bg-white/90 text-white dark:text-gray-900 text-[10px] font-semibold uppercase tracking-wider">
                          Live
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                      <span className="text-xs uppercase tracking-widest text-blue-500 dark:text-cyan-400 font-medium mb-2">
                        {project.industry}
                      </span>
                      <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 line-clamp-2">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                          {project.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                          {project.role}
                        </span>
                      </div>
                      {project.previewLink && (
                        <a
                          href={project.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-cyan-400 hover:underline"
                        >
                          Visit live site
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </NextLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
