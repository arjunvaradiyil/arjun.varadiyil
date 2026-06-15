'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import {
  ABOUT_TAGLINE,
  PROFILE as DEFAULT_PROFILE,
  PROFESSIONAL_SUMMARY as DEFAULT_SUMMARY,
} from '../../data/aboutData';
import HeroPortrait from '../Home/HeroPortrait';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { ROLE_AT_EMPLOYER } from '../../lib/employment';
import { EASE_OUT, transition } from '../../lib/motion';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

const socialLinkClass =
  'flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition hover:border-[var(--color-foreground)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]';

function AboutCta({ href, children, primary = false }) {
  const reduceMotion = useReducedMotion();
  const base = primary ? NEU.btnPrimary : NEU.btn;

  return (
    <motion.div
      className="bg-[var(--color-surface)] p-4 sm:p-5"
      whileHover={reduceMotion ? undefined : { backgroundColor: 'rgba(255,255,255,0.03)' }}
      transition={transition(0.22)}
    >
      <Link href={href} className={`${base} inline-flex w-full justify-center gap-2`}>
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
      </Link>
    </motion.div>
  );
}

export default function AboutHero({
  profile = DEFAULT_PROFILE,
  professionalSummary = DEFAULT_SUMMARY,
}) {
  const reduceMotion = useReducedMotion();
  const photo = profile.photo || '/arjunvaradiyil.png';
  const displayName = profile.fullName || profile.name || 'Arjun Varadiyil';

  const facts = [
    {
      label: 'Experience',
      value: `${profile.experience?.replace(/\s*years?/i, '') || '1.3+'} years in production`,
    },
    { label: 'Location', value: `${profile.location || 'Kerala, India'} (Remote Ready)` },
    { label: 'Currently', value: ROLE_AT_EMPLOYER },
    { label: 'Focus', value: 'Newsrooms · festivals · communities' },
  ];

  const fadeUp = useMemo(
    () =>
      reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: EASE_OUT },
          },
    [reduceMotion],
  );

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/arjunvaradiyil', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/arjunvaradiyil/arjun.varadiyil', icon: Github, label: 'GitHub' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
    { href: resume, icon: Download, label: 'Resume' },
  ];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]" aria-labelledby="about-profile-heading">
      <div className="lg:grid lg:min-h-[min(760px,calc(100svh-4rem))] lg:grid-cols-2">
        <div className="relative min-h-[52vh] border-b border-[var(--color-border)] lg:min-h-0 lg:border-b-0">
          <HeroPortrait src={photo} alt={displayName} priority size="split" />
        </div>

        <div className="flex flex-col lg:border-l lg:border-[var(--color-border)]">
          <div className="flex flex-1 flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
            <Reveal>
              <p className={NEU.eyebrow}>Profile</p>
              <h1
                id="about-profile-heading"
                className={`${NEU.displayHero} mt-3 text-4xl sm:text-5xl lg:text-[clamp(2rem,4vw,3.75rem)]`}
              >
                {displayName}
              </h1>
              <p className="mt-5 max-w-xl font-sans text-sm font-medium leading-relaxed text-[var(--color-foreground-soft)] sm:text-base">
                {ABOUT_TAGLINE}
              </p>
              <p className={`mt-4 max-w-xl ${NEU.bodyText}`}>{professionalSummary}</p>
            </Reveal>

            <motion.div {...fadeUp} className="border border-[var(--color-border)] bg-[var(--color-grid-line)]">
              <ul className="grid grid-cols-2 gap-px bg-[var(--color-grid-line)]">
                {facts.map(({ label, value }) => (
                  <li key={label} className="bg-[var(--color-surface)] px-4 py-5 sm:px-5 sm:py-6">
                    <p className={NEU.eyebrow}>{label}</p>
                    <p className="mt-2 font-syne text-sm font-bold leading-snug text-[var(--color-foreground)]">{value}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 sm:px-5">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer me'}
                    aria-label={label}
                    className={socialLinkClass}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>

              <div className="grid gap-px border-t border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2">
                <AboutCta href="/contact" primary>
                  Get in touch
                </AboutCta>
                <AboutCta href="/projects">View my work</AboutCta>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
