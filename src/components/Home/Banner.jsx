'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useSiteSettings } from '../SiteSettingsProvider';
import SidebarMenu from '../SidebarMenu';
import HeroHeader from './HeroHeader';
import HeroPortrait from './HeroPortrait';
import { NEU } from '../ui/neuTheme';
import LineStaggerReveal from '../ui/LineStaggerReveal';
import { HOME_HERO, HOME_HERO_META } from '../../lib/njrTheme';
import { PUBLIC_SOCIAL_LINKS } from '../../data/proof';
import { SITE_EMAIL } from '../../lib/siteSeo';
import { EASE_OUT } from '../../lib/motion';

const SOCIAL_ICONS = { LinkedIn: Linkedin, GitHub: Github, Email: Mail };

const heroSocialLinkClass =
  'flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition hover:border-[var(--color-foreground)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]';

function HeroSocialLinks({ email }) {
  const links = [
    ...PUBLIC_SOCIAL_LINKS,
    { label: 'Email', href: `mailto:${email}`, external: false },
  ];

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map(({ label, href, external }) => {
        const Icon = SOCIAL_ICONS[label];
        return (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer me' : undefined}
            aria-label={label}
            className={heroSocialLinkClass}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}

function HeroCta({ href, children, primary = false }) {
  const reduceMotion = useReducedMotion();
  const base = primary ? NEU.btnPrimary : NEU.btn;

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { y: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <Link href={href} className={`${base} gap-2 px-6 py-3.5`}>
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
      </Link>
    </motion.div>
  );
}

export default function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { heroImage, profile } = useSiteSettings();
  const contactEmail = profile?.email || SITE_EMAIL;
  const portrait = profile?.photo || '/assets/images/profilepic.png';
  const heroSrc = heroImage || portrait;
  const displayName = profile?.fullName || profile?.name || 'Arjun Varadiyil';
  const portraitAlt = `${displayName} — Full Stack Developer in Kerala, India`;
  const reduceMotion = useReducedMotion();
  const headlineLines = Array.isArray(HOME_HERO.headline)
    ? HOME_HERO.headline
    : [HOME_HERO.headline];

  return (
    <section className="relative bg-[var(--color-surface)]" aria-labelledby="hero-heading">
      <HeroHeader menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} variant="overlay" />

      <div className="pt-[4.75rem] sm:pt-[5rem] xl:grid xl:min-h-[calc(100svh-5rem)] xl:grid-cols-2 xl:items-stretch">
        {/* Left — full-height portrait */}
        <div className="relative min-h-[50vh] min-w-0 overflow-hidden border-b border-[var(--color-border)] sm:min-h-[58vh] xl:min-h-0 xl:border-b-0">
          <HeroPortrait
            src={heroSrc}
            alt={portraitAlt}
            name={displayName}
            priority
            size="split"
          />
        </div>

        {/* Right — intro, meta, CTAs */}
        <div className="flex min-w-0 flex-col justify-center bg-[var(--color-surface)] xl:border-l xl:border-[var(--color-border)]">
          <div className="flex w-full min-w-0 flex-1 flex-col justify-center gap-10 px-5 py-8 sm:px-8 sm:py-10 xl:gap-12 xl:px-10 xl:py-12 2xl:px-12">
            <motion.div
              className="w-full min-w-0"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.1 }}
            >
              {HOME_HERO.eyebrow ? (
                <motion.p
                  className={NEU.eyebrow}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
                >
                  {HOME_HERO.eyebrow}
                </motion.p>
              ) : null}
              <div className={HOME_HERO.eyebrow ? 'mt-4 min-w-0' : 'min-w-0'}>
                <LineStaggerReveal
                  as="h1"
                  id="hero-heading"
                  lines={headlineLines}
                  lineClassName="w-full break-words"
                  className={`${NEU.displayHero} w-full max-w-full whitespace-normal break-words text-balance text-[clamp(1.375rem,5.5vw,2.125rem)] sm:text-[clamp(1.5rem,4.5vw,2.25rem)] xl:text-[1.35rem] xl:leading-[1.08] 2xl:text-[1.5rem]`}
                  stagger={0.12}
                  delay={0.14}
                />
                {HOME_HERO.proofLine ? (
                  <motion.p
                    className="mt-4 max-w-full border-l-2 border-[var(--color-accent)] pl-4 font-sans text-sm font-medium leading-relaxed text-[var(--color-foreground)] sm:text-[15px]"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.38 }}
                  >
                    {HOME_HERO.proofLine}
                  </motion.p>
                ) : null}
                {HOME_HERO.stanceLine ? (
                  <motion.p
                    className="mt-3 max-w-lg font-sans text-sm italic leading-relaxed text-[var(--color-foreground-muted)]"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.48 }}
                  >
                    {HOME_HERO.stanceLine}
                  </motion.p>
                ) : null}
                {HOME_HERO.tagline ? (
                  <motion.p
                    className="mt-3 max-w-lg font-sans text-sm font-medium leading-snug text-[var(--color-foreground-soft)] sm:mt-4 sm:text-[15px] sm:leading-relaxed"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.42 }}
                  >
                    {HOME_HERO.tagline}
                  </motion.p>
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
                <motion.div
                  className="bg-[var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.25 + HOME_HERO_META.length * 0.06 }}
                >
                  <p className={NEU.eyebrow}>Connect</p>
                  <HeroSocialLinks email={contactEmail} />
                </motion.div>
              </div>

              <motion.div
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.52 }}
              >
                <HeroCta href="/projects" primary>
                  View my work
                </HeroCta>
                <HeroCta href="/contact">Get in touch</HeroCta>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <SidebarMenu open={menuOpen} setOpen={setMenuOpen} />
    </section>
  );
}
