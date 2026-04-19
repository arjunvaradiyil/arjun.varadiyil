'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectData';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { NEU } from '../../components/ui/neuTheme';
import WordStaggerReveal from '../../components/ui/WordStaggerReveal';

export default function ProjectsPage() {
  return (
    <div className={`${NEU.pageShell} min-h-screen bg-[#f5f2ea] dark:bg-[#0e0d12]`}>
      <div className={`${NEU.sectionPadMd} pt-20 md:pt-24 lg:pt-28`}>
        <div className='relative z-10 mx-auto max-w-7xl'>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className='mb-6 flex justify-center md:mb-8 md:justify-start'
          >
            <span className={`${NEU.badge} font-syne tracking-tight`}>Featured projects</span>
          </motion.p>

          <ul className='grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8'>
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.36) }}
                className='list-none'
              >
                <article
                  className={`${NEU.card} group/card flex h-full w-full flex-col`}
                >
                  <div className='flex flex-col gap-4 p-5 sm:p-6'>
                    <div className='flex items-center justify-between gap-2'>
                      <span
                        className='font-sans text-2xl font-semibold tabular-nums text-gray-400 dark:text-gray-500 sm:text-3xl'
                        aria-hidden
                      >
                        {project.id}
                        <span className='text-indigo-600 dark:text-amber-400'>.</span>
                      </span>
                      {project.previewLink ? (
                        <span className='border-2 border-gray-900 bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-900 dark:border-white dark:bg-emerald-950 dark:text-emerald-200'>
                          Live
                        </span>
                      ) : null}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className={`relative block overflow-hidden rounded-lg bg-zinc-200 ${NEU.frame} dark:bg-zinc-800`}
                    >
                      <div className='relative aspect-[16/10] w-full'>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes='(max-width: 768px) 100vw, 50vw'
                          className='object-cover transition duration-700 ease-out group-hover/card:scale-[1.04]'
                        />
                      </div>
                      <span className='absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-900 bg-white text-gray-900 opacity-0 shadow-[3px_3px_0_0_rgb(17,24,39)] transition duration-300 group-hover/card:opacity-100 dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[3px_3px_0_0_rgb(255,255,255)] sm:h-10 sm:w-10'>
                        <ArrowUpRight className='h-4 w-4 sm:h-5 sm:w-5' aria-hidden />
                      </span>
                    </Link>

                    <span className='inline-flex w-fit border-2 border-gray-900 bg-amber-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-950 dark:border-white dark:bg-amber-950/40 dark:text-amber-100 sm:text-[11px]'>
                      {project.industry}
                    </span>

                    <Link
                      href={`/projects/${project.slug}`}
                      className='block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-amber-400 dark:focus-visible:ring-offset-zinc-900'
                    >
                      <WordStaggerReveal
                        as='h2'
                        text={project.title}
                        className={`${NEU.display} text-xl leading-snug sm:text-2xl`}
                        viewport={{ once: true, amount: 0.25 }}
                      />
                      {project.tagline ? (
                        <WordStaggerReveal
                          text={project.tagline}
                          className='mt-2 line-clamp-3 text-sm leading-relaxed text-gray-800 dark:text-gray-300'
                          viewport={{ once: true, amount: 0.25 }}
                        />
                      ) : null}
                    </Link>

                    <div className='flex flex-wrap gap-2'>
                      <span className='inline-flex items-center border-2 border-gray-900 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-800 dark:border-white dark:bg-zinc-800 dark:text-gray-200 sm:px-3 sm:text-xs'>
                        {project.duration}
                      </span>
                      <span className='inline-flex items-center border-2 border-gray-900 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-800 dark:border-white dark:bg-zinc-800 dark:text-gray-200 sm:px-3 sm:text-xs'>
                        {project.role}
                      </span>
                    </div>

                    <div className='mt-1 flex flex-wrap items-center gap-3 border-t-2 border-gray-900 pt-4 dark:border-white'>
                      <Link
                        href={`/projects/${project.slug}`}
                        className='inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 transition hover:gap-2 sm:text-sm dark:text-white'
                      >
                        Case study
                        <ArrowUpRight className='h-3.5 w-3.5 text-indigo-600 dark:text-amber-400 sm:h-4 sm:w-4' aria-hidden />
                      </Link>
                      {project.previewLink ? (
                        <a
                          href={project.previewLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`inline-flex items-center gap-1.5 text-xs font-bold sm:text-sm ${NEU.link}`}
                        >
                          Live site
                          <ExternalLink className='h-3.5 w-3.5 sm:h-4 sm:w-4' aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
