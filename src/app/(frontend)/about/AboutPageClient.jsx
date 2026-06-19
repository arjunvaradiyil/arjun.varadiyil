'use client';

import React from 'react';
import Education from '../../../components/About/Education';
import AboutSkills from '../../../components/About/AboutSkills';
import AboutCertifications from '../../../components/About/AboutCertifications';
import Experience from '../../../components/About/Experience';
import AboutHero from '../../../components/About/AboutHero';
import HomeCta from '../../../components/Home/HomeCta';
import { useGsap } from '../../../hooks/useGsap';
import {
  prefersReducedMotion,
  scrollReveal,
} from '../../../lib/gsap';

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
  const scopeRef = useGsap(({ gsap, scope }) => {
    if (prefersReducedMotion()) return;

    gsap.utils.toArray('[data-gsap="about-section"]', scope).forEach((section) => {
      scrollReveal(section, '[data-gsap="reveal"]', {
        y: 24,
        stagger: 0.07,
        duration: 0.6,
      });
    });
  }, []);

  return (
    <div ref={scopeRef} className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
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
