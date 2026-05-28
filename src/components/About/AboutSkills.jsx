'use client';

import { skills as defaultSkills } from '../../data/skills';
import ServiceNeuGrid from '../Home/ServiceNeuGrid';
import SectionHeader from './SectionHeader';
import { NEU } from '../ui/neuTheme';

const DEFAULT_SUBTITLE =
  'Node.js, React, Next.js, Payload CMS, databases, and the tools I use to ship production-ready web products.';

export default function AboutSkills({ skills = defaultSkills, subtitle = DEFAULT_SUBTITLE }) {
  return (
    <section className={`border-t border-white/10 bg-[#0a0a0a] ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="Skills"
          title="Technical expertise"
          subtitle={subtitle}
          align="left"
        />
        <ServiceNeuGrid skills={skills} />
      </div>
    </section>
  );
}
