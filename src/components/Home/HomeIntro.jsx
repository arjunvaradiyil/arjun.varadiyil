'use client';

import { Reveal } from '../ui/Reveal';
import GhostWatermark from '../ui/GhostWatermark';
import { NEU } from '../ui/neuTheme';

export default function HomeIntro() {
  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className={NEU.eyebrow}>What I deliver</p>
          <h2 className={`${NEU.display} text-2xl sm:text-3xl md:text-4xl`}>
            Why teams hire me — and what they get
          </h2>
          <p className={`mt-6 ${NEU.bodyText}`}>
            Editors should publish without filing dev tickets. That is the bar — not another React portfolio.
          </p>
        </Reveal>

        <Reveal className="relative mt-12 md:mt-16" delay={0.1}>
          <GhostWatermark className="absolute -left-2 top-1/2 hidden -translate-y-1/2 text-[clamp(3rem,14vw,11rem)] md:block">
            Outcomes
          </GhostWatermark>
          <div className="grid gap-px bg-[var(--color-grid-line)] md:grid-cols-2">
            <div className="bg-[var(--color-surface)] px-6 py-10 md:px-8 md:py-12">
              <p className={NEU.eyebrow}>Problem I solve</p>
              <h3 className={`mt-4 ${NEU.display} text-xl md:text-2xl`}>
                Hard-coded sites that block editorial teams
              </h3>
              <p className={`mt-4 ${NEU.bodyText}`}>
                Newsrooms and culture orgs need to publish without waiting on developers. I replace that
                bottleneck with Payload CMS workflows editors actually use.
              </p>
            </div>
            <div className="bg-[var(--color-surface)] px-6 py-10 md:px-8 md:py-12">
              <p className={NEU.eyebrow}>Result you get</p>
              <h3 className={`mt-4 ${NEU.display} text-xl md:text-2xl`}>
                Faster publishing, fewer rebuilds
              </h3>
              <p className={`mt-4 ${NEU.bodyText}`}>
                Custom blocks, typed APIs, and Next.js pages that hold up on launch day — usually in
                2–4 month cycles with a clear handoff.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
