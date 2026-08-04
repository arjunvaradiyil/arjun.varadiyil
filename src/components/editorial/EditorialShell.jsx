'use client';

import BackgroundGrid from './BackgroundGrid';
import BottomPillNav from './BottomPillNav';

/** Editorial shell shared by home + About / Work / Contact / detail pages. */
export default function EditorialShell({ children, showGrid = true, className = '' }) {
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-white font-body text-black transition-colors duration-300 selection:bg-black selection:text-white dark:bg-[#0a0a0a] dark:text-white dark:selection:bg-white dark:selection:text-black ${className}`}
    >
      {showGrid ? <BackgroundGrid /> : null}
      <BottomPillNav />
      <div className="relative z-10 pb-28">{children}</div>
    </div>
  );
}
