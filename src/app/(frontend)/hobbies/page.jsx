'use client';

import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import PageShell from '../../../components/layout/PageShell';
import HeroImage from '../../../components/HeroImage';
import { Reveal } from '../../../components/ui/Reveal';
import { NEU } from '../../../components/ui/neuTheme';

const INTERESTS = [
  'Photography',
  'Fitness',
  'Travel',
  'Learning new tech',
  'Design exploration',
  'Open source',
];

export default function HobbiesPage() {
  return (
    <PageShell>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <PageHeader
            index="04"
            eyebrow="Profile"
            title="Hobbies & interests"
            description="When I'm not building CMS platforms and full stack products, I explore photography, fitness, and new tools — the same curiosity shapes how I write code."
            align="left"
          />
          <ul className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => (
              <li key={item} className={NEU.techTag}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Reveal variant="scale" delay={0.15} className={`overflow-hidden ${NEU.frame} bg-zinc-200 dark:bg-zinc-800`}>
          <HeroImage />
        </Reveal>
      </div>
    </PageShell>
  );
}
