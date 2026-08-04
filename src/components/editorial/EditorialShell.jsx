'use client';

import BackgroundGrid from './BackgroundGrid';
import BottomPillNav from './BottomPillNav';

/** White editorial shell shared by home + About / Work / Contact / detail pages. */
export default function EditorialShell({ children, showGrid = true, className = '' }) {
  return (
    <div
      className={`light relative min-h-screen overflow-x-hidden bg-white font-body text-black selection:bg-black selection:text-white ${className}`}
    >
      {showGrid ? <BackgroundGrid /> : null}
      <BottomPillNav />
      <div className="relative z-10 pb-28">{children}</div>
    </div>
  );
}
