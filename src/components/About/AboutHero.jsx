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
import { PUBLIC_SOCIAL_LINKS } from '../../data/proof';
import HeroPortrait from '../Home/HeroPortrait';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { HOME_HERO, HOME_HERO_META } from '../../lib/njrTheme';
import { EMPLOYER_SHORT, LOCATION, ROLE_TITLE } from '../../lib/employment';
import { EASE_OUT, transition } from '../../lib/motion';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

const socialLinkClass =
  'flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition hover:border-[var(--color-foreground)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]';

const SOCIAL_ICONS = { LinkedIn: Linkedin, GitHub: Github, Email: Mail };

function AboutCta({ href, children, primary = false }) {
  const reduceMotion = useReducedMotion();
  const base = primary ? NEU.btnPrimary : NEU.btn;

  return (
    <motion.div
      className="bg-[var(--color-surface)] p-4 sm:p-5"
      whileHover={reduceMotion ? undefined : { backgroundColor: 'var(--color-hover)' }}
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
  liveSummary,
}) {
  const reduceMotion = useReducedMotion();
  const photo = profile.photo || '/arjunvaradiyil.png';
  const displayName = profile.fullName || profile.name || 'Arjun Varadiyil';
  const experienceYears = profile.experience?.replace(/\s*years?/i, '') || '1.3+';
  const location = profile.location || LOCATION;
  const buildWith = HOME_HERO_META.find((item) => item.label === 'Build with')?.value;

  const facts = [
    {
      label: 'Live',
      value: liveSummary?.buildsLabel || 'Sites in production',
      detail: liveSummary?.typesLabel,
      fullWidth: true,
    },
    { label: 'Experience', value: `${experienceYears} years in production` },
    { label: 'Stack', value: buildWith || 'Next.js · Payload CMS · TypeScript' },
    { label: 'Works at', value: EMPLOYER_SHORT },
    { label: 'Based in', value: location },
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
    ...PUBLIC_SOCIAL_LINKS,
    { label: 'Email', href: `mailto:${profile.email}`, external: false },
    { label: 'Resume', href: resume, external: true },
  ];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]" aria-labelledby="about-profile-heading">
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative min-h-[52vh] border-b border-[var(--color-border)] lg:min-h-[480px] lg:border-b-0">
          <HeroPortrait src={photo} alt={displayName} name={displayName} role={ROLE_TITLE} priority size="split" />
        </div>

        <div className="flex flex-col lg:border-l lg:border-[var(--color-border)]">
          <div className="flex flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:gap-10 lg:px-10 lg:py-12 xl:px-12">
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
              {HOME_HERO.proofLine ? (
                <p className="mt-4 max-w-xl border-l-2 border-[var(--color-foreground)] pl-4 font-sans text-sm font-medium leading-relaxed text-[var(--color-foreground)] sm:text-[15px]">
                  {HOME_HERO.proofLine}
                </p>
              ) : null}
            </Reveal>

            <motion.div {...fadeUp} className="border border-[var(--color-border)] bg-[var(--color-grid-line)]">
              <ul className="grid grid-cols-2 gap-px bg-[var(--color-grid-line)]">
                {facts.map(({ label, value, detail, fullWidth }) => (
                  <li
                    key={label}
                    className={`bg-[var(--color-surface)] px-4 py-5 sm:px-5 sm:py-6 ${fullWidth ? 'col-span-2' : ''}`}
                  >
                    <p className={NEU.eyebrow}>{label}</p>
                    <p className="mt-2 font-syne text-sm font-bold leading-snug text-[var(--color-foreground)]">{value}</p>
                    {detail ? (
                      <p className={`mt-2 text-xs leading-relaxed ${NEU.bodyText}`}>{detail}</p>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 sm:px-5">
                {socialLinks.map(({ label, href, external }) => {
                  const Icon = label === 'Resume' ? Download : SOCIAL_ICONS[label];
                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer me' : undefined}
                      aria-label={label}
                      className={socialLinkClass}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  );
                })}
              </div>

              <div className="grid gap-px border-t border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2">
                <AboutCta href="/projects" primary>
                  View my work
                </AboutCta>
                <AboutCta href="/contact">Get in touch</AboutCta>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
