'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import EditorialShell from '../../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../../components/editorial/LetsBuildSection';
import { Reveal } from '../../../../components/ui/Reveal';
import { isInDevelopmentProject, projectSiteLinkLabel } from '../../../../lib/projectStatus';

/* Line-free layout: sections are separated by tone, radius and space, never by borders or rules. */

/* Page-scoped accent: overrides the theme gold. Change the hex values here to recolour the page. */
const SHELL =
  '!bg-[var(--color-surface)] !text-[var(--color-foreground)] [--color-accent:#ff5e3a] [--color-accent-soft:rgba(255,94,58,0.12)] [--color-primary-bg:#ff5e3a] [--color-primary-fg:#ffffff]';
const PANEL = 'rounded-3xl bg-[var(--color-surface-elevated)] p-6 sm:p-8 md:p-10';
const CHIP =
  'rounded-full bg-[var(--color-accent-soft)] px-4 py-2 font-sans text-sm font-medium text-[var(--color-foreground)]';
const LABEL =
  'font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]';
const BODY = 'font-sans text-base leading-relaxed text-[var(--color-foreground-muted)] md:text-lg';

function getRelatedProjects(projects, slug, industry, limit = 3) {
  const others = projects.filter((p) => p.slug && p.slug !== slug);
  const sameIndustry = others.filter((p) => p.industry && p.industry === industry);
  const rest = others.filter((p) => !sameIndustry.includes(p));
  return [...sameIndustry, ...rest].slice(0, limit);
}

/** Soft accent glows behind the page. No lines. */
function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)] opacity-[0.14] blur-[120px]" />
      <div className="absolute -left-48 top-[55rem] h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]" />
    </div>
  );
}

