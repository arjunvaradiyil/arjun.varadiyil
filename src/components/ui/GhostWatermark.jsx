'use client';

import { NEU } from './neuTheme';

export default function GhostWatermark({ children, className = '', as: Tag = 'p' }) {
  return (
    <Tag className={`ghost-watermark ${NEU.displayGhost} ${className}`.trim()} aria-hidden>
      {children}
    </Tag>
  );
}
