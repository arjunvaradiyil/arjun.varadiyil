'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { NEU } from '../ui/neuTheme';

const SKILL_HREF_FALLBACKS = ['/about', '/projects', '/projects', '/about'];

export default function ServiceNeuGrid({ skills }) {
  return (
    <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2 xl:grid-cols-4">
      {skills.map((service, i) => {
        const blurb = service.cardBlurb ?? service.description;

        return (
          <article
            key={service.id}
            data-gsap="reveal"
            className="bg-[var(--color-surface)]"
          >
            <Link
              href={service.href || SKILL_HREF_FALLBACKS[i] || '/about'}
              className="group flex h-full flex-col p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className={NEU.sectionIndex}>{service.id}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[var(--color-foreground-faint)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-foreground-soft)]"
                  aria-hidden
                />
              </div>
              <h3 className={`mt-4 ${NEU.display} text-lg sm:text-xl`}>{service.title}</h3>
              <p className={`mt-3 flex-1 text-sm ${NEU.bodyText}`}>{blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.slice(0, 4).map((tag, tagIndex) => (
                  <li key={`${service.id}-${tagIndex}-${tag}`} className={NEU.techTag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
