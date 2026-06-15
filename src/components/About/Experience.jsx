'use client';

import Image from 'next/image';
import { experienceData as defaultExperience } from '../../data/experienceData';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';

const DEFAULT_INTRO =
  'Full-stack delivery at Faircode Infotech — Payload CMS and Next.js.';

function ExperienceRoleHeader({ item }) {
  const isEmployer = item.company.toLowerCase().includes('faircode');

  return (
    <div className="grid gap-px bg-[var(--color-grid-line)] md:grid-cols-[5.5rem_1fr_auto]">
      <div className="flex items-center justify-center bg-[var(--color-surface)] p-5 md:p-6">
        <div
          className={`relative h-14 w-14 shrink-0 overflow-hidden border border-[var(--color-border)] ${
            isEmployer ? 'bg-white p-1.5' : 'bg-[var(--color-surface-elevated)]'
          }`}
        >
          <Image src={item.logo} alt={`${item.company} logo`} fill className="object-contain" sizes="56px" />
        </div>
      </div>

      <div className="flex min-w-0 flex-col justify-center bg-[var(--color-surface)] px-5 py-6 md:px-8">
        <p className={NEU.eyebrow}>Role</p>
        <h3 className={`mt-2 ${NEU.display} text-xl sm:text-2xl md:text-3xl`}>{item.role}</h3>
        <p className="mt-2 text-sm font-medium text-[var(--color-foreground-soft)] sm:text-base">{item.company}</p>
      </div>

      <div className="flex flex-col justify-center bg-[var(--color-surface)] px-5 py-6 md:items-end md:px-8 md:text-right">
        <p className={NEU.eyebrow}>Period</p>
        <p className="mt-2 font-syne text-sm font-bold leading-snug text-[var(--color-foreground)] sm:text-base">
          {item.period}
        </p>
      </div>
    </div>
  );
}

function ExperiencePoints({ points }) {
  return (
    <ul className="divide-y divide-[var(--color-border)]">
      {points.map((point, i) => (
        <li
          key={i}
          className="grid grid-cols-[3.25rem_1fr] gap-4 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
        >
          <span className="border-r border-[var(--color-border)] py-5 pl-4 font-mono text-xs tabular-nums text-[var(--color-foreground-faint)] sm:py-6 sm:pl-6 sm:text-sm">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className={`py-5 pr-4 text-sm leading-relaxed sm:py-6 sm:pr-8 sm:text-base ${NEU.bodyText}`}>
            {point}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function Experience({ experience = defaultExperience, intro = DEFAULT_INTRO }) {
  return (
    <section
      data-gsap="about-section"
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal">
          <SectionHeader
            eyebrow="Career"
            title="Professional experience"
            subtitle={intro || DEFAULT_INTRO}
            align="left"
            staticReveal
          />
        </div>

        <div className="space-y-10">
          {experience.map((item) => (
            <article
              key={item.company}
              data-gsap="reveal"
              className={`overflow-hidden ${NEU.frame}`}
            >
              <ExperienceRoleHeader item={item} />
              <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
                <p className="border-b border-[var(--color-border)] px-5 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-foreground-subtle)] sm:px-8">
                  Key contributions
                </p>
                <ExperiencePoints points={item.points} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
