'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import KineticGrid from './KineticGrid';
import { GITHUB_URL, LINKEDIN_URL } from '../../data/proof';
import { ABOUT_CTA_LINE } from '../../data/seoContent';
import { SITE_EMAIL } from '../../lib/siteSeo';

const DEFAULT_SUBLINE =
  'Open to AI engineering roles and full stack collaborations on Next.js, CMS, and agent-powered products.';

/**
 * Shared “Let’s Build.” contact CTA — black kinetic grid, orange path, footer row.
 * Matches the portfolio contact mockup used on Home / About / Contact.
 */
export default function LetsBuildSection({
  as: Tag = 'section',
  id = 'contact',
  label = '[ CONTACT ]',
  subline = DEFAULT_SUBLINE,
  email = SITE_EMAIL,
  /** When true, path draws in on scroll (home footer). */
  animatePath = false,
  /** Link target for “Contact form →” — use #form on the contact page. */
  formHref = '/contact',
  headingAs: Heading = 'h2',
  className = '',
}) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });
  const pathLength = useTransform(scrollYProgress, [0.15, 0.95], [0, 1]);

  return (
    <Tag
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden bg-black text-white ${className}`}
    >
      <KineticGrid
        globalColor="monochrome"
        className="flex min-h-[85vh] flex-col justify-between bg-black px-6 py-16 md:min-h-screen md:px-16 lg:px-24"
      >
        <div className="flex w-full items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            {label}
          </span>
        </div>

        <div className="relative flex min-h-[280px] w-full flex-1 flex-col items-center justify-center py-12 md:min-h-[350px] md:py-20">
          <div className="pointer-events-none absolute inset-0 z-20 flex w-full items-center justify-center">
            <svg
              viewBox="0 0 1000 600"
              className="h-full w-full max-w-5xl"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d="M 500,580 C 430,460 380,360 480,270 C 580,180 540,100 460,20"
                stroke="#ff5e3a"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                style={
                  reduceMotion || !animatePath
                    ? { pathLength: 1 }
                    : { pathLength }
                }
              />
              <circle cx="685" cy="510" r="3.5" fill="#ff5e3a" />
            </svg>
          </div>

          <Heading className="relative z-10 select-none text-center font-display text-[15vw] font-bold uppercase leading-[0.85] tracking-tighter text-white md:text-[11vw]">
            Let&apos;s <br /> Build.
          </Heading>
        </div>

        <div className="z-10 mt-auto grid w-full grid-cols-1 items-end gap-8 border-t border-white/5 pt-8 md:grid-cols-3">
          <p className="max-w-xs font-mono text-xs leading-relaxed text-neutral-400 md:text-sm">
            {subline || ABOUT_CTA_LINE}
          </p>

          <div className="flex flex-col items-start justify-center md:items-center">
            <a
              href={`mailto:${email}`}
              className="font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-neutral-300 md:text-2xl"
            >
              {email}
            </a>
            <Link
              href={formHref}
              className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-white"
            >
              Contact form →
            </Link>
          </div>

          <div className="flex flex-col items-start gap-1.5 font-display text-sm font-bold text-white md:items-end md:text-base">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </KineticGrid>
    </Tag>
  );
}
