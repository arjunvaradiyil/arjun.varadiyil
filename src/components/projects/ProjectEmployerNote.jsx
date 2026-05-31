'use client';

import { NEU } from '../ui/neuTheme';

/** Optional employer attribution — only shown when employer is explicitly set. */
export default function ProjectEmployerNote({ employer, role, className = '' }) {
  if (!employer) return null;

  const parts = [employer];
  if (role) parts.push(role);

  return (
    <p className={`font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-foreground-subtle)] ${className}`}>
      {parts.join(' · ')}
    </p>
  );
}
