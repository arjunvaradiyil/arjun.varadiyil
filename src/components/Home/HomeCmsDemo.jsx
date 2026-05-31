'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Radio } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { EASE_OUT } from '../../lib/motion';

const FLOW_STEPS = [
  { id: 'editor', label: 'Payload Admin', sub: 'Editor hits publish' },
  { id: 'api', label: 'CMS API', sub: 'GraphQL / REST' },
  { id: 'next', label: 'Next.js', sub: 'ISR revalidate' },
  { id: 'reader', label: 'Readers', sub: 'Live in seconds' },
];

const ACTIVITY_POOL = [
  { project: 'Deshabhimani', action: 'Breaking story published', ms: '1.1s revalidate' },
  { project: 'Biennale', action: 'Artist profile updated', ms: '0.9s revalidate' },
  { project: 'Deshabhimani', action: 'Photo gallery block saved', ms: '1.3s revalidate' },
  { project: 'Biennale', action: 'Programme schedule pushed live', ms: '1.0s revalidate' },
  { project: 'News portal', action: 'Homepage hero swapped', ms: '0.8s revalidate' },
  { project: 'Biennale', action: 'Exhibition page published', ms: '1.2s revalidate' },
];

export default function HomeCmsDemo() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [publishes, setPublishes] = useState(1284);
  const [running, setRunning] = useState(false);
  const [feed, setFeed] = useState(ACTIVITY_POOL.slice(0, 3));
  const runningRef = useRef(false);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  const runPublish = useCallback(() => {
    if (runningRef.current) return;
    setRunning(true);
    setActiveStep(0);

    const delays = [0, 450, 900, 1350];
    delays.forEach((delay, i) => {
      window.setTimeout(() => setActiveStep(i), delay);
    });

    window.setTimeout(() => {
      setPublishes((n) => n + 1);
      const event = ACTIVITY_POOL[Math.floor(Math.random() * ACTIVITY_POOL.length)];
      setFeed((prev) => [event, ...prev].slice(0, 5));
      setRunning(false);
      setActiveStep(0);
    }, 1800);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (runningRef.current) return;
      const event = ACTIVITY_POOL[Math.floor(Math.random() * ACTIVITY_POOL.length)];
      setFeed((prev) => [event, ...prev].slice(0, 5));
    }, 5000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}
      aria-label="Live CMS architecture demo"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className={NEU.eyebrow}>Live demo</p>
            <h2 className={`mt-3 ${NEU.display} text-3xl md:text-4xl`}>
              This is how your editorial stack should work
            </h2>
            <p className={`mt-4 ${NEU.bodyText}`}>
              Click publish to simulate what I ship — editor action to live page, no redeploy. The same
              Payload → Next.js pipeline powers biennale and newsroom clients in production.
            </p>
          </div>
          <Link href="/projects" className={`inline-flex shrink-0 items-center gap-2 ${NEU.link}`}>
            See production outcomes
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Architecture flow */}
          <Reveal className="bg-[var(--color-surface)] p-5 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className={NEU.eyebrow}>Architecture</p>
                <p className="mt-1 font-syne text-lg font-bold text-[var(--color-foreground)]">
                  Editor → API → Next.js → Reader
                </p>
              </div>
              <button
                type="button"
                onClick={runPublish}
                disabled={running}
                className={`${NEU.btnPrimary} disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {running ? 'Publishing…' : 'Simulate publish'}
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {FLOW_STEPS.map((step, i) => {
                const lit = running && activeStep >= i;
                return (
                  <div key={step.id} className="relative">
                    <motion.div
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              borderColor: lit ? 'var(--color-foreground)' : 'var(--color-border)',
                              backgroundColor: lit ? 'var(--color-hover)' : 'var(--color-surface)',
                            }
                      }
                      className="border px-3 py-4 sm:px-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-subtle)]">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 font-syne text-sm font-bold text-[var(--color-foreground)]">{step.label}</p>
                      <p className="mt-1 text-[10px] text-[var(--color-foreground-muted)]">{step.sub}</p>
                    </motion.div>
                    {i < FLOW_STEPS.length - 1 ? (
                      <motion.span
                        className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 -translate-y-1/2 bg-[var(--color-border-strong)] sm:block"
                        animate={lit && activeStep > i ? { scaleX: 1, opacity: 1 } : { scaleX: 0.3, opacity: 0.4 }}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)]">
              <div className="bg-[var(--color-surface)] px-4 py-4">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-subtle)]">
                  Simulated publishes
                </dt>
                <dd className="mt-1 font-syne text-2xl font-bold tabular-nums">{publishes.toLocaleString()}</dd>
              </div>
              <div className="bg-[var(--color-surface)] px-4 py-4">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-subtle)]">
                  Avg. go-live
                </dt>
                <dd className="mt-1 font-syne text-2xl font-bold tabular-nums">&lt;1.5s</dd>
              </div>
              <div className="bg-[var(--color-surface)] px-4 py-4">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-subtle)]">
                  Redeploys needed
                </dt>
                <dd className="mt-1 font-syne text-2xl font-bold tabular-nums">0</dd>
              </div>
            </dl>
          </Reveal>

          {/* Activity feed */}
          <Reveal delay={0.08} className="flex flex-col bg-[var(--color-surface)] p-5 sm:p-8">
            <div className="mb-4 flex items-center gap-2">
              <Radio className="h-4 w-4 text-emerald-400/90" aria-hidden />
              <p className={NEU.eyebrow}>Editorial activity</p>
              <span className="ml-auto font-mono text-[10px] text-emerald-400/80">live</span>
            </div>
            <ul className="flex flex-1 flex-col gap-2" aria-live="polite" aria-relevant="additions">
              <AnimatePresence initial={false} mode="popLayout">
                {feed.map((item, i) => (
                  <motion.li
                    key={`${item.project}-${item.action}-${i}`}
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="border border-[var(--color-border)] px-3 py-3"
                  >
                    <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]">
                      {item.project}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-foreground)]">{item.action}</p>
                    <p className="mt-1 font-mono text-[10px] text-emerald-400/80">{item.ms}</p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <p className={`mt-4 text-[10px] leading-relaxed ${NEU.bodyText}`}>
              Simulated events based on real Payload CMS workflows from shipped news &amp; biennale platforms.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
