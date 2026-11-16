'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import { Reveal } from '../../../components/ui/Reveal';
import { GITHUB_URL, LINKEDIN_URL } from '../../../data/proof';
import { experienceData } from '../../../data/experienceData';
import { EDUCATION_TIMELINE, PROFILE as DEFAULT_PROFILE } from '../../../data/aboutData';
import {
  ABOUT_EXPERIENCE_INTRO,
  ABOUT_SKILLS_LINE,
  ABOUT_SUMMARY_SEO,
} from '../../../data/seoContent';
import { EMPLOYER_SHORT, LOCATION, ROLE_TITLE } from '../../../lib/employment';
import { SITE_EMAIL } from '../../../lib/siteSeo';

const EASE = [0.16, 1, 0.3, 1];
const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

/* Same line-free look as the work detail page: tone, radius and space instead of borders. Accent is page-scoped. */
const SHELL =
  '!bg-[var(--color-surface)] !text-[var(--color-foreground)] [--color-accent:#ff5e3a] [--color-accent-soft:rgba(255,94,58,0.12)] [--color-primary-bg:#ff5e3a] [--color-primary-fg:#ffffff]';
const PANEL = 'rounded-3xl bg-[var(--color-surface-elevated)] p-6 sm:p-8 md:p-10';
const CHIP =
  'rounded-full bg-[var(--color-accent-soft)] px-4 py-2 font-sans text-sm font-medium text-[var(--color-foreground)]';
const LABEL =
  'font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]';
const BODY = 'font-sans text-base leading-relaxed text-[var(--color-foreground-muted)] md:text-lg';
const ICON_BTN =
  'flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-elevated)] text-[var(--color-foreground)] transition hover:bg-[var(--color-accent)] hover:text-white';

function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)] opacity-[0.14] blur-[120px]" />
      <div className="absolute -left-48 top-[60rem] h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]" />
    </div>
  );
}

function Block({ label, title, intro, children }) {
  return (
    <Reveal as="section" className={PANEL}>
      <p className={LABEL}>{label}</p>
      {title ? (
        <h2 className="mt-3 font-sans text-2xl font-bold tracking-[-0.02em] text-[var(--color-foreground)] md:text-3xl">
          {title}
        </h2>
      ) : null}
      {intro ? <p className={`mt-4 max-w-3xl ${BODY}`}>{intro}</p> : null}
      <div className="mt-8">{children}</div>
    </Reveal>
  );
}

function Portrait({ alt, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      className="relative mx-auto h-72 w-64 flex-shrink-0 md:mx-0 md:h-[28rem] md:w-[22rem]"
    >
      <div className="group relative h-full w-full overflow-hidden rounded-[2.75rem] bg-[var(--color-accent-soft)] md:rounded-[3.5rem]">
        <Image
          src="/profilepic-removebg-preview.png"
          alt={alt}
          fill
          className="object-contain object-bottom grayscale transition duration-700 group-hover:grayscale-0"
          sizes="(max-width: 768px) 256px, 352px"
          priority
        />
      </div>
    </motion.div>
  );
}

