'use client';

import { NEU } from '../ui/neuTheme';

/** Three-line mini case study: problem → built → impact. */
export default function ProjectCaseStudyLines({ project, className = '', compact = false }) {
  const rows = [
    { key: 'problem', label: 'Problem', text: project?.problem },
    { key: 'built', label: 'Built', text: project?.solution },
    { key: 'impact', label: 'Impact', text: project?.impact },
  ].filter((row) => row.text);

  if (!rows.length) return null;

  const textClass = compact ? 'line-clamp-2' : '';

  return (
    <dl className={`space-y-2.5 ${className}`}>
      {rows.map((row) => (
        <div key={row.key} className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-0.5 sm:grid-cols-[5rem_1fr]">
          <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)]">
            {row.label}
          </dt>
          <dd
            className={`text-sm leading-snug ${textClass} ${
              row.key === 'impact' ? 'font-medium text-[var(--color-foreground)]' : NEU.bodyText
            }`}
          >
            {row.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}
