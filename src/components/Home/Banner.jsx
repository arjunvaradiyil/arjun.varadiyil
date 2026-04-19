'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Hand } from 'lucide-react';
import Image from 'next/image';
import { NEU } from '../ui/neuTheme';

export default function Banner() {
  const reduceMotion = useReducedMotion();

  const imageFloat = reduceMotion
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <section
      className={`${NEU.section} relative flex min-h-[calc(100svh-3.5rem)] w-full snap-start snap-always flex-col items-center justify-center py-10 md:min-h-[calc(100svh-4rem)] md:py-12`}
    >
      {/* Soft field + grid — same layout, different atmosphere */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.35]'
        aria-hidden
      >
        <div className='absolute -left-1/4 top-1/4 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/15' />
        <div className='absolute -right-1/4 bottom-0 h-[min(60vw,440px)] w-[min(60vw,440px)] rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-500/12' />
        <div
          className='absolute inset-0 bg-[length:24px_24px] bg-[linear-gradient(to_right,rgb(17_24_39/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(17_24_39/0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)]'
          style={{ maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className='relative z-10 mx-auto w-full max-w-6xl -translate-y-5 px-5 sm:px-6 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10'
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.4 }}
          className='mb-4 flex justify-center'
        >
          <span className='inline-flex items-center gap-2 border-2 border-dashed border-gray-900 bg-amber-50 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-950 shadow-[-4px_4px_0_0_rgb(17,24,39)] dark:border-white dark:bg-amber-950/35 dark:text-amber-100 dark:shadow-[-4px_4px_0_0_rgb(255,255,255)]'>
            Open to collaborations
          </span>
        </motion.div>

        <p
          className={`mb-2 text-center font-syne text-[15px] font-semibold tracking-[0.35em] text-gray-800 dark:text-gray-200 sm:text-base`}
        >
          ARJUN VARADIYIL
        </p>
        <div className='mx-auto mb-7 flex max-w-md flex-col items-center gap-2 sm:mb-8'>
          <span className='h-px w-12 bg-gray-900/20 dark:bg-white/25' aria-hidden />
          {/* <p className='text-center font-sans text-sm leading-relaxed text-gray-700 dark:text-gray-400 sm:text-[15px]'>
            MERN stack developer focused on interfaces that feel fast, clear, and intentional.
          </p> */}
        </div>

        <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12'>
          <motion.h1
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className={`${NEU.display} hidden text-[48px] leading-none text-gray-900 underline decoration-amber-400 decoration-[5px] underline-offset-[14px] [text-shadow:3px_3px_0_rgb(251_191_36/0.35)] dark:text-white dark:decoration-amber-300 dark:[text-shadow:3px_3px_0_rgb(251_191_36/0.2)] md:block min-[1375px]:text-[72px]`}
          >
            SOFTWARE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className='relative'
          >
            <motion.div {...imageFloat} className='relative'>
              <div
                className={`overflow-hidden rounded-[2rem] border-[3px] border-gray-900 bg-zinc-200 shadow-[-10px_10px_0_0_rgb(17,24,39)] ring-4 ring-amber-200/40 ring-offset-4 ring-offset-[#f5f2ea] dark:bg-zinc-800 dark:border-white dark:shadow-[-10px_10px_0_0_rgb(255,255,255)] dark:ring-violet-500/25 dark:ring-offset-[#0e0d12]`}
              >
                <div className='relative h-[280px] w-[200px] sm:h-[320px] sm:w-[240px] md:h-[360px] md:w-[280px]'>
                  <Image
                    src='/assets/images/arjunvaradiyil.jpeg'
                    alt='Profile'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.a
              href='#contact'
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              whileHover={{ scale: 1.06, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{ willChange: 'transform' }}
              className='absolute -left-3 bottom-[38%] flex h-11 w-11 rotate-2 items-center justify-center rounded-lg border-2 border-gray-900 bg-violet-100 text-gray-900 shadow-[4px_4px_0_0_rgb(17,24,39)] transition-colors hover:bg-violet-200 dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[4px_4px_0_0_rgb(255,255,255)] dark:hover:bg-violet-900'
              aria-label='Say hello — scroll to contact'
            >
              <Hand className='h-5 w-5' aria-hidden />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className='hidden md:block'
          >
            <span
              className={`${NEU.display} inline-block border-[3px] border-gray-900 bg-violet-200 px-4 py-1.5 text-[48px] leading-none text-gray-900 shadow-[8px_-6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[8px_-6px_0_0_rgb(255,255,255)] min-[1375px]:px-5 min-[1375px]:text-[72px]`}
            >
              DEVELOPER
            </span>
          </motion.div>
        </div>

        <div className='mt-6 flex flex-row flex-wrap items-baseline justify-center gap-x-2 gap-y-1 px-1 md:hidden'>
          <h1
            className={`${NEU.display} shrink-0 text-[clamp(1.05rem,4.5vw,1.35rem)] leading-none underline decoration-amber-400 decoration-[3px] underline-offset-[6px] [text-shadow:2px_2px_0_rgb(251_191_36/0.35)] dark:decoration-amber-300 sm:text-[clamp(1.15rem,4vw,1.5rem)]`}
          >
            SOFTWARE
          </h1>
          <span
            className={`${NEU.display} inline-block shrink-0 border-[3px] border-gray-900 bg-violet-200 px-2 py-1 text-[clamp(1rem,4.2vw,1.35rem)] leading-none text-gray-900 shadow-[4px_-4px_0_0_rgb(17,24,39)] dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[4px_-4px_0_0_rgb(255,255,255)] sm:px-2.5 sm:py-1.5 sm:text-[clamp(1.05rem,3.6vw,1.5rem)]`}
          >
            DEVELOPER
          </span>
        </div>
      </motion.div>
    </section>
  );
}
