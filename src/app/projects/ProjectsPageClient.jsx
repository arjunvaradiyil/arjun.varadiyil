'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FiArrowLeft } from 'react-icons/fi';
import ProjectCard from '../../components/projects/ProjectCard';
import { useGsap } from '../../hooks/useGsap';
import { useSiteSettings } from '../../components/SiteSettingsProvider';
import { NEU } from '../../components/ui/neuTheme';
import GhostWatermark from '../../components/ui/GhostWatermark';
import {
  EDITORIAL_EASE,
  prefersReducedMotion,
  scrollReveal,
} from '../../lib/gsap';

const DEFAULT_DESCRIPTION =
  'News portals, biennale platform, and civic tech — Next.js, Payload CMS, and MERN stack.';

export default function ProjectsPageClient({ projects = [], description = '' }) {
  const { workStatus } = useSiteSettings();

  const uniqueProjects = useMemo(() => {
    const seen = new Set();
    return projects.filter((project) => {
      if (!project?.slug || seen.has(project.slug)) return false;
      seen.add(project.slug);
      return true;
    });
  }, [projects]);

  const scopeRef = useGsap(({ gsap, scope }) => {
    if (prefersReducedMotion()) return;

    gsap.from('[data-gsap="projects-hero"] > *', {
      y: 28,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: EDITORIAL_EASE,
      delay: 0.1,
    });

    scrollReveal(scope, '[data-gsap="projects-card"]', {
      start: 'top 88%',
      y: 40,
      stagger: 0.12,
      duration: 0.7,
    });

    scrollReveal(scope, '[data-gsap="projects-footer"] > *', {
      trigger: '[data-gsap="projects-footer"]',
      start: 'top 92%',
      y: 16,
      stagger: 0.08,
      duration: 0.5,
    });
  }, []);

  return (
    <div ref={scopeRef} className="bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12">
        <header
          data-gsap="projects-hero"
          className="relative mb-10 border-b border-[var(--color-border)] pb-8 md:mb-12 md:pb-10"
        >
          <GhostWatermark className="pointer-events-none absolute -right-2 top-0 hidden text-[clamp(3rem,14vw,9rem)] md:block">
            Work
          </GhostWatermark>
          <p className={NEU.eyebrow}>Portfolio</p>
          <h1 className={`mt-3 ${NEU.display} text-4xl sm:text-5xl lg:text-6xl`}>Projects</h1>
          <p className={`mt-5 max-w-2xl text-base sm:text-lg ${NEU.bodyText}`}>
            {description || DEFAULT_DESCRIPTION}
          </p>
          {uniqueProjects.length > 0 ? (
            <p className="mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-foreground-faint)]">
              {uniqueProjects.length} {uniqueProjects.length === 1 ? 'project' : 'projects'} in production
            </p>
          ) : null}
        </header>

        {uniqueProjects.length > 0 ? (
          <ul className="space-y-8 md:space-y-10">
            {uniqueProjects.map((project, index) => (
              <li key={project.slug || project.id} data-gsap="projects-card">
                <ProjectCard project={project} variant="list" index={index + 1} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={`${NEU.bodyText} border border-[var(--color-border)] px-6 py-12 text-center`}>
            No projects published yet.
          </p>
        )}

        <footer
          data-gsap="projects-footer"
          className="mt-10 border-t border-[var(--color-border)] pt-8 md:mt-12 md:pt-10"
        >
          {workStatus?.contactNote ? (
            <p className={`max-w-2xl text-sm leading-relaxed ${NEU.bodyText}`}>
              {workStatus.contactNote}
            </p>
          ) : null}

          <div
            className={`flex flex-wrap items-center justify-between gap-6 ${
              workStatus?.contactNote ? 'mt-8 border-t border-[var(--color-border)] pt-8' : ''
            }`}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-foreground)]"
            >
              <FiArrowLeft aria-hidden />
              Home
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.15em] ${NEU.btnPrimary}`}
            >
              {workStatus?.primaryCta || 'Get in touch'}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
