'use client';

import { skills as defaultSkills } from '../../data/skills';
import ServiceNeuGrid from '../Home/ServiceNeuGrid';
import SectionHeader from './SectionHeader';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';

export default function AboutSkills({ skills = defaultSkills, subtitle = '' }) {
  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title="Technical expertise"
            subtitle={subtitle || undefined}
            align="left"
            staticReveal
          />
        </Reveal>
        <ServiceNeuGrid skills={skills} />
      </div>
    </section>
  );
}
