'use client';

import { Reveal } from '../ui/Reveal';
import GhostWatermark from '../ui/GhostWatermark';
import { NEU } from '../ui/neuTheme';

export default function HomeIntro() {
  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`${NEU.display} text-2xl sm:text-3xl md:text-4xl`}>
            Full stack work for editorial &amp; news platforms
          </h2>
          <p className={`mt-6 ${NEU.bodyText}`}>
            I design and ship Payload CMS and Next.js platforms where content, performance, and UX
            work together — from biennale programmes and news publishing to civic tools that need
            to work under real-world traffic.
          </p>
        </Reveal>

        <Reveal className="relative mt-12 md:mt-16" delay={0.1}>
          <GhostWatermark className="absolute -left-2 top-1/2 hidden -translate-y-1/2 text-[clamp(3rem,14vw,11rem)] md:block">
            The stack
          </GhostWatermark>
          <div className="grid gap-px bg-[var(--color-grid-line)] md:grid-cols-2">
            <div className="bg-[var(--color-surface)] px-6 py-10 md:px-8 md:py-12">
              <p className={NEU.eyebrow}>Approach</p>
              <h3 className={`mt-4 ${NEU.display} text-xl md:text-2xl`}>
                Payload CMS &amp; Next.js architecture
              </h3>
              <p className={`mt-4 ${NEU.bodyText}`}>
                Payload collections, custom blocks, and GraphQL APIs shaped for editors — not
                one-off hard-coded pages.
              </p>
            </div>
            <div className="bg-[var(--color-surface)] px-6 py-10 md:px-8 md:py-12">
              <p className={NEU.eyebrow}>Focus</p>
              <h3 className={`mt-4 ${NEU.display} text-xl md:text-2xl`}>
                Production platforms at scale
              </h3>
              <p className={`mt-4 ${NEU.bodyText}`}>
                Performance, accessibility, and maintainable code — shipped in agile teams and
                tuned for real users.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
