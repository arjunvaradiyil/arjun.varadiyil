'use client';

import { MotionIn } from '../ui/Reveal';
import { PAGE } from '../ui/neuTheme';

export default function PageShell({ children, className = '' }) {
  return (
    <div className={`${PAGE.shell} overflow-x-hidden ${className}`}>
      <MotionIn className={`${PAGE.inner} ${PAGE.sectionPad}`} variant="in" duration={0.45}>
        {children}
      </MotionIn>
    </div>
  );
}
