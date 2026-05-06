'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Github, Hand, Instagram, Linkedin } from 'lucide-react';
import { TOPMATE_URL } from '../../lib/siteSeo';
import Image from 'next/image';
import { NEU } from '../ui/neuTheme';

const easeOut = [0.22, 1, 0.36, 1];

function BannerSocialIcons({ reduceMotion }) {
  const btn =
    'flex h-11 w-11 items-center justify-center rounded-lg border-2 border-gray-900 bg-white text-gray-900 shadow-[3px_3px_0_0_rgb(17,24,39)] transition hover:-translate-y-0.5 dark:border-white dark:bg-zinc-900 dark:text-gray-100 dark:shadow-[3px_3px_0_0_rgb(255,255,255)]';

  const links = [
    {
      href: 'https://www.linkedin.com/in/arjunvaradiyil',
      rel: 'noopener noreferrer me',
      label: 'LinkedIn profile',
      children: <Linkedin className='h-5 w-5' aria-hidden />,
      className: btn,
    },
    {
      href: 'https://www.instagram.com/_arjuo__',
      rel: 'noopener noreferrer me',
      label: 'Instagram profile',
      children: <Instagram className='h-5 w-5' aria-hidden />,
      className: btn,
    },
    {
      href: 'https://github.com/arjunvaradiyil/arjun.varadiyil',
      rel: 'noopener noreferrer me',
      label: 'GitHub profile',
      children: <Github className='h-5 w-5' aria-hidden />,
      className: btn,
    },
    {
      href: TOPMATE_URL,
      rel: 'noopener noreferrer',
      label: 'Book a call',
      children: <Calendar className='h-5 w-5' aria-hidden />,
      className: `${btn} bg-amber-100 dark:border-amber-400 dark:bg-amber-950 dark:text-amber-100 dark:shadow-[3px_3px_0_0_rgb(251_191_36/0.5)]`,
    },
  ];

  const container = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.07,
          delayChildren: reduceMotion ? 0 : 0.04,
        },
      },
    }),
    [reduceMotion],
  );

  const item = useMemo(
    () => ({
      hidden: {
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 10,
        scale: reduceMotion ? 1 : 0.88,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: reduceMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 420, damping: 24 },
      },
    }),
    [reduceMotion],
  );

  return (
    <motion.div
      className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'
      variants={container}
      initial='hidden'
      animate='show'
    >
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          target='_blank'
          rel={link.rel}
          className={link.className}
          aria-label={link.label}
          variants={item}
          whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        >
          {link.children}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default function Banner() {
  const reduceMotion = useReducedMotion();

  const imageFloat = reduceMotion
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      };

  const imageEntrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92, rotate: -2 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        transition: { delay: 0.14, duration: 0.55, ease: easeOut },
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
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut }}
        className='relative z-10 mx-auto w-full max-w-6xl -translate-y-5 px-5 sm:px-6 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10'
      >
        <h1 className='sr-only'>Arjun Varadiyil — MERN stack web developer, Kerala</h1>
        <h2 className='sr-only'>
          Software developer portfolio: projects, about, certifications, and contact.
        </h2>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            reduceMotion ? { duration: 0 } : { delay: 0.06, duration: 0.45, type: 'spring', stiffness: 260, damping: 22 }
          }
          className='mb-4 flex justify-center'
        >
          <span className='inline-flex items-center gap-2 border-2 border-dashed border-gray-900 bg-amber-50 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-950 shadow-[-4px_4px_0_0_rgb(17,24,39)] dark:border-white dark:bg-amber-950/35 dark:text-amber-100 dark:shadow-[-4px_4px_0_0_rgb(255,255,255)]'>
            Available for work
          </span>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.1, duration: 0.55, ease: easeOut }}
          className={`mb-2 text-center font-syne text-[15px] font-semibold tracking-[0.35em] text-gray-800 dark:text-gray-200 sm:text-base`}
        >
          ARJUN VARADIYIL
        </motion.p>
        <div className='mx-auto mb-7 flex max-w-md flex-col items-center gap-2 sm:mb-8'>
          <motion.span
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.16, duration: 0.45, ease: easeOut }}
            className='block h-px w-12 origin-center bg-gray-900/20 dark:bg-white/25'
            aria-hidden
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12'>
          <motion.div
            aria-hidden
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.12, duration: 0.5, ease: easeOut }}
            className={`${NEU.display} hidden text-[48px] leading-none text-gray-900 underline decoration-amber-400 decoration-[5px] underline-offset-[14px] [text-shadow:3px_3px_0_rgb(251_191_36/0.35)] dark:text-white dark:decoration-amber-300 dark:[text-shadow:3px_3px_0_rgb(251_191_36/0.2)] md:block min-[1375px]:text-[72px]`}
          >
            SOFTWARE
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              reduceMotion ? { duration: 0 } : { delay: 0.18, duration: 0.5, ease: easeOut }
            }
            className='relative flex w-max max-w-full flex-col items-center'
          >
            <motion.div {...imageEntrance} className='relative'>
              <motion.div {...imageFloat} className='relative'>
                <div
                  className={`overflow-hidden rounded-[2rem] border-[3px] border-gray-900 bg-zinc-200 shadow-[-10px_10px_0_0_rgb(17,24,39)] ring-4 ring-amber-200/40 ring-offset-4 ring-offset-[#f5f2ea] dark:bg-zinc-800 dark:border-white dark:shadow-[-10px_10px_0_0_rgb(255,255,255)] dark:ring-violet-500/25 dark:ring-offset-[#0e0d12]`}
                >
                  <div className='relative h-[280px] w-[200px] sm:h-[320px] sm:w-[240px] md:h-[360px] md:w-[280px]'>
                    <Image
                      src='/assets/images/arjunvaradiyil.jpeg'
                      alt='Arjun Varadiyil — portrait, software developer'
                      fill
                      className='object-cover'
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.a
              href='/contact'
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={
                reduceMotion ? { duration: 0 } : { delay: 0.34, type: 'spring', stiffness: 380, damping: 20 }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              style={{ willChange: 'transform' }}
              className='absolute -left-3 bottom-[38%] flex h-11 w-11 rotate-2 items-center justify-center rounded-lg border-2 border-gray-900 bg-violet-100 text-gray-900 shadow-[4px_4px_0_0_rgb(17,24,39)] transition-colors hover:bg-violet-200 dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[4px_4px_0_0_rgb(255,255,255)] dark:hover:bg-violet-900'
              aria-label='Say hello — go to contact'
            >
              <Hand className='h-5 w-5' aria-hidden />
            </motion.a>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.26, duration: 0.42, ease: easeOut }}
              className='mt-6 hidden w-full md:flex'
            >
              <BannerSocialIcons reduceMotion={reduceMotion} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.12, duration: 0.5, ease: easeOut }}
            className='hidden md:block'
          >
            <motion.span
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={
                reduceMotion ? { duration: 0 } : { delay: 0.2, type: 'spring', stiffness: 280, damping: 20 }
              }
              className={`${NEU.display} inline-block border-[3px] border-gray-900 bg-violet-200 px-4 py-1.5 text-[48px] leading-none text-gray-900 shadow-[8px_-6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[8px_-6px_0_0_rgb(255,255,255)] min-[1375px]:px-5 min-[1375px]:text-[72px]`}
            >
              DEVELOPER
            </motion.span>
          </motion.div>
        </div>

        <div className='mt-6 flex flex-col items-center gap-6 md:hidden'>
          <motion.div
            aria-hidden
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.08, duration: 0.45, ease: easeOut }}
            className='flex flex-row flex-wrap items-baseline justify-center gap-x-2 gap-y-1 px-1'
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.1, duration: 0.4, ease: easeOut }}
              className={`${NEU.display} shrink-0 text-[clamp(1.05rem,4.5vw,1.35rem)] leading-none underline decoration-amber-400 decoration-[3px] underline-offset-[6px] [text-shadow:2px_2px_0_rgb(251_191_36/0.35)] dark:decoration-amber-300 sm:text-[clamp(1.15rem,4vw,1.5rem)]`}
            >
              SOFTWARE
            </motion.div>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.16, duration: 0.4, ease: easeOut }}
              className={`${NEU.display} inline-block shrink-0 border-[3px] border-gray-900 bg-violet-200 px-2 py-1 text-[clamp(1rem,4.2vw,1.35rem)] leading-none text-gray-900 shadow-[4px_-4px_0_0_rgb(17,24,39)] dark:border-white dark:bg-violet-950 dark:text-violet-100 dark:shadow-[4px_-4px_0_0_rgb(255,255,255)] sm:px-2.5 sm:py-1.5 sm:text-[clamp(1.05rem,3.6vw,1.5rem)]`}
            >
              DEVELOPER
            </motion.span>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { delay: 0.22, duration: 0.42, ease: easeOut }}
            className='flex w-full justify-center'
          >
            <BannerSocialIcons reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
