'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { useSiteSettings } from '../SiteSettingsProvider';

export default function HomeCta() {
  const { workStatus: WORK_STATUS } = useSiteSettings();
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <Reveal variant="left">
          <p className={NEU.eyebrow}>Connect</p>
          <h2 className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>Say hello</h2>
          <p className={`mt-4 max-w-md ${NEU.bodyText}`}>{WORK_STATUS.contactNote}</p>
        </Reveal>
        <Reveal variant="right" delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }}>
            <Link href="/contact" className={NEU.btnPrimary}>
              Contact me
            </Link>
          </motion.div>
          <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }}>
            <Link href="/projects" className={NEU.btn}>
              See work
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
