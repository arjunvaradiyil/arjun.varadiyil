'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import GhostWatermark from '../ui/GhostWatermark';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { transition } from '../../lib/motion';

const SKILL_HREF_FALLBACKS = ['/about', '/projects', '/projects', '/about'];

export default function HomeServices({ skills = [] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`relative border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad} overflow-hidden`}>
      <GhostWatermark className="pointer-events-none absolute right-0 top-8 text-[clamp(2.5rem,12vw,9rem)]">
        Skills
      </GhostWatermark>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className={NEU.eyebrow}>Expertise</p>
          <h2 className={`mt-3 max-w-xl ${NEU.display} text-3xl md:text-5xl`}>
            What I work with
          </h2>
          <p className={`mt-5 max-w-2xl ${NEU.bodyText}`}>
            Frontend, full stack, and Payload CMS — the same stack behind the news, festival, and civic projects in my archive.
          </p>
        </Reveal>

        <StaggerReveal as="ul" className="mt-10 grid gap-px bg-[var(--color-grid-line)] md:grid-cols-3">
          {skills.slice(0, 3).map((skill, i) => (
            <StaggerItem key={skill.id} as="li" className="bg-[var(--color-surface)]">
              <Link
                href={skill.href || SKILL_HREF_FALLBACKS[i] || '/about'}
                className="group block h-full"
              >
                <motion.div
                  className="flex h-full flex-col p-6 md:p-8"
                  whileHover={reduceMotion ? undefined : { backgroundColor: 'var(--color-hover)' }}
                  transition={transition(0.25)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={NEU.sectionIndex}>{skill.id}</span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[var(--color-foreground-faint)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-foreground-soft)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className={`mt-5 ${NEU.display} text-lg md:text-xl`}>{skill.title}</h3>
                  <p className={`mt-3 flex-1 ${NEU.bodyText}`}>{skill.cardBlurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skill.tags.slice(0, 4).map((tag, tagIndex) => (
                      <li key={`${skill.id}-${tagIndex}-${tag}`} className={NEU.techTag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
