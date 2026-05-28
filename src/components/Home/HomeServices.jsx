'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { NEU, PAGE } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { hoverLift, transition } from '../../lib/motion';

export default function HomeServices({ skills = [] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-t border-gray-900/10 ${PAGE.altSection} px-5 py-16 sm:px-8 md:py-24 md:px-12`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className={NEU.eyebrow}>Skills</p>
          <h2 className={`mt-2 max-w-xl ${NEU.display} text-3xl md:text-4xl`}>What I deliver</h2>
          <p className={`mt-4 max-w-2xl ${NEU.bodyText}`}>
            Full stack development — fast launches, bold UI, and solid engineering for brands in Kerala and
            worldwide.
          </p>
        </Reveal>

        <StaggerReveal as="ul" className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {skills.slice(0, 3).map((skill) => (
            <StaggerItem key={skill.id} as="li">
              <motion.div
                className={`${NEU.cardStatic} h-full p-6`}
                whileHover={reduceMotion ? undefined : hoverLift}
                transition={transition(0.25)}
              >
                <span className={NEU.sectionIndex}>{skill.id}</span>
                <h3 className={`mt-4 ${NEU.display} text-lg`}>{skill.title}</h3>
                <p className={`mt-3 text-sm ${NEU.bodyText}`}>{skill.cardBlurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
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
