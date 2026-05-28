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

const categoryLinkClass =
  'flex min-h-10 flex-1 items-center justify-center border border-gray-900/25 bg-white/80 px-2 py-2 text-center font-sans text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-gray-900 transition hover:border-amber-600 hover:text-amber-700 dark:border-white/15 dark:bg-transparent dark:text-gray-300 dark:hover:border-amber-400 dark:hover:text-amber-400';

function HeroPortrait({ src, alt, className = '' }) {
  return (
    <div
      className={`relative mx-auto h-[min(38vh,280px)] w-[min(80vw,280px)] sm:h-[min(42vh,300px)] sm:w-[min(76vw,300px)] lg:h-full lg:w-full ${className}`}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-28 w-[90%] -translate-x-1/2 bg-gradient-to-t from-amber-400/35 via-amber-500/10 to-transparent blur-3xl lg:right-2 lg:translate-x-0"
        aria-hidden
      />
      <div className="relative h-full w-full lg:aspect-[3/4] lg:max-h-[min(68vh,620px)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 320px, 480px"
          className="object-contain [object-position:center_bottom] lg:object-[right_bottom]"
        />
      </div>
    </div>
  );
}

function BannerSocialIcons({ reduceMotion, className = '' }) {
  const linkClass =
    'flex h-10 w-10 items-center justify-center border border-gray-900/20 bg-white text-gray-900 shadow-sm transition hover:border-amber-600 hover:text-amber-700 dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:border-amber-400 dark:hover:text-amber-400';

  const links = [
    { href: 'https://www.linkedin.com/in/arjunvaradiyil', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://www.instagram.com/_arjuo__', label: 'Instagram', icon: Instagram },
    { href: 'https://github.com/arjunvaradiyil/arjun.varadiyil', label: 'GitHub', icon: Github },
    { href: TOPMATE_URL, label: 'Book a call', icon: Calendar },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-3 sm:justify-start ${className}`}>
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
  const { workStatus: WORK_STATUS, heroStats: HERO_STATS, profile } = useSiteSettings();
  const portraitSrc = profile?.photo || '/arjunvaradiyil.png';
  const portraitAlt = profile?.fullName || profile?.name || 'Arjun Varadiyil';
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
      className="relative w-full overflow-hidden bg-[#e4e4e4] dark:bg-[#050505] lg:min-h-[calc(100svh-7.5rem)]"
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-12 lg:grid lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-10 lg:gap-y-4 lg:py-8">
        {/* Copy */}
        <motion.header
          {...fadeUp}
          className="relative z-20 flex w-full flex-col lg:col-span-5 lg:self-center"
        >
          <span className={`${NEU.badge} w-fit`}>{WORK_STATUS.badge}</span>
          <p className={`mt-4 ${NEU.eyebrow}`}>{WORK_STATUS.eyebrow}</p>
          <p
            className={`mt-2 ${NEU.displayHero} text-[clamp(2rem,9vw,2.75rem)] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            Full Stack
            <span className="text-amber-400">.</span>
            Developer
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-400">
            Building at {WORK_STATUS.company} — Node.js, React, Next.js & Payload CMS for news portals and
            full-stack products.
          </p>

          <HeroPortrait src={portraitSrc} alt={portraitAlt} className="mt-5 lg:hidden" />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className={`${NEU.btnPrimary} w-full justify-center sm:w-auto`}>
              {WORK_STATUS.primaryCta}
            </Link>
            <Link href="/projects" className={`${NEU.btn} w-full justify-center sm:w-auto`}>
              View work
            </Link>
          </div>

          <nav className="mt-5 grid grid-cols-3 gap-2" aria-label="Explore categories">
            {CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className={categoryLinkClass}>
                {cat.label}
              </Link>
            ))}
          </nav>

          <BannerSocialIcons reduceMotion={reduceMotion} className="mt-5 lg:hidden" />
          <BannerSocialIcons reduceMotion={reduceMotion} className="mt-6 hidden lg:flex" />
        </motion.header>

        {/* Portrait — desktop column only */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
          className="relative z-10 hidden w-full lg:col-span-7 lg:col-start-6 lg:flex lg:justify-end lg:self-end"
        >
          <HeroPortrait
            src={portraitSrc}
            alt={portraitAlt}
            className="max-w-md xl:max-w-lg"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduceMotion ? undefined : staggerContainer}
          className="relative z-20 grid w-full shrink-0 grid-cols-2 overflow-hidden rounded-sm border border-gray-900/20 bg-white shadow-sm dark:border-white/15 dark:bg-[#111111] dark:shadow-none lg:col-span-12 lg:grid-cols-4"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={reduceMotion ? undefined : fadeUp}
              transition={motionTransition(0.45, 0.28 + i * 0.07)}
              className={[
                'flex min-h-[88px] flex-col items-center justify-center gap-1.5 px-3 py-4 text-center sm:min-h-[96px] sm:px-5 sm:py-5',
                i % 2 === 1 ? 'border-l border-gray-900/15 dark:border-white/10' : '',
                i >= 2 ? 'border-t border-gray-900/15 dark:border-white/10 lg:border-t-0' : '',
                i > 0 ? 'lg:border-l lg:border-t-0' : '',
              ].join(' ')}
              whileHover={reduceMotion ? undefined : { backgroundColor: 'rgba(251, 191, 36, 0.12)' }}
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

        <div className="relative z-20 flex justify-center pb-2 lg:col-span-12 lg:justify-end lg:pb-0">
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
