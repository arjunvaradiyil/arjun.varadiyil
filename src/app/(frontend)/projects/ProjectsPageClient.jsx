'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import EditorialShell from '../../../components/editorial/EditorialShell';
import KineticGrid from '../../../components/editorial/KineticGrid';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';

const EASE = [0.16, 1, 0.3, 1];

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
    <EditorialShell showGrid={false}>
      <section className="relative overflow-hidden bg-black text-white">
        <KineticGrid
          globalColor="monochrome"
          className="bg-black px-6 pb-24 pt-28 md:px-16 md:pb-32 md:pt-32 lg:px-24"
        >
          <div className="mb-16 flex items-end justify-between md:mb-24">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-gray-500">
                [ Portfolio ]
              </p>
              <h1 className="font-display text-5xl font-bold uppercase tracking-tighter md:text-7xl">
                Selected <br /> Works
              </h1>
              {description ? (
                <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-neutral-400">
                  {description}
                </p>
              ) : null}
            </div>
            <span className="mb-2 hidden font-mono text-sm uppercase tracking-widest text-gray-500 md:block">
              {String(uniqueProjects.length).padStart(2, '0')}
            </span>
          </div>

          {uniqueProjects.length > 0 ? (
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
              {uniqueProjects.map((project, i) => (
                <li key={project.slug} className={i % 2 !== 0 ? 'md:mt-24' : ''}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -10 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block overflow-hidden border border-neutral-200/80 bg-white text-black shadow-md transition-shadow duration-500 hover:shadow-2xl"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-400">
                            No image
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition group-hover:opacity-40" />
                        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition duration-300 group-hover:bg-neutral-950 group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                        {(project.year || project.industry) && (
                          <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/90">
                            {project.year || project.industry}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col p-6 md:p-8">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 md:text-3xl">
                          {project.title}
                        </h2>
                        <p className="mt-3 line-clamp-3 font-mono text-sm leading-relaxed text-neutral-600">
                          {project.tagline || project.description}
                        </p>

                        {(project.services || []).length > 0 ? (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {(project.services || []).slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs text-neutral-600"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="border border-white/20 px-6 py-12 text-center font-mono text-sm text-neutral-400">
              No projects listed yet.{' '}
              <Link href="/about" className="underline underline-offset-4 hover:text-white">
                About
              </Link>{' '}
              for skills and experience.
            </p>
          )}

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 border-b border-white/40 pb-1 font-mono text-sm uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
            >
              ← Home
            </Link>
          </div>
        </KineticGrid>
      </section>
      <LetsBuildSection animatePath />
    </EditorialShell>
  );
}
