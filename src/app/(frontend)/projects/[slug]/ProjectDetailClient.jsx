'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { FiArrowLeft, FiCalendar, FiClock, FiExternalLink, FiLayers } from 'react-icons/fi'
import { HiOutlineBriefcase } from 'react-icons/hi2'
import ProjectCard from '../../../../components/projects/ProjectCard'
import ProjectEmployerNote from '../../../../components/projects/ProjectEmployerNote'
import ProjectOutcomes from '../../../../components/projects/ProjectOutcomes'
import { NEU } from '../../../../components/ui/neuTheme'
import { useGsap } from '../../../../hooks/useGsap'
import {
  EDITORIAL_EASE,
  EDITORIAL_EASE_IN_OUT,
  prefersReducedMotion,
  scrollReveal,
} from '../../../../lib/gsap'
import { WORK_STATUS } from '../../../../lib/njrTheme'
import { projectSiteLinkLabel } from '../../../../lib/projectStatus'

const META = [
  { key: 'year', label: 'Year', icon: FiCalendar },
  { key: 'timeline', label: 'Timeline', icon: FiClock },
  { key: 'role', label: 'Role', icon: HiOutlineBriefcase },
  { key: 'industry', label: 'Industry', icon: FiLayers },
]

function getRelatedProjects(projects, slug, industry, limit = 3) {
  const others = projects.filter((p) => p.slug && p.slug !== slug)
  const sameIndustry = others.filter((p) => p.industry && p.industry === industry)
  const rest = others.filter((p) => !sameIndustry.includes(p))
  return [...sameIndustry, ...rest].slice(0, limit)
}

