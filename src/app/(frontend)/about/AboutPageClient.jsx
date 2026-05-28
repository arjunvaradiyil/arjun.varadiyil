'use client';

import React from 'react';
import SectionHeader from '../../../components/About/SectionHeader';
import Timeline from '../../../components/About/Timeline';
import Contactform from '../../../components/Contactform';
import AboutSkills from '../../../components/About/AboutSkills';
import AboutCertifications from '../../../components/About/AboutCertifications';
import Experience from '../../../components/About/Experience';
import AboutHero from '../../../components/About/AboutHero';
import { NEU } from '../../../components/ui/neuTheme';

export default function AboutPageClient({
  education = [],
  skills = [],
  experience = [],
  certifications = [],
  profile,
  professionalSummary,
  aboutSkillsSubtitle,
  experienceIntro,
  workStatus,
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100">
      <AboutHero
        profile={profile}
        professionalSummary={professionalSummary}
        workStatus={workStatus}
      />
      <AboutSkills skills={skills} subtitle={aboutSkillsSubtitle} />
      <Experience experience={experience} intro={experienceIntro} />
      <AboutCertifications certifications={certifications} />

      <section className={`border-t border-white/10 ${NEU.section} ${NEU.sectionPad}`}>
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            index="06"
            eyebrow="Education"
            title="Academic background"
            subtitle="B.Tech in Computer Science Engineering from CUSAT — foundation in programming, data structures, and web development."
            align="left"
          />
          <Timeline items={education} />
        </div>
      </section>

      <Contactform />
    </div>
  );
}
