'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { isInDevelopmentProject, projectSiteLinkLabel } from '../../lib/projectStatus';
import { NEU } from '../ui/neuTheme';
import ProjectCaseStudyLines from './ProjectCaseStudyLines';
import ProjectEmployerNote from './ProjectEmployerNote';

const IMAGE_SIZES = '(max-width: 768px) 100vw, 45vw';

function ProjectCardImage({ project, className = '' }) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 ${className}`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={IMAGE_SIZES}
        className="object-cover object-center grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
      />
      {project.year ? (
        <span className="absolute left-4 top-4 z-10 border border-[var(--color-border-strong)] bg-[var(--color-surface)]/90 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-foreground)]">
          {isInDevelopmentProject(project) ? 'In development' : project.year}
        </span>
      ) : null}
    </div>
  );
}

function ProjectCardBody({ project, variant }) {
  const href = `/projects/${project.slug}`;
  const tags = (project.services || []).slice(0, 4);

  if (variant === 'featured') {
    return (
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <p className={NEU.eyebrow}>{project.industry}</p>
        {project.employer ? (
          <ProjectEmployerNote employer={project.employer} role={project.role} className="mt-2" />
        ) : null}
        <h2 className={`mt-4 ${NEU.display} text-xl sm:text-2xl`}>{project.title}</h2>
        <ProjectCaseStudyLines project={project} className="mt-4" compact />
        {tags.length > 0 ? (
          <div className="mt-5 border-t border-[var(--color-border)] pt-4">
            <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-faint)]">
              Stack
            </p>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className={`${NEU.techTag} opacity-80`}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <span className={`mt-auto inline-flex items-center gap-1 pt-5 ${NEU.link}`}>
          Full case study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
      <p className={NEU.eyebrow}>{project.industry}</p>
      <Link href={href} className="mt-2 block group/title">
        <h2 className={`${NEU.display} text-lg leading-snug sm:text-xl`}>{project.title}</h2>
      </Link>
      {project.tagline ? (
        <p className={`mt-2 line-clamp-2 text-sm leading-relaxed ${NEU.bodyText}`}>{project.tagline}</p>
      ) : null}
      {tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className={NEU.techTag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[var(--color-border)] pt-4">
        <Link href={href} className={`inline-flex items-center gap-1 ${NEU.link}`}>
          Case study
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        {project.previewLink ? (
          <a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 ${NEU.link}`}
          >
            {projectSiteLinkLabel(project)}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ProjectListItem({ project, index }) {
  const href = `/projects/${project.slug}`;
  const tags = (project.services || []).slice(0, 4);

  return (
    <article className={`group overflow-hidden ${NEU.frame}`}>
      <div className="grid sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <Link
          href={href}
          className="relative block overflow-hidden border-b border-[var(--color-border)] sm:border-b-0 sm:border-r"
        >
          <ProjectCardImage project={project} className="aspect-[16/10] sm:aspect-auto sm:min-h-[260px] sm:h-full" />
          <span className="absolute bottom-4 left-4 z-10 font-mono text-sm tabular-nums text-[var(--color-foreground-subtle)]">
            {String(index).padStart(2, '0')}
          </span>
        </Link>

        <div className="flex flex-col bg-[var(--color-surface)] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={NEU.eyebrow}>{project.industry}</p>
            <div className="flex flex-wrap gap-2">
              {isInDevelopmentProject(project) ? (
                <span className={NEU.techTag}>In development</span>
              ) : null}
              {project.timeline || project.duration ? (
                <span className={NEU.techTag}>{project.timeline || project.duration}</span>
              ) : null}
            </div>
          </div>

          {project.employer ? (
            <ProjectEmployerNote employer={project.employer} role={project.role} className="mt-3" />
          ) : null}

          <Link href={href} className="mt-4 block">
            <h2
              className={`${NEU.display} text-2xl leading-snug transition group-hover:text-[var(--color-foreground-soft)] sm:text-3xl`}
            >
              {project.title}
            </h2>
          </Link>

          <ProjectCaseStudyLines project={project} className="mt-4 max-w-xl" />

          {tags.length > 0 ? (
            <div className="mt-6 border-t border-[var(--color-border)] pt-5">
              <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-faint)]">
                Stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li key={tag} className={`${NEU.techTag} opacity-80`}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-6">
            <Link
              href={href}
              className={`inline-flex items-center gap-1.5 ${NEU.link} text-[11px] tracking-[0.18em]`}
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 ${NEU.link} text-[11px] tracking-[0.18em]`}
              >
                {projectSiteLinkLabel(project)}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectCard({ project, variant = 'full', index }) {
  const href = `/projects/${project.slug}`;

  if (variant === 'list') {
    return <ProjectListItem project={project} index={index ?? 1} />;
  }

  if (variant === 'featured') {
    return (
      <Link href={href} className={`${NEU.card} group flex h-full flex-col overflow-hidden transition duration-300`}>
        <div className="relative shrink-0 overflow-hidden">
          <ProjectCardImage project={project} />
        </div>
        <ProjectCardBody project={project} variant={variant} />
      </Link>
    );
  }

  return (
    <article className={`${NEU.card} group flex h-full flex-col overflow-hidden`}>
      <Link href={href} className="relative block shrink-0 overflow-hidden">
        <ProjectCardImage project={project} />
      </Link>
      <ProjectCardBody project={project} variant="full" />
    </article>
  );
}
