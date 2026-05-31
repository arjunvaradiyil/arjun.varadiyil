'use client';

import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { CURRENTLY_EXPLORING, GITHUB_USERNAME } from '../../data/proof';

const BUILDING_NOTE =
  'On my own time: AI agents and RAG experiments — separate from day-job client work.';

/** Slim trust strip — active learning + GitHub. Sits directly under hero. */
export default function HomeActiveStrip() {
  return (
    <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <p className="mb-3 max-w-3xl font-sans text-xs leading-relaxed text-[var(--color-foreground-muted)]">
          {BUILDING_NOTE}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">
            Currently exploring
          </span>
          <ul className="flex flex-wrap gap-2">
            {CURRENTLY_EXPLORING.map((item) => (
              <li
                key={item}
                className="border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-foreground-soft)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer me"
          className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-foreground-soft)] transition hover:text-[var(--color-foreground)]"
        >
          <Github className="h-3.5 w-3.5" aria-hidden />
          Active on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
        </div>
      </div>
    </div>
  );
}
