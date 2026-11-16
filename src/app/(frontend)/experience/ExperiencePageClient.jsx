'use client';

import { motion, useReducedMotion } from 'framer-motion';
import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import { Reveal } from '../../../components/ui/Reveal';
import { experienceData } from '../../../data/experienceData';
import { EMPLOYER_SHORT, ROLE_TITLE } from '../../../lib/employment';

const EASE = [0.16, 1, 0.3, 1];

/* Same line-free look as the work detail and About pages. Accent is page-scoped. */
const SHELL =
  '!bg-[var(--color-surface)] !text-[var(--color-foreground)] [--color-accent:#ff5e3a] [--color-accent-soft:rgba(255,94,58,0.12)] [--color-primary-bg:#ff5e3a] [--color-primary-fg:#ffffff]';
const CHIP =
  'rounded-full bg-[var(--color-accent-soft)] px-4 py-2 font-sans text-sm font-medium text-[var(--color-foreground)]';
const LABEL =
  'font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]';
const BODY = 'font-sans text-base leading-relaxed text-[var(--color-foreground-muted)] md:text-lg';

const DEFAULT_INTRO =
  'End-to-end delivery on high-traffic CMS and Next.js platforms, from content models to production.';

function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)] opacity-[0.14] blur-[120px]" />
      <div className="absolute -left-48 top-[55rem] h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]" />
    </div>
  );
}

export default function ExperiencePageClient({ experience = [], experienceIntro }) {
  const reduceMotion = useReducedMotion();
  const expRows = experience?.length ? experience : experienceData;

  return (
    <EditorialShell showGrid={false} className={SHELL}>
      <div className="relative">
        <GlowBackground />
        <div className="relative z-10">
          <section className="px-6 pb-12 pt-28 md:px-16 md:pb-16 md:pt-32 lg:px-24">
            <div className="mx-auto max-w-6xl">
              <span className={CHIP}>
                {ROLE_TITLE} · {EMPLOYER_SHORT}
              </span>
              <h1 className="mt-8 font-sans text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-foreground)] sm:text-7xl lg:text-8xl">
                Experience
              </h1>
              <p className="mt-8 max-w-2xl font-sans text-xl leading-snug text-[var(--color-foreground-muted)] md:text-2xl">
                {experienceIntro || DEFAULT_INTRO}
              </p>
            </div>
          </section>

          <section className="px-6 pb-16 md:px-16 md:pb-24 lg:px-24">
            <ol className="mx-auto max-w-6xl space-y-6">
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
                  <li key={`${company}-${i}`}>
                    <Reveal>
                      <motion.article
                        whileHover={reduceMotion ? undefined : { y: -4 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="grid gap-6 rounded-3xl bg-[var(--color-surface-elevated)] p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-10 md:p-10"
                      >
                        <div>
                          <p className="font-sans text-5xl font-bold leading-none tracking-[-0.04em] tabular-nums text-[var(--color-accent)]">
                            {String(i + 1).padStart(2, '0')}
                          </p>
                          {period ? <p className={`mt-4 ${LABEL}`}>{period}</p> : null}
                        </div>
                        <div>
                          <h2 className="font-sans text-2xl font-bold tracking-[-0.02em] text-[var(--color-foreground)] md:text-3xl">
                            {role}
                          </h2>
                          <p className="mt-2 font-sans text-base text-[var(--color-foreground-muted)]">{company}</p>
                          {points.length > 0 ? (
                            <ul className="mt-6 max-w-3xl space-y-3">
                              {points.map((point) => (
                                <li key={point} className={`flex gap-3 ${BODY} !text-base`}>
                                  <span
                                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                                    aria-hidden
                                  />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </motion.article>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </div>

      <LetsBuildSection animatePath />
    </EditorialShell>
  );
}
