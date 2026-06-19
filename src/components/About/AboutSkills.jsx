'use client';

import { skills as defaultSkills } from '../../data/skills';
import ServiceNeuGrid from '../Home/ServiceNeuGrid';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';

export default function AboutSkills({ skills = defaultSkills, subtitle = '' }) {
  return (
    <section
      data-gsap="about-section"
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <div data-gsap="reveal">
          <SectionHeader
            eyebrow="Skills"
            title="Technical expertise"
            subtitle={subtitle || undefined}
            align="left"
            staticReveal
          />
        </div>
        <ServiceNeuGrid skills={skills} />
      </div>
    </section>
  );
}
