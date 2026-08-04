'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { ArrowUpRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import RajanPageShell from '../../../../components/home-rajan/RajanPageShell';
import LetsBuildSection from '../../../../components/home-rajan/LetsBuildSection';
import { projectSiteLinkLabel } from '../../../../lib/projectStatus';

const EASE = [0.16, 1, 0.3, 1];

const META = [
  { key: 'year', label: 'Year' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'role', label: 'Role' },
  { key: 'industry', label: 'Industry' },
];

function getRelatedProjects(projects, slug, industry, limit = 3) {
  const others = projects.filter((p) => p.slug && p.slug !== slug);
  const sameIndustry = others.filter((p) => p.industry && p.industry === industry);
  const rest = others.filter((p) => !sameIndustry.includes(p));
  return [...sameIndustry, ...rest].slice(0, limit);
}

function Section({ label, title, children }) {
  return (
    <section className="border-t border-black/10 pt-10 lg:pt-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-400">{label}</p>
      <h2 className="mb-6 font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectDetailClient({ slug, projects = [], project }) {
  const reduceMotion = useReducedMotion();
  const relatedProjects = useMemo(
    () => getRelatedProjects(projects, slug, project?.industry),
    [projects, slug, project?.industry],
  );

  const metaItems = useMemo(
    () =>
      META.filter(({ key }) => {
        const value = project?.[key];
        return value !== undefined && value !== null && value !== '' && value !== 0;
      }),
    [project],
  );

  const overview = project?.about || project?.description;

  if (!project) {
    return (
      <RajanPageShell>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-gray-500">
            Project not found
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition hover:text-[#ff5e3a]"
          >
            <ArrowLeft size={14} /> All work
          </Link>
        </div>
      </RajanPageShell>
    );
  }

  return (
    <RajanPageShell>
      <article className="px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black"
            >
              <ArrowLeft size={14} /> All work
            </Link>
            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff5e3a] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#e54e2f]"
              >
                {projectSiteLinkLabel(project)}
                <ExternalLink size={14} />
              </a>
            ) : null}
          </div>

          {project.image ? (
            <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden border-2 border-black bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          ) : null}

          <header className="mb-12 max-w-4xl">
            {project.industry ? (
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gray-500">
                {project.industry}
              </p>
            ) : null}
            <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            {project.tagline ? (
              <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-neutral-600 sm:text-base">
                {project.tagline}
              </p>
            ) : null}
          </header>

          {metaItems.length > 0 ? (
            <div className="mb-16 grid grid-cols-2 gap-px border border-black/15 bg-black/10 sm:grid-cols-4">
              {metaItems.map(({ key, label }) => (
                <div key={key} className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                    {label}
                  </p>
                  <p className="mt-2 font-display text-sm font-bold sm:text-base">{project[key]}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="space-y-16 lg:space-y-20">
            {(project.problem || project.solution || project.impact) && (
              <Section label="[ Story ]" title="Problem → Solution → Impact">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { key: 'problem', label: 'Problem', text: project.problem },
                    { key: 'solution', label: 'Solution', text: project.solution },
                    { key: 'impact', label: 'Impact', text: project.impact },
                  ]
                    .filter((item) => item.text)
                    .map((item) => (
                      <div
                        key={item.key}
                        className="border border-black/10 bg-neutral-50 p-6 sm:p-8"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                          {item.label}
                        </p>
                        <p
                          className={`mt-4 text-sm leading-relaxed sm:text-base ${
                            item.key === 'impact'
                              ? 'font-medium text-black'
                              : 'text-neutral-600'
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                </div>
              </Section>
            )}

            {project.outcomes?.length > 0 ? (
              <Section label="[ Outcomes ]" title="Measurable results">
                <ul
                  className={`grid gap-px border border-black/15 bg-black/10 sm:grid-cols-2 ${
                    project.outcomes.length >= 4
                      ? 'lg:grid-cols-4'
                      : project.outcomes.length === 3
                        ? 'lg:grid-cols-3'
                        : ''
                  }`}
                >
                  {project.outcomes.map((item) => (
                    <li
                      key={`${item.value}-${item.label}`}
                      className="bg-white px-5 py-5 sm:px-6"
                    >
                      <p className="font-display text-2xl font-bold tabular-nums">{item.value}</p>
                      <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {overview ? (
              <Section label="[ About ]" title="Project overview">
                <p className="max-w-3xl font-mono text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {overview}
                </p>
              </Section>
            ) : null}

            {project.responsibilities?.length > 0 ? (
              <Section label="[ Scope ]" title="Key responsibilities">
                <ul className="max-w-3xl space-y-4">
                  {project.responsibilities.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-black/10 pb-4 font-mono text-sm leading-relaxed text-neutral-600 last:border-0"
                    >
                      <span className="mt-0.5 shrink-0 text-xs text-gray-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {project.services?.length > 0 ? (
              <Section label="[ Stack ]" title="Technologies">
                <ul className="flex flex-wrap gap-2">
                  {project.services.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 font-mono text-xs font-semibold tracking-wide text-neutral-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}
          </div>

          {relatedProjects.length > 0 ? (
            <section className="mt-20 border-t border-black/10 pt-16 lg:mt-28 lg:pt-20">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-400">
                [ More work ]
              </p>
              <h2 className="mb-10 font-display text-3xl font-bold tracking-tight">
                Related projects
              </h2>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((p) => (
                  <li key={p.slug}>
                    <motion.div whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ duration: 0.3, ease: EASE }}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="group flex h-full flex-col border border-black/10 bg-white p-6 transition hover:border-black"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                          {p.year || p.industry}
                        </p>
                        <h3 className="mt-3 font-display text-xl font-bold group-hover:underline">
                          {p.title}
                        </h3>
                        {p.tagline ? (
                          <p className="mt-3 line-clamp-3 flex-1 font-mono text-xs leading-relaxed text-neutral-500">
                            {p.tagline}
                          </p>
                        ) : null}
                        <span className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                          View <ArrowUpRight size={12} />
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black"
            >
              <ArrowLeft size={14} /> All work
            </Link>
          </div>
        </div>
      </article>
      <LetsBuildSection animatePath />
    </RajanPageShell>
  );
}
