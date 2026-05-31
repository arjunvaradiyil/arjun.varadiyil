'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { GITHUB_USERNAME, TRUST_METRICS } from '../../data/proof';

export default function HomeTrust() {
  const [github, setGithub] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/github')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setGithub(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`} aria-label="Trust signals">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className={NEU.eyebrow}>Trust signals</p>
          <h2 className={`mt-3 ${NEU.display} text-3xl md:text-4xl`}>Built for results you can verify</h2>
          <p className={`mt-4 ${NEU.bodyText}`}>
            Production metrics, open-source activity, and performance scores — not vague skill lists.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Reveal className="bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-[var(--color-foreground)]" aria-hidden />
              <p className={NEU.eyebrow}>GitHub activity</p>
            </div>
            {github ? (
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">
                    Public repositories
                  </dt>
                  <dd className="mt-1 font-syne text-3xl font-bold tabular-nums">{github.publicRepos}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">
                    Followers
                  </dt>
                  <dd className="mt-1 font-syne text-2xl font-bold tabular-nums">{github.followers}</dd>
                </div>
              </dl>
            ) : (
              <p className={`mt-6 ${NEU.bodyText}`}>Loading public GitHub stats…</p>
            )}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer me"
              className={`mt-8 inline-flex items-center gap-2 ${NEU.link}`}
            >
              github.com/{GITHUB_USERNAME}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </Reveal>

          <StaggerReveal as="ul" className="grid gap-px bg-[var(--color-grid-line)] sm:grid-cols-2">
            {TRUST_METRICS.map((item) => (
              <StaggerItem key={item.label} as="li" className="bg-[var(--color-surface)] px-6 py-6 sm:px-8">
                <p className="font-syne text-2xl font-bold tabular-nums text-[var(--color-foreground)]">{item.value}</p>
                <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-foreground)]">
                  {item.label}
                </p>
                <p className={`mt-2 text-xs leading-relaxed ${NEU.bodyText}`}>{item.note}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <Reveal className="mt-8" delay={0.1}>
          <p className={`text-center text-xs ${NEU.bodyText}`}>
            Want references from project teams?{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:text-[var(--color-foreground)]">
              Ask on your intro call
            </Link>
            — happy to connect you with colleagues from shipped work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
