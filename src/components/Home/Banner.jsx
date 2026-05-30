'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useSiteSettings } from '../SiteSettingsProvider';
import SidebarMenu from '../SidebarMenu';
import HeroHeader from './HeroHeader';
import HeroPortrait from './HeroPortrait';
import { NEU } from '../ui/neuTheme';
import { HOME_HERO, HOME_HERO_META } from '../../lib/njrTheme';
import { EASE_OUT, transition } from '../../lib/motion';

function HeroCta({ href, children, primary = false }) {
  const reduceMotion = useReducedMotion();
  const base = primary ? NEU.btnPrimary : NEU.btn;

  return (
    <motion.div
      className="flex h-full min-h-[4rem] w-full items-center bg-[var(--color-surface)] p-4"
      whileHover={reduceMotion ? undefined : { backgroundColor: 'var(--color-hover)' }}
      transition={transition(0.22)}
    >
      <motion.div
        className="w-full"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { y: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <Link href={href} className={`${base} w-full justify-center gap-2 px-6 py-3.5`}>
          {children}
          <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { heroStats: HERO_STATS, heroImage, profile } = useSiteSettings();
  const portrait = profile?.photo || '/assets/images/profilepic.png';
  const heroSrc = heroImage || portrait;
  const portraitAlt = `${profile?.fullName || profile?.name || 'Arjun Varadiyil'} — full stack developer in Kerala, India`;
  const reduceMotion = useReducedMotion();
  const headlineLines = Array.isArray(HOME_HERO.headline)
    ? HOME_HERO.headline
    : [HOME_HERO.headline];

  return (
    <section className="bg-[var(--color-surface)]" aria-labelledby="hero-heading">
      <HeroHeader menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} variant="overlay" />

      <div className="pt-14 lg:grid lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-2">
        {/* Left — full-height portrait */}
        <div className="relative min-h-[58vh] border-b border-[var(--color-border)] lg:min-h-0 lg:border-b-0">
          <HeroPortrait src={heroSrc} alt={portraitAlt} priority size="split" />
        </div>

        {/* Right — intro, meta, CTAs */}
        <div className="flex flex-col bg-[var(--color-surface)] lg:border-l lg:border-[var(--color-border)]">
          <div className="flex flex-1 flex-col gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:gap-12 lg:px-10 lg:py-12 xl:px-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.1 }}
            >
              <motion.p
                className={NEU.eyebrow}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
              >
                {HOME_HERO.eyebrow}
              </motion.p>
              <div className="mt-4">
                <h1
                  id="hero-heading"
                  className={`${NEU.displayHero} text-[clamp(1.75rem,8vw,3.75rem)] leading-[0.92] lg:text-[clamp(2rem,4vw,4rem)]`}
                >
                  {headlineLines.map((line, i) => (
                    <span key={line} className={i > 0 ? 'block' : undefined}>
                      {line}
                    </span>
                  ))}
                </h1>
                {HOME_HERO.tagline ? (
                  <p className="mt-3 max-w-lg font-sans text-sm font-medium leading-snug text-[var(--color-foreground-soft)] sm:mt-4 sm:text-[15px] sm:leading-relaxed">
                    {HOME_HERO.tagline}
                  </p>
                ) : null}
              </div>
            </motion.div>

            <motion.div
              className="mt-2 sm:mt-4"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.2 }}
            >
              <div className="grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2">
                {HOME_HERO_META.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="bg-[var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.25 + index * 0.06 }}
                  >
                    <p className={NEU.eyebrow}>{item.label}</p>
                    <p className="mt-2 font-syne text-sm font-bold leading-snug text-[var(--color-foreground)]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-px border border-[var(--color-border)] border-t-0 bg-[var(--color-grid-line)] sm:grid-cols-2">
                <motion.div
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.52 }}
                >
                  <HeroCta href="/contact" primary>
                    Hire Me
                  </HeroCta>
                </motion.div>
                <motion.div
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.58 }}
                >
                  <HeroCta href="/projects">View Projects</HeroCta>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SidebarMenu open={menuOpen} setOpen={setMenuOpen} />

      <motion.div
        className="grid grid-cols-2 border-t border-[var(--color-border)] md:grid-cols-4"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.45 }}
      >
        {HERO_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              'group flex flex-col justify-between gap-3 px-5 py-8 transition hover:bg-[var(--color-hover)] md:px-8 md:py-10',
              i > 0 ? 'border-l border-[var(--color-border)]' : '',
              i >= 2 ? 'border-t border-[var(--color-border)] md:border-t-0' : '',
            ].join(' ')}
          >
            <p className="font-syne text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">{stat.value}</p>
            <div className="flex items-end justify-between gap-3">
              <p className="max-w-[11rem] font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-[var(--color-foreground-subtle)]">
                {stat.label}
              </p>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[var(--color-foreground-faint)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-foreground-soft)]"
                aria-hidden
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
