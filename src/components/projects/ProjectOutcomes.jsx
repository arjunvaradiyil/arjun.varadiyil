'use client';

import { NEU } from '../ui/neuTheme';

/** Compact outcome metrics — value + label grid for cards and case studies. */
export default function ProjectOutcomes({ outcomes = [], compact = false, className = '' }) {
  if (!outcomes?.length) return null;

  if (compact) {
    return (
      <ul className={`mt-4 grid grid-cols-2 gap-2 ${className}`}>
        {outcomes.slice(0, 4).map((item) => (
          <li
            key={`${item.value}-${item.label}`}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5"
          >
            <p className="font-syne text-sm font-bold tabular-nums text-[var(--color-foreground)]">{item.value}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-[var(--color-foreground-subtle)]">{item.label}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {outcomes.map((item) => (
        <li key={`${item.value}-${item.label}`} className="bg-[var(--color-surface)] px-5 py-5 sm:px-6">
          <p className="font-syne text-2xl font-bold tabular-nums text-[var(--color-foreground)]">{item.value}</p>
          <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-foreground)]">
            {item.label}
          </p>
          {item.detail ? (
            <p className={`mt-2 text-xs leading-relaxed ${NEU.bodyText}`}>{item.detail}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