function Block({ label, title, className = '', children }) {
  return (
    <Reveal as="section" className={`${PANEL} ${className}`}>
      <p className={LABEL}>{label}</p>
      {title ? (
        <h2 className="mt-3 font-sans text-2xl font-bold tracking-[-0.02em] text-[var(--color-foreground)] md:text-3xl">
          {title}
        </h2>
      ) : null}
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

export default function ProjectDetailClient({ slug, projects = [], project }) {
  const related = useMemo(
    () => getRelatedProjects(projects, slug, project?.industry),
    [projects, slug, project?.industry],
  );

  if (!project) {
    return (
      <EditorialShell showGrid={false} className={SHELL}>
        <div className="flex min-h-[60vh] flex-col items-start justify-center px-6 md:px-16 lg:px-24">
          <p className={LABEL}>Project not found</p>
          <Link href="/work" className={`mt-6 inline-flex items-center gap-2 ${LABEL} hover:text-[var(--color-accent)]`}>
            <ArrowLeft size={14} /> All work
          </Link>
        </div>
      </EditorialShell>
    );
  }

  const facts = [
    { label: 'Year', value: project.year },
    { label: 'Timeline', value: project.timeline },
    { label: 'Role', value: project.role },
    { label: 'Client', value: project.employer },
    { label: 'Team', value: project.teamMembers ? String(project.teamMembers) : '' },
  ].filter((f) => f.value);

  const story = [
    { label: 'Problem', text: project.problem },
    { label: 'Solution', text: project.solution },
    { label: 'Impact', text: project.impact },
  ].filter((s) => s.text);

  const overview = project.about || project.description;
  const metric = project.proofMetric?.value ? project.proofMetric : null;
  const links = [
    project.previewLink && { href: project.previewLink, text: projectSiteLinkLabel(project) },
    project.gitLink && { href: project.gitLink, text: 'Source' },
    project.linkedinLink && { href: project.linkedinLink, text: 'LinkedIn' },
  ].filter(Boolean);

  return (
    <EditorialShell showGrid={false} className={SHELL}>
      <article className="relative px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32 lg:px-24">
        <GlowBackground />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Link href="/work" className={`inline-flex items-center gap-2 ${LABEL} transition hover:text-[var(--color-accent)]`}>
            <ArrowLeft size={14} /> All work
          </Link>

          <header className="mt-10 max-w-4xl md:mt-14">
            <div className="flex flex-wrap items-center gap-3">
              {project.industry ? <span className={CHIP}>{project.industry}</span> : null}
              {isInDevelopmentProject(project) ? <span className={CHIP}>In development</span> : null}
            </div>
            <h1 className="mt-6 font-sans text-5xl font-bold leading-[1] tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            {project.tagline ? (
              <p className="mt-6 max-w-2xl font-sans text-xl leading-snug text-[var(--color-foreground-muted)] md:text-2xl">
                {project.tagline}
              </p>
            ) : null}
            {project.previewLink ? (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-bg)] px-6 py-3 font-sans text-sm font-semibold text-[var(--color-primary-fg)] transition hover:opacity-90"
              >
                {projectSiteLinkLabel(project)}
                <ArrowUpRight size={16} />
              </a>
            ) : null}
          </header>

          {project.image ? (
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-[var(--color-surface-elevated)] shadow-2xl shadow-black/10 md:mt-16">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover object-top"
              />
            </div>
          ) : null}

          {(metric || facts.length > 0) && (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {metric ? (
                <div className="rounded-3xl bg-[var(--color-foreground)] p-6 text-[var(--color-surface)] sm:p-8 md:col-span-1">
                  <p className="font-sans text-6xl font-bold leading-none tracking-[-0.04em] tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] opacity-90">
                    {metric.label}
                  </p>
                  {metric.detail ? <p className="mt-1 font-sans text-sm opacity-75">{metric.detail}</p> : null}
                </div>
              ) : null}
              {facts.length > 0 ? (
                <dl className={`${PANEL} grid grid-cols-2 gap-6 ${metric ? 'md:col-span-2' : 'md:col-span-3'} sm:grid-cols-3`}>
                  {facts.map((f) => (
                    <div key={f.label}>
                      <dt className={LABEL}>{f.label}</dt>
                      <dd className="mt-2 font-sans text-base font-semibold text-[var(--color-foreground)]">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          )}

          <div className="mt-6 space-y-6">
            {overview ? (
              <Block label="Overview">
                <p className={`${BODY} max-w-3xl !text-[var(--color-foreground)]`}>{overview}</p>
              </Block>
            ) : null}

            {story.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-3">
                {story.map((s) => (
                  <Reveal
                    key={s.label}
                    className={`${PANEL} ${s.label === 'Impact' ? '!bg-[var(--color-accent-soft)]' : ''}`}
                  >
                    <p className={LABEL}>{s.label}</p>
                    <p
                      className={`mt-4 ${BODY} ${s.label === 'Impact' ? '!font-medium !text-[var(--color-foreground)]' : ''}`}
                    >
                      {s.text}
                    </p>
                  </Reveal>
                ))}
              </div>
            ) : null}

            {project.outcomes?.length > 0 ? (
              <Block label="Outcomes" title="Measurable results">
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.outcomes.map((o) => (
                    <li key={`${o.value}-${o.label}`} className="rounded-2xl bg-[var(--color-surface)] p-6">
                      <p className="font-sans text-4xl font-bold tracking-[-0.03em] tabular-nums text-[var(--color-foreground)]">
                        {o.value}
                      </p>
                      <p className={`mt-3 ${LABEL}`}>{o.label}</p>
                      {o.detail ? (
                        <p className="mt-1 font-sans text-sm text-[var(--color-foreground-muted)]">{o.detail}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}

            {project.responsibilities?.length > 0 || project.services?.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-5">
                {project.responsibilities?.length > 0 ? (
                  <Block label="Scope" title="Key responsibilities" className="md:col-span-3">
                    <ol className="space-y-5">
                      {project.responsibilities.map((r, i) => (
                        <li key={r} className="flex gap-4">
                          <span className="font-sans text-sm font-bold tabular-nums text-[var(--color-accent)]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className={BODY}>{r}</span>
                        </li>
                      ))}
                    </ol>
                  </Block>
                ) : null}
                {project.services?.length > 0 ? (
                  <Block label="Stack" title="Technologies" className="md:col-span-2">
                    <ul className="flex flex-wrap gap-2">
                      {project.services.map((t) => (
                        <li key={t} className={CHIP}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}
              </div>
            ) : null}

            {links.length > 1 ? (
              <Block label="Links">
                <ul className="flex flex-wrap gap-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-5 py-3 font-sans text-sm font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-accent-soft)]"
                      >
                        {l.text}
                        <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
          </div>

          {related.length > 0 ? (
            <section className="mt-20 md:mt-28">
              <p className={LABEL}>More work</p>
              <h2 className="mt-3 font-sans text-3xl font-bold tracking-[-0.02em] text-[var(--color-foreground)]">
                Related projects
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className={`group flex h-full flex-col ${PANEL} transition hover:-translate-y-1 hover:bg-[var(--color-accent-soft)]`}
                    >
                      <p className={LABEL}>{p.year || p.industry}</p>
                      <h3 className="mt-3 font-sans text-xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-foreground)]">
                        {p.title}
                      </h3>
                      {p.tagline ? (
                        <p className="mt-3 line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                          {p.tagline}
                        </p>
                      ) : null}
                      <span className="mt-5 inline-flex items-center gap-1 font-sans text-sm font-semibold text-[var(--color-foreground)]">
                        View <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
      <LetsBuildSection animatePath formAsModal />
    </EditorialShell>
  );
}