export default function ProjectDetailClient({ slug, projects = [], project }) {
  const relatedProjects = useMemo(
    () => getRelatedProjects(projects, slug, project?.industry),
    [projects, slug, project?.industry],
  )

  const metaItems = useMemo(
    () =>
      META.filter(({ key }) => {
        const value = project?.[key]
        return value !== undefined && value !== null && value !== '' && value !== 0
      }),
    [project],
  )

  const overview = project?.about || project?.description

  const scopeRef = useGsap(({ gsap, scope }) => {
    if (prefersReducedMotion()) return

    const intro = gsap.timeline({ defaults: { ease: EDITORIAL_EASE } })

    intro
      .from('[data-gsap="topbar"]', { y: 16, opacity: 0, duration: 0.55 })
      .from(
        '[data-gsap="hero-image"]',
        { scale: 1.06, opacity: 0, duration: 1.05, ease: EDITORIAL_EASE_IN_OUT },
        '-=0.15',
      )
      .from(
        '[data-gsap="hero-line"]',
        { y: 36, opacity: 0, duration: 0.7, stagger: 0.09 },
        '-=0.55',
      )

    const metaGrid = scope.querySelector('[data-gsap="meta-grid"]')
    scrollReveal(metaGrid, '[data-gsap="meta-cell"]', {
      start: 'top 85%',
      y: 24,
      stagger: 0.1,
    })

    gsap.utils.toArray('[data-gsap="section"]', scope).forEach((section) => {
      scrollReveal(section, '[data-gsap="section-item"]', {
        y: 22,
        stagger: 0.07,
      })
    })

    const respList = scope.querySelector('[data-gsap="resp-list"]')
    scrollReveal(respList, '[data-gsap="resp-item"]', {
      y: 18,
      stagger: 0.06,
      duration: 0.55,
    })

    const techList = scope.querySelector('[data-gsap="tech-list"]')
    scrollReveal(techList, '[data-gsap="tech-tag"]', {
      start: 'top 85%',
      y: 12,
      stagger: 0.04,
      duration: 0.45,
    })

    const related = scope.querySelector('[data-gsap="related"]')
    scrollReveal(related, '[data-gsap="related-header"] > *', {
      y: 20,
      stagger: 0.08,
    })

    const relatedGrid = scope.querySelector('[data-gsap="related-grid"]')
    scrollReveal(relatedGrid, '[data-gsap="related-card"]', {
      start: 'top 88%',
      y: 32,
      stagger: 0.12,
      duration: 0.7,
    })

    const footer = scope.querySelector('[data-gsap="footer-cta"]')
    scrollReveal(footer, ':scope > *', {
      start: 'top 90%',
      y: 16,
      stagger: 0.1,
      duration: 0.55,
    })
  }, [project?.slug])

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--color-surface)] px-5 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">Project not found</p>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[var(--color-foreground)] transition hover:text-[var(--color-foreground-soft)]"
        >
          <FiArrowLeft aria-hidden />
          All projects
        </Link>
      </div>
    )
  }

  return (
    <div ref={scopeRef} className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32 lg:px-12">
        <div
          data-gsap="topbar"
          className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-foreground)]"
          >
            <FiArrowLeft aria-hidden />
            All projects
          </Link>

          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] ${NEU.btnPrimary}`}
            >
              {projectSiteLinkLabel(project)}
              <FiExternalLink aria-hidden className="text-sm" />
            </a>
          )}
        </div>

        {project.image && (
          <div
            data-gsap="hero-image"
            className={`relative mb-12 aspect-[21/9] w-full overflow-hidden ${NEU.frame}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
        )}

        <header className="mb-12 max-w-4xl">
          {project.industry && (
            <p
              data-gsap="hero-line"
              className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]"
            >
              {project.industry}
            </p>
          )}
          {project.employer ? (
            <div data-gsap="hero-line" className="mb-4">
              <ProjectEmployerNote employer={project.employer} role={project.role} />
            </div>
          ) : null}
          <h1
            data-gsap="hero-line"
            className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {project.title}
          </h1>
          {project.tagline && (
            <p
              data-gsap="hero-line"
              className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-foreground-muted)] sm:text-lg"
            >
              {project.tagline}
            </p>
          )}
        </header>

        {metaItems.length > 0 && (
          <div
            data-gsap="meta-grid"
            className="mb-16 grid grid-cols-2 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-4"
          >
            {metaItems.map(({ key, label, icon: Icon, format }) => (
              <div
                key={key}
                data-gsap="meta-cell"
                className="bg-[var(--color-surface)] px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="mb-2 flex items-center gap-2 text-[var(--color-foreground-subtle)]">
                  <Icon aria-hidden className="text-sm" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
                </div>
                <p className="text-sm font-medium text-[var(--color-foreground)] sm:text-base">
                  {format ? format(project[key]) : project[key]}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-16 lg:space-y-20">
          {(project.problem || project.solution || project.impact) && (
            <Section eyebrow="Story" title="Problem → Solution → Impact">
              <div className="grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] md:grid-cols-3">
                {project.problem ? (
                  <div data-gsap="section-item" className="bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">Problem</p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-foreground-soft)] sm:text-base">
                      {project.problem}
                    </p>
                  </div>
                ) : null}
                {project.solution ? (
                  <div data-gsap="section-item" className="bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">Solution</p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-foreground-soft)] sm:text-base">
                      {project.solution}
                    </p>
                  </div>
                ) : null}
                {project.impact ? (
                  <div data-gsap="section-item" className="bg-[var(--color-surface)] p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">Impact</p>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--color-foreground)] sm:text-base">
                      {project.impact}
                    </p>
                  </div>
                ) : null}
              </div>
            </Section>
          )}

          {project.outcomes?.length > 0 && (
            <Section eyebrow="Outcomes" title="Measurable results">
              <ProjectOutcomes outcomes={project.outcomes} />
            </Section>
          )}

          {overview && (
            <Section eyebrow="About" title="Project overview">
              <p className="max-w-3xl text-base leading-relaxed text-[var(--color-foreground-soft)] sm:text-lg">
                {overview}
              </p>
            </Section>
          )}

          {project.responsibilities?.length > 0 && (
            <Section eyebrow="Scope" title="Key responsibilities">
              <ul data-gsap="resp-list" className="max-w-3xl space-y-4">
                {project.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    data-gsap="resp-item"
                    className="flex gap-4 border-b border-[var(--color-border)] pb-4 text-sm leading-relaxed text-[var(--color-foreground-soft)] last:border-0 last:pb-0 sm:text-base"
                  >
                    <span className="mt-1 shrink-0 font-mono text-xs text-[var(--color-foreground-faint)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.services?.length > 0 && (
            <Section eyebrow="Stack" title="Technologies">
              <div data-gsap="tech-list" className="flex flex-wrap gap-2">
                {project.services.map((t) => (
                  <span
                    key={t}
                    data-gsap="tech-tag"
                    className="border border-[var(--color-border-strong)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--color-foreground-soft)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>

        {relatedProjects.length > 0 && (
          <section
            data-gsap="related"
            className="mt-20 border-t border-[var(--color-border)] pt-16 lg:mt-28 lg:pt-20"
          >
            <div data-gsap="related-header">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">More work</p>
              <h2 className="mb-10 font-display text-2xl font-light tracking-tight sm:text-3xl">
                Related projects
              </h2>
            </div>
            <div data-gsap="related-grid" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <div key={p.slug || p.id} data-gsap="related-card">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </section>
        )}

        <div
          data-gsap="footer-cta"
          className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-border)] pt-12 lg:mt-28"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-foreground-muted)] transition hover:text-[var(--color-foreground)]"
          >
            <FiArrowLeft aria-hidden />
            All projects
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.15em] ${NEU.btnPrimary}`}
          >
            {WORK_STATUS.primaryCta}
          </Link>
        </div>
      </div>
    </div>
  )
}

function Section({ eyebrow, title, children }) {
  return (
    <section data-gsap="section" className="border-t border-[var(--color-border)] pt-10 lg:pt-12">
      <p
        data-gsap="section-item"
        className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]"
      >
        {eyebrow}
      </p>
      <h2
        data-gsap="section-item"
        className="mb-6 font-display text-2xl font-light tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <div data-gsap="section-item">{children}</div>
    </section>
  )
}
