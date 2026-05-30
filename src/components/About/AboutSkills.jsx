'use client';

import { skills as defaultSkills } from '../../data/skills';
import ServiceNeuGrid from '../Home/ServiceNeuGrid';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';

const DEFAULT_SUBTITLE =
  'Node.js, React, Next.js, Payload CMS, databases, and the tools I use to ship production-ready web products.';

export default function AboutSkills({ skills = defaultSkills, subtitle = DEFAULT_SUBTITLE }) {
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
            subtitle={subtitle || DEFAULT_SUBTITLE}
            align="left"
            staticReveal
          />
        </div>
        <ServiceNeuGrid skills={skills} />
      </div>
    </section>
  );
}
