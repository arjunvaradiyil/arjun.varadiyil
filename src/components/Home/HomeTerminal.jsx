'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { TERMINAL_COMMANDS } from '../../data/proof';
import { EASE_OUT } from '../../lib/motion';

function useTypewriter(text, active, speed = 22) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setDisplay('');
      indexRef.current = 0;
      return;
    }

    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    setDisplay('');
    indexRef.current = 0;

    const id = window.setInterval(() => {
      indexRef.current += 1;
      setDisplay(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, active, speed, reduceMotion]);

  return display;
}

export default function HomeTerminal() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const active = TERMINAL_COMMANDS[activeIndex];
  const output = useTypewriter(active?.output ?? '', typing);

  const runCommand = useCallback((index) => {
    setTyping(false);
    setActiveIndex(index);
    requestAnimationFrame(() => setTyping(true));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => {
        const next = (i + 1) % TERMINAL_COMMANDS.length;
        setTyping(false);
        requestAnimationFrame(() => setTyping(true));
        return next;
      });
    }, 6000);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`} aria-label="Live project stats terminal">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
        <Reveal>
          <p className={NEU.eyebrow}>Interactive</p>
          <h2 className={`mt-3 ${NEU.display} text-3xl md:text-4xl`}>See the proof, not just the pitch</h2>
          <p className={`mt-4 max-w-md ${NEU.bodyText}`}>
            Real production stats from my stack — click a command or let it cycle. Same CMS architecture I
            ship for biennale, news, and civic clients.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" aria-hidden />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]">
                arjun@portfolio ~ live-stats
              </span>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] px-4 py-3">
              {TERMINAL_COMMANDS.map((item, i) => (
                <button
                  key={item.cmd}
                  type="button"
                  onClick={() => runCommand(i)}
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] transition ${
                    i === activeIndex
                      ? 'bg-[var(--color-primary-bg)] px-2 py-1 text-[var(--color-primary-fg)]'
                      : 'text-[var(--color-foreground-subtle)] hover:text-[var(--color-foreground)]'
                  }`}
                >
                  {item.cmd}
                </button>
              ))}
            </div>

            <div className="min-h-[11rem] px-4 py-5 font-mono text-sm leading-relaxed sm:min-h-[12rem] sm:px-5 sm:text-[13px]">
              <p className="text-[var(--color-foreground-soft)]">
                <span className="text-emerald-400/90">➜</span>{' '}
                <span className="text-[var(--color-foreground-muted)]">~</span> {active?.cmd}
              </p>
              <motion.pre
                key={`${activeIndex}-${typing}`}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                className="mt-4 whitespace-pre-wrap text-[var(--color-foreground)]"
              >
                {output}
                {!reduceMotion && typing && output.length < (active?.output?.length ?? 0) ? (
                  <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[var(--color-foreground)] align-middle" aria-hidden />
                ) : null}
              </motion.pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
