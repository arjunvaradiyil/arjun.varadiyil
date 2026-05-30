'use client';

import { NEU } from '../ui/neuTheme';

export default function ServiceNeuGrid({ skills }) {
  return (
    <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)] sm:grid-cols-2 xl:grid-cols-4">
      {skills.map((service) => {
        const blurb = service.cardBlurb ?? service.description;

        return (
          <article
            key={service.id}
            data-gsap="reveal"
            className="flex h-full flex-col bg-[var(--color-surface)] p-6 sm:p-7"
          >
            <span className={NEU.sectionIndex}>{service.id}</span>
            <h3 className={`mt-4 ${NEU.display} text-lg sm:text-xl`}>{service.title}</h3>
            <p className={`mt-3 flex-1 text-sm ${NEU.bodyText}`}>{blurb}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.tags.slice(0, 4).map((tag) => (
                <li key={tag} className={NEU.techTag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
