'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { CURRENT_ROLE, PROOF_METRICS } from '../../data/proof';

export default function HomeProofBar() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]" aria-label="Proof and credentials">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={NEU.eyebrow}>Currently</p>
            <p className="mt-2 font-syne text-lg font-bold text-[var(--color-foreground)] sm:text-xl">
              {CURRENT_ROLE.title}{' '}
              <span className="text-[var(--color-foreground-soft)]">@ {CURRENT_ROLE.company}</span>
            </p>
            <p className="mt-1 font-sans text-sm text-[var(--color-foreground-muted)]">
              {CURRENT_ROLE.location}
            </p>
          </div>
          <Link href="/about" className={`inline-flex shrink-0 items-center gap-2 ${NEU.link}`}>
            View work profile
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <StaggerReveal
          as="ul"
          className="mt-8 grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROOF_METRICS.map((item) => (
            <StaggerItem key={item.label} as="li" className="bg-[var(--color-surface)]">
              <Link
                href={item.href}
                className="group flex h-full flex-col px-5 py-6 transition hover:bg-[var(--color-hover)] sm:px-6"
              >
                <p className="font-syne text-3xl font-bold tabular-nums text-[var(--color-foreground)]">{item.value}</p>
                <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-foreground)]">
                  {item.label}
                </p>
                <p className={`mt-2 flex-1 text-xs leading-relaxed ${NEU.bodyText}`}>{item.detail}</p>
                <ArrowUpRight
                  className="mt-4 h-4 w-4 text-[var(--color-foreground-faint)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-foreground-soft)]"
                  aria-hidden
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
