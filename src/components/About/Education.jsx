'use client';

import Image from 'next/image';
import { EDUCATION_TIMELINE as defaultEducation } from '../../data/aboutData';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';

const DEFAULT_INTRO =
  'B.Tech in Computer Science Engineering from CUSAT — foundation in programming, systems, and web development.';

function EducationInstitutionHeader({ item, index }) {
  return (
    <div className="grid gap-px bg-[var(--color-grid-line)] md:grid-cols-[5.5rem_1fr_auto]">
      <div className="flex items-center justify-center bg-[var(--color-surface)] p-5 md:p-6">
        {item.image ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
            <Image
              src={item.image}
              alt={`${item.title} logo`}
              fill
              className="object-contain object-center grayscale"
              sizes="56px"
            />
          </div>
        ) : (
          <span className="font-mono text-sm tabular-nums text-[var(--color-foreground-faint)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-center bg-[var(--color-surface)] px-5 py-6 md:px-8">
        <p className={NEU.eyebrow}>Institution</p>
        <h3 className={`mt-2 ${NEU.display} text-xl leading-snug sm:text-2xl md:text-3xl`}>
          {item.title}
        </h3>
      </div>

      <div className="flex flex-col justify-center bg-[var(--color-surface)] px-5 py-6 md:items-end md:px-8 md:text-right">
        <p className={NEU.eyebrow}>Years</p>
        <p className="mt-2 font-syne text-sm font-bold leading-snug text-[var(--color-foreground)] sm:text-base">
          {item.year}
        </p>
        {item.grade ? (
          <>
            <p className={`mt-4 ${NEU.eyebrow}`}>Result</p>
            <p className="mt-2 text-sm font-medium text-[var(--color-foreground-soft)] sm:text-base">{item.grade}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

function EducationProgramme({ description }) {
  if (!description) return null;

  return (
    <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <p className="border-b border-[var(--color-border)] px-5 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-foreground-subtle)] sm:px-8">
        Programme
      </p>
      <p className={`px-5 py-5 text-sm leading-relaxed sm:px-8 sm:py-6 sm:text-base ${NEU.bodyText}`}>
        {description}
      </p>
    </div>
  );
}

export default function Education({ education = defaultEducation, intro = DEFAULT_INTRO }) {
  return (
    <section
      data-gsap="about-section"
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal">
          <SectionHeader
            eyebrow="Education"
            title="Academic background"
            subtitle={intro || DEFAULT_INTRO}
            align="left"
            staticReveal
          />
        </div>

        <div className="space-y-10">
          {education.map((item, index) => (
            <article
              key={`${item.title}-${item.year}`}
              data-gsap="reveal"
              className={`overflow-hidden ${NEU.frame}`}
            >
              <EducationInstitutionHeader item={item} index={index} />
              <EducationProgramme description={item.description} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
