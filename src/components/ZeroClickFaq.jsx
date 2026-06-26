'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_FAQ, ZERO_CLICK_SUMMARY } from '../lib/zeroClickSeo';
import { NEU } from './ui/neuTheme';

export default function ZeroClickFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className={`${NEU.section} ${NEU.sectionPad} border-t border-[var(--color-border)]`}
      aria-labelledby="zero-click-faq-heading"
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className={`text-center ${NEU.eyebrow}`}>Quick answers</p>
        <h2
          id="zero-click-faq-heading"
          className={`mt-3 text-center ${NEU.display} text-3xl sm:text-4xl`}
        >
          Frequently asked questions
        </h2>

        <p className={`zero-click-summary mt-6 text-center text-lg leading-relaxed ${NEU.bodyText}`}>
          {ZERO_CLICK_SUMMARY}
        </p>

        <dl className="mt-10 space-y-3">
          {SITE_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;

            return (
              <div key={item.question} className={`${NEU.cardStatic} overflow-hidden`}>
                <dt className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-syne text-base font-bold text-[var(--color-foreground)] transition hover:bg-[var(--color-hover)] sm:text-lg"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[var(--color-foreground-muted)] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`zero-click-faq-answer m-0 grid border-t border-[var(--color-border)] transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-5 py-4 text-base leading-relaxed ${NEU.bodyText}`}>{item.answer}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
