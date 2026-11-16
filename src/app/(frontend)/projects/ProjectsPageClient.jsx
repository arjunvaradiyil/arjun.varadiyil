'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import { Reveal } from '../../../components/ui/Reveal';
import { isInDevelopmentProject } from '../../../lib/projectStatus';

const EASE = [0.16, 1, 0.3, 1];

/* Same line-free look as the work detail, About and Experience pages. Accent is page-scoped. */
const SHELL =
  '!bg-[var(--color-surface)] !text-[var(--color-foreground)] [--color-accent:#ff5e3a] [--color-accent-soft:rgba(255,94,58,0.12)] [--color-primary-bg:#ff5e3a] [--color-primary-fg:#ffffff]';
const CHIP =
  'rounded-full bg-[var(--color-accent-soft)] px-4 py-2 font-sans text-sm font-medium text-[var(--color-foreground)]';
const TAG =
  'rounded-full bg-[var(--color-surface)] px-3 py-1.5 font-sans text-xs font-medium text-[var(--color-foreground-muted)]';
const LABEL =
  'font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]';

function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)] opacity-[0.14] blur-[120px]" />
      <div className="absolute -left-48 top-[60rem] h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]" />
    </div>
  );
}

export default function ProjectsPageClient({ projects = [], description = '' }) {
  const reduceMotion = useReducedMotion();
  const uniqueProjects = useMemo(() => {
    const seen = new Set();
    return projects.filter((project) => {
      if (!project?.slug || seen.has(project.slug)) return false;
      seen.add(project.slug);
      return true;
    });
  }, [projects]);

  return (
    <EditorialShell showGrid={false} className={SHELL}>
      <div className="relative">
        <GlowBackground />
        <div className="relative z-10">
          <section className="px-6 pb-12 pt-28 md:px-16 md:pb-16 md:pt-32 lg:px-24">
            <div className="mx-auto flex max-w-6xl items-end justify-between gap-8">
              <div>
                <span className={CHIP}>Portfolio</span>
                <h1 className="mt-8 font-sans text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-foreground)] sm:text-7xl lg:text-8xl">
                  Selected
                  <br />
                  Works
                </h1>
                {description ? (
                  <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-[var(--color-foreground-muted)]">
                    {description}
                  </p>
                ) : null}
              </div>
              <p className="hidden font-sans text-8xl font-bold leading-none tracking-[-0.05em] tabular-nums text-[var(--color-accent)] md:block">
                {String(uniqueProjects.length).padStart(2, '0')}
              </p>
            </div>
          </section>

          <section className="px-6 pb-16 md:px-16 md:pb-24 lg:px-24">
            <div className="mx-auto max-w-6xl">
              {uniqueProjects.length > 0 ? (
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {uniqueProjects.map((project, i) => (
                    <li key={project.slug}>
                      <Reveal className="h-full">
                        <motion.div
                          className="h-full"
                          whileHover={reduceMotion ? undefined : { y: -6 }}
                          transition={{ duration: 0.3, ease: EASE }}
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--color-surface-elevated)] shadow-xl shadow-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10"
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface)]">
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                                />
                              ) : (
                                <div className={`flex h-full items-center justify-center ${LABEL}`}>No image</div>
                              )}
                              <span className="absolute left-4 top-4 rounded-full bg-[var(--color-surface-elevated)]/90 px-3 py-1.5 font-sans text-xs font-semibold tabular-nums text-[var(--color-foreground)] backdrop-blur-sm">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-elevated)]/90 text-[var(--color-foreground)] backdrop-blur-sm transition duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                                <ArrowUpRight size={18} />
                              </span>
                            </div>

                            <div className="flex flex-1 flex-col p-6 md:p-8">
                              <p className={LABEL}>
                                {isInDevelopmentProject(project) ? 'In development' : project.year}
                                {project.industry ? ` · ${project.industry}` : ''}
                              </p>
                              <h2 className="mt-3 font-sans text-2xl font-bold tracking-[-0.02em] text-[var(--color-foreground)] md:text-3xl">
                                {project.title}
                              </h2>
                              <p className="mt-3 line-clamp-3 font-sans text-base leading-relaxed text-[var(--color-foreground-muted)]">
                                {project.tagline || project.description}
                              </p>

                              {(project.services || []).length > 0 ? (
                                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                                  {project.services.slice(0, 4).map((t) => (
                                    <li key={t} className={TAG}>
                                      {t}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          </Link>
                        </motion.div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-3xl bg-[var(--color-surface-elevated)] px-6 py-12 text-center font-sans text-base text-[var(--color-foreground-muted)]">
                  No projects listed yet.{' '}
                  <Link href="/about" className="font-semibold text-[var(--color-accent)] underline underline-offset-4">
                    About
                  </Link>{' '}
                  for skills and experience.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
      <LetsBuildSection animatePath />
    </EditorialShell>
  );
}
