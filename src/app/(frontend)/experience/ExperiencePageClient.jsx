'use client';

import { motion, useReducedMotion } from 'framer-motion';
import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import { experienceData } from '../../../data/experienceData';
import { EMPLOYER_SHORT, ROLE_TITLE } from '../../../lib/employment';

const EASE = [0.16, 1, 0.3, 1];

export default function ExperiencePageClient({ experience = [], experienceIntro }) {
  const reduceMotion = useReducedMotion();
  const expRows = experience?.length ? experience : experienceData;

  return (
    <EditorialShell>
      <section className="px-6 pb-16 pt-28 md:px-16 md:pb-20 md:pt-32 lg:px-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-gray-500">
          [ Experience ]
        </p>
        <h1 className="font-display text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[7vw]">
          Experience
        </h1>
        <p className="mt-6 max-w-2xl font-mono text-sm uppercase tracking-widest text-gray-500">
          {ROLE_TITLE} · {EMPLOYER_SHORT}
        </p>
        {experienceIntro ? (
          <p className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug text-neutral-700 md:text-3xl">
            {experienceIntro}
          </p>
        ) : (
          <p className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug text-neutral-700 md:text-3xl">
            End-to-end delivery on high-traffic CMS and Next.js platforms — from content models to
            production.
          </p>
        )}
      </section>

      <section className="border-t border-black/10 px-6 py-16 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col">
            {expRows.map((exp, i) => {
              const role = exp.role || exp.title;
              const company = exp.company || exp.organization;
              const period = exp.period || exp.year || exp.dates;
              const points = Array.isArray(exp.points)
                ? exp.points
                : exp.description
                  ? [exp.description]
                  : [];

              return (
                <motion.article
                  key={`${company}-${i}`}
                  whileHover={reduceMotion ? undefined : { x: 12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="border-b border-black/10 py-10 transition-colors hover:border-black"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex-1">
                      <h2 className="font-display text-3xl font-medium md:text-4xl">{role}</h2>
                      <p className="mt-2 font-mono text-sm text-gray-500">{company}</p>
                    </div>
                    <p className="flex-shrink-0 font-mono text-sm uppercase tracking-widest text-black md:text-right">
                      {period}
                    </p>
                  </div>
                  {points.length > 0 ? (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="font-mono text-sm leading-relaxed text-neutral-600"
                        >
                          — {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <LetsBuildSection animatePath />
    </EditorialShell>
  );
}
