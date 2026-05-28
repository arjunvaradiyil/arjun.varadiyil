'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { NEU } from '../ui/neuTheme';

const IMAGE_SIZES = '(max-width: 768px) 100vw, 50vw';

function ProjectCardImage({ project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={IMAGE_SIZES}
        className="object-cover object-[50%_28%] transition duration-500 group-hover:scale-[1.03]"
      />
      {project.year ? (
        <span className="absolute left-4 top-4 z-10 bg-amber-400 px-2 py-1 font-sans text-[10px] font-black uppercase tracking-wider text-black">
          {project.year}
        </span>
      ) : null}
    </div>
  );
}

function ProjectCardBody({ project, variant }) {
  const isFeatured = variant === 'featured';
  const href = `/projects/${project.slug}`;

  return (
    <div className="flex min-h-0 flex-1 flex-col border-t border-gray-900/10 p-5 sm:p-6 dark:border-white/10">
      <p className={NEU.eyebrow}>{project.industry}</p>

      {isFeatured ? (
        <>
          <h2 className={`mt-2 ${NEU.display} text-xl sm:text-2xl`}>{project.title}</h2>
          {project.tagline ? (
            <p className={`mt-2 line-clamp-2 text-sm leading-relaxed ${NEU.bodyText}`}>{project.tagline}</p>
          ) : null}
          <span className={`mt-auto inline-flex items-center gap-1 pt-5 ${NEU.link}`}>
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </>
      ) : (
        <>
          <Link href={href} className="mt-2 block">
            <h2 className={`${NEU.display} text-xl leading-snug sm:text-2xl`}>{project.title}</h2>
            {project.tagline ? (
              <p className={`mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed ${NEU.bodyText}`}>
                {project.tagline}
              </p>
            ) : (
              <div className="mt-2 min-h-[4.5rem]" aria-hidden />
            )}
          </Link>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.duration ? <span className={NEU.techTag}>{project.duration}</span> : null}
            {project.role ? <span className={NEU.techTag}>{project.role}</span> : null}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-gray-900/10 pt-4 dark:border-white/10">
            <Link
              href={href}
              className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${NEU.link}`}
            >
              Case study
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${NEU.link}`}
              >
                Live site
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project, variant = 'full' }) {
  const href = `/projects/${project.slug}`;
  const isFeatured = variant === 'featured';

  const shellClass = `${NEU.card} group flex h-full flex-col overflow-hidden`;

  if (isFeatured) {
    return (
      <Link href={href} className={`${shellClass} transition duration-300`}>
        <div className="relative shrink-0 overflow-hidden">
          <ProjectCardImage project={project} />
        </div>
        <ProjectCardBody project={project} variant={variant} />
      </Link>
    );
  }

  return (
    <article className={shellClass}>
      <Link href={href} className={`relative block shrink-0 overflow-hidden ${NEU.frame}`}>
        <ProjectCardImage project={project} />
      </Link>
      <ProjectCardBody project={project} variant={variant} />
    </article>
  );
}
