'use client';

import React from 'react';
import Education from '../../../components/About/Education';
import AboutSkills from '../../../components/About/AboutSkills';
import AboutCertifications from '../../../components/About/AboutCertifications';
import Experience from '../../../components/About/Experience';
import AboutHero from '../../../components/About/AboutHero';
import HomeCta from '../../../components/Home/HomeCta';

export default function AboutPageClient({
  education = [],
  skills = [],
  experience = [],
  certifications = [],
  profile,
  professionalSummary,
  aboutSkillsSubtitle,
  experienceIntro,
  liveSummary,
}) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <AboutHero
        profile={profile}
        professionalSummary={professionalSummary}
        liveSummary={liveSummary}
      />
      <AboutSkills skills={skills} subtitle={aboutSkillsSubtitle} />
      <Experience experience={experience} intro={experienceIntro} />
      <AboutCertifications certifications={certifications} />
      <Education education={education} />
      <HomeCta />
    </div>
  );
}
