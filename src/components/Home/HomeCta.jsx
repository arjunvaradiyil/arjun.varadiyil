'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { hoverLift, tapScale } from '../../lib/motion';
import { useSiteSettings } from '../SiteSettingsProvider';

export default function HomeCta() {
  const { workStatus: WORK_STATUS } = useSiteSettings();
  const reduceMotion = useReducedMotion();

  const btnMotion = reduceMotion
    ? {}
    : { whileHover: hoverLift, whileTap: tapScale };

  return (
    <section className="relative overflow-hidden border-t border-amber-400/30 bg-amber-400 px-5 py-16 sm:px-8 md:py-20 md:px-12">
      <motion.div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-black/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal variant="left">
          <div className="text-black">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-black/60">Community</p>
            <h2 className="mt-2 font-syne text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Say hello
            </h2>
            <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-black/75">
              {WORK_STATUS.contactNote}
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={0.1} className="flex flex-wrap gap-3">
          <motion.div {...btnMotion}>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center border-2 border-black bg-black px-6 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-amber-400 transition-colors hover:bg-transparent hover:text-black"
            >
              Contact me
            </Link>
          </motion.div>
          <motion.div {...btnMotion}>
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center border-2 border-black/30 px-6 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:border-black"
            >
              See work
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
