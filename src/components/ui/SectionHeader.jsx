'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { NEU } from './neuTheme';

export default function SectionHeader({
  title,
  subtitle,
  description,
  eyebrow,
  action,
  titleId,
  pill = true,
}) {
  const body = subtitle ?? description;

  return (
    <header className="relative mb-10 flex flex-col items-center gap-4 md:mb-12">
      {(eyebrow || title) && pill ? (
        <p className={NEU.sectionPill}>{eyebrow || title}</p>
      ) : null}

      {!pill && title ? (
        <h2 id={titleId} className={`${NEU.display} text-3xl md:text-4xl`}>
          {title}
        </h2>
      ) : null}

      {pill && title && eyebrow ? (
        <h2 id={titleId} className="sr-only">
          {title}
        </h2>
      ) : null}

      {pill && title && !eyebrow ? (
        <h2 id={titleId} className="sr-only">
          {title}
        </h2>
      ) : null}

      {body ? (
        <p className={`max-w-2xl text-center text-base md:text-lg ${NEU.bodyText}`}>{body}</p>
      ) : null}

      {action ? (
        <Link
          href={action.href}
          className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-foreground-soft)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] max-md:static"
        >
          {action.label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      ) : null}
    </header>
  );
}
