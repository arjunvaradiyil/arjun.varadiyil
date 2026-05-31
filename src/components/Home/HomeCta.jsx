'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { OUTCOME_CTA } from '../../data/proof';

export default function HomeCta() {
  const reduceMotion = useReducedMotion();
  const secondary = OUTCOME_CTA.secondary;

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <Reveal variant="left">
          <p className={NEU.eyebrow}>Connect</p>
          <h2 className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>{OUTCOME_CTA.headline}</h2>
          <p className={`mt-4 max-w-lg ${NEU.bodyText}`}>{OUTCOME_CTA.subline}</p>
        </Reveal>
        <Reveal variant="right" delay={0.1} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} className="w-full sm:w-auto">
            <Link href={OUTCOME_CTA.primary.href} className={`${NEU.btnPrimary} w-full justify-center gap-2 sm:w-auto`}>
              {OUTCOME_CTA.primary.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </Link>
          </motion.div>
          {secondary?.external ? (
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} className="w-full sm:w-auto">
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer me"
                className={`${NEU.btn} w-full justify-center gap-2 sm:w-auto`}
              >
                {secondary.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </a>
            </motion.div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
