'use client';

import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';

export default function ProjectScreenshots({ screenshots = [] }) {
  if (!screenshots.length) return null;

  return (
    <Reveal as="section" className="border-t border-[var(--color-border)] pt-10 lg:pt-12">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
        Screenshots
      </p>
      <h2 className="mb-6 font-display text-2xl font-light tracking-tight sm:text-3xl">
        Product views
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {screenshots.map((shot, index) => (
          <li
            key={`${shot.image}-${index}`}
            className={`overflow-hidden ${NEU.frame}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-elevated)]">
              <Image
                src={shot.image}
                alt={shot.caption || `Project screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
            {shot.caption ? (
              <p className="border-t border-[var(--color-border)] px-4 py-3 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                {shot.caption}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
