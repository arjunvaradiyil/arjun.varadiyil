'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { transition } from '../../lib/motion';

export default function HomeServices({ skills = [] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`relative border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad} overflow-hidden`}>
      <p
        className={`${NEU.displayGhost} pointer-events-none absolute right-0 top-8 text-[clamp(2.5rem,12vw,9rem)]`}
        aria-hidden
      >
        Skills
      </p>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className={NEU.eyebrow}>Expertise</p>
          <h2 className={`mt-3 max-w-xl ${NEU.display} text-3xl md:text-5xl`}>
            Full stack developer expertise
          </h2>
          <p className={`mt-5 max-w-2xl ${NEU.bodyText}`}>
            Next.js, Payload CMS, and full stack delivery for news, culture, and civic products —
            from architecture to launch.
          </p>
        </Reveal>

        <StaggerReveal as="ul" className="mt-10 grid gap-px bg-[var(--color-grid-line)] md:grid-cols-3">
          {skills.slice(0, 3).map((skill) => (
            <StaggerItem key={skill.id} as="li" className="bg-[var(--color-surface)]">
              <motion.div
                className="h-full p-6 md:p-8"
                whileHover={reduceMotion ? undefined : { backgroundColor: 'var(--color-hover)' }}
                transition={transition(0.25)}
              >
                <span className={NEU.sectionIndex}>{skill.id}</span>
                <h3 className={`mt-5 ${NEU.display} text-lg md:text-xl`}>{skill.title}</h3>
                <p className={`mt-3 ${NEU.bodyText}`}>{skill.cardBlurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {skill.tags.slice(0, 4).map((tag) => (
                    <li key={tag} className={NEU.techTag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
