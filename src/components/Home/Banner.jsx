'use client';

import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Calendar, Github, Instagram, Linkedin } from 'lucide-react';
import { useSiteSettings } from '../SiteSettingsProvider';
import { staggerContainer, fadeUp, transition as motionTransition } from '../../lib/motion';
import { TOPMATE_URL } from '../../lib/siteSeo';
import { NEU } from '../ui/neuTheme';

const easeOut = [0.22, 1, 0.36, 1];

const CATEGORIES = [
  { label: 'Development', href: '/projects' },
  { label: 'Profile', href: '/about' },
  { label: 'Community', href: '/contact' },
];

function BannerSocialIcons({ reduceMotion }) {
  const linkClass =
    'flex h-10 w-10 items-center justify-center border border-gray-900/20 bg-white text-gray-900 shadow-sm transition hover:border-amber-600 hover:text-amber-700 dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:border-amber-400 dark:hover:text-amber-400';

  const links = [
    { href: 'https://www.linkedin.com/in/arjunvaradiyil', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://www.instagram.com/_arjuo__', label: 'Instagram', icon: Instagram },
    { href: 'https://github.com/arjunvaradiyil/arjun.varadiyil', label: 'GitHub', icon: Github },
    { href: TOPMATE_URL, label: 'Book a call', icon: Calendar },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ href, label, icon: Icon }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={label}
          className={linkClass}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        >
          <Icon className="h-4 w-4" aria-hidden />
        </motion.a>
      ))}
    </div>
  );
}

export default function Banner() {
  const { workStatus: WORK_STATUS, heroStats: HERO_STATS } = useSiteSettings();
  const reduceMotion = useReducedMotion();

  const scrollDown = useCallback(() => {
    const next = document.getElementById('home-content');
    if (next) next.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }, [reduceMotion]);

  const fadeUp = useMemo(
    () =>
      reduceMotion
        ? {}
        : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, ease: easeOut } },
    [reduceMotion],
  );

  return (
    <section
      className="relative flex min-h-[calc(100svh-6.5rem)] w-full flex-col overflow-hidden bg-[#e4e4e4] dark:min-h-[calc(100svh-5.25rem)] dark:bg-[#050505] lg:min-h-[calc(100svh-4.5rem)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_78%_85%,rgba(251,191,36,0.18),transparent_60%)] opacity-0 dark:opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.05]" aria-hidden>
        <div className="absolute inset-0 bg-[length:64px_64px] bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />
      </div>

      <h1 id="hero-heading" className="sr-only">
        Arjun Varadiyil — Full Stack Developer in Kerala
      </h1>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-6 pt-5 sm:px-8 md:px-12 lg:grid lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-10 lg:pb-8 lg:pt-8">
        {/* Copy — stacked above portrait on mobile; left column on desktop */}
        <motion.header {...fadeUp} className="relative z-20 max-w-xl shrink-0 lg:col-span-5 lg:self-center">
          <span className={NEU.badge}>{WORK_STATUS.badge}</span>
          <p className={`mt-5 ${NEU.eyebrow}`}>{WORK_STATUS.eyebrow}</p>
          <p className={`mt-2 ${NEU.displayHero} text-[2.35rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl`}>
            Full Stack
            <span className="text-amber-400">.</span>
            Developer
          </p>
          <p className={`mt-4 max-w-md text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-400`}>
            Building at {WORK_STATUS.company} — Node.js, React, Next.js & Payload CMS for news portals and
            full-stack products.
          </p>

          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Explore categories">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="border border-gray-900/25 bg-white/80 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-gray-900 transition hover:border-amber-600 hover:text-amber-700 dark:border-white/15 dark:bg-transparent dark:text-gray-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={NEU.btnPrimary}>
              {WORK_STATUS.primaryCta}
            </Link>
            <Link href="/projects" className={NEU.btn}>
              View work
            </Link>
          </div>

          <div className="mt-6 hidden lg:block">
            <BannerSocialIcons reduceMotion={reduceMotion} />
          </div>
        </motion.header>

        {/* Portrait — right-aligned */}
        <div className="relative z-10 mt-6 flex min-h-[min(48vh,380px)] flex-1 flex-col items-end justify-end sm:min-h-[min(52vh,420px)] lg:col-span-7 lg:col-start-6 lg:mt-0 lg:min-h-[min(58vh,520px)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
            className="relative z-[2] ml-auto w-full max-w-[min(88%,20rem)] sm:max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <div className="pointer-events-none absolute bottom-2 right-0 h-28 w-3/4 bg-gradient-to-t from-amber-400/35 via-amber-500/10 to-transparent blur-3xl" />
            <div className="relative aspect-[3/4] w-full max-h-[min(52vh,480px)] lg:max-h-[min(68vh,620px)]">
              <Image
                src="/arjunvaradiyil.png"
                alt="Arjun Varadiyil"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 480px"
                className="object-contain object-bottom object-right"
              />
            </div>
          </motion.div>

          <div className="relative z-20 mt-4 flex justify-end lg:hidden">
            <BannerSocialIcons reduceMotion={reduceMotion} />
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduceMotion ? undefined : staggerContainer}
          className="relative z-20 mt-6 flex w-full shrink-0 flex-col overflow-hidden rounded-sm border border-gray-900/20 bg-white shadow-sm dark:border-white/15 dark:bg-[#111111] dark:shadow-none sm:flex-row lg:col-span-12 lg:mt-2"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={reduceMotion ? undefined : fadeUp}
              transition={motionTransition(0.45, 0.28 + i * 0.07)}
              className={[
                'flex min-h-[88px] flex-1 flex-col items-center justify-center gap-1.5 px-4 py-5 text-center sm:min-h-[96px] sm:px-5',
                i > 0 ? 'border-t border-gray-900/15 dark:border-white/10 sm:border-l sm:border-t-0' : '',
              ].join(' ')}
              whileHover={
                reduceMotion
                  ? undefined
                  : { backgroundColor: 'rgba(251, 191, 36, 0.12)' }
              }
            >
              <p className="font-syne text-2xl font-bold leading-none text-gray-950 dark:text-amber-400 md:text-3xl">
                {stat.value}
              </p>
              <p className="max-w-[9rem] font-sans text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-gray-700 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-20 flex justify-center pt-4 sm:justify-end lg:col-span-12">
          <motion.button
            type="button"
            onClick={scrollDown}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center gap-1 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 transition hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
            aria-label="Scroll down"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