export default function AboutPageClient({
  education = [],
  skills = [],
  experience = [],
  certifications = [],
  profile,
}) {
  const reduceMotion = useReducedMotion();
  const person = profile || DEFAULT_PROFILE;
  const displayName = person.fullName || person.name || 'Arjun Varadiyil';
  const expRows = experience?.length ? experience : experienceData;
  const eduRows = education?.length ? education : EDUCATION_TIMELINE;
  const skillList = skills?.length
    ? skills.map((s) => (typeof s === 'string' ? s : s.name || s.title)).filter(Boolean)
    : ['Next.js', 'Payload CMS', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'LangChain', 'GraphQL', 'Tailwind CSS'];

  const nameParts = displayName.split(' ');

  return (
    <EditorialShell showGrid={false} className={SHELL}>
      <div className="relative">
        <GlowBackground />
        <div className="relative z-10">
          <section className="px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32 lg:px-24">
            <div className="mx-auto max-w-6xl">
              <span className={CHIP}>Profile</span>
              <div className="mt-8 flex flex-col gap-12 md:flex-row md:items-end md:gap-16 lg:gap-20">
                <div className="flex-1">
                  <h1 className="font-sans text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-foreground)] sm:text-7xl lg:text-8xl">
                    {nameParts[0]}
                    <br />
                    {nameParts.slice(1).join(' ') || 'Varadiyil'}
                  </h1>
                  <p className={`mt-6 ${LABEL}`}>
                    {ROLE_TITLE} · {EMPLOYER_SHORT} · {person.location || LOCATION}
                  </p>
                  <p className="mt-8 max-w-2xl font-sans text-xl leading-snug text-[var(--color-foreground-muted)] md:text-2xl">
                    {ABOUT_SUMMARY_SEO}
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    <a
                      href={resume}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-bg)] px-6 py-3 font-sans text-sm font-semibold text-[var(--color-primary-fg)] transition hover:opacity-90"
                    >
                      Resume <ArrowUpRight size={16} />
                    </a>
                    <a href={`mailto:${person.email || SITE_EMAIL}`} className={ICON_BTN} aria-label="Email">
                      <Mail size={16} />
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={ICON_BTN} aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={ICON_BTN} aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>

                <Portrait alt={displayName} reduceMotion={reduceMotion} />
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-6xl space-y-6 px-6 pb-16 md:px-16 md:pb-24 lg:px-24">
            <div id="experience" className="scroll-mt-24">
              <Block label="Experience" title="Where I have worked" intro={ABOUT_EXPERIENCE_INTRO}>
                <ul className="space-y-4">
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
                      <motion.li
                        key={`${company}-${i}`}
                        whileHover={reduceMotion ? undefined : { y: -4 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8"
                      >
                        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                          <div>
                            <h3 className="font-sans text-xl font-bold tracking-[-0.02em] text-[var(--color-foreground)] md:text-2xl">
                              {role}
                            </h3>
                            <p className="mt-1 font-sans text-sm text-[var(--color-foreground-muted)]">{company}</p>
                          </div>
                          {period ? <span className={`${CHIP} self-start whitespace-nowrap`}>{period}</span> : null}
                        </div>
                        {points.length > 0 ? (
                          <ul className="mt-5 max-w-3xl space-y-3">
                            {points.map((point) => (
                              <li key={point} className={`flex gap-3 ${BODY} !text-base`}>
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                                {point}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </motion.li>
                    );
                  })}
                </ul>
                <Link
                  href="/experience"
                  className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
                >
                  Full timeline <ArrowUpRight size={14} />
                </Link>
              </Block>
            </div>

            <Block label="Skills" title={ABOUT_SKILLS_LINE}>
              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <li key={skill} className={CHIP}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Education" title="Education">
              <ul className="grid gap-4 md:grid-cols-2">
                {eduRows.map((edu, i) => {
                  const title = edu.title || edu.degree || edu.school;
                  const period = edu.year || edu.period;
                  return (
                    <li key={`${title}-${i}`} className="rounded-2xl bg-[var(--color-surface)] p-6">
                      {period ? <p className={LABEL}>{period}</p> : null}
                      <h3 className="mt-3 font-sans text-xl font-bold tracking-[-0.02em] text-[var(--color-foreground)]">
                        {title}
                      </h3>
                      {edu.description ? (
                        <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                          {edu.description}
                        </p>
                      ) : null}
                      {edu.grade ? <p className={`mt-3 ${LABEL}`}>{edu.grade}</p> : null}
                    </li>
                  );
                })}
              </ul>
            </Block>

            {certifications?.length > 0 ? (
              <Block label="Certifications" title="Certifications">
                <ul className="grid gap-4 md:grid-cols-2">
                  {certifications.map((cert, i) => (
                    <li key={cert.id || cert.title || i} className="rounded-2xl bg-[var(--color-surface)] p-6">
                      <h3 className="font-sans text-lg font-bold tracking-[-0.02em] text-[var(--color-foreground)]">
                        {cert.title || cert.name}
                      </h3>
                      <p className={`mt-2 ${LABEL}`}>
                        {cert.issuer || cert.organization}
                        {cert.year ? ` · ${cert.year}` : ''}
                      </p>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
          </div>
        </div>
      </div>

      <LetsBuildSection animatePath />
    </EditorialShell>
  );
}
