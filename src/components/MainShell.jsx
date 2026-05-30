'use client';

import { usePathname } from 'next/navigation';
import PageTransition from './layout/PageTransition';

export default function MainShell({ children, maintenance = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  let padding = 'pt-[4.75rem] sm:pt-[5rem]';
  if (maintenance) {
    padding = 'pt-[4.25rem]';
  } else if (isHome) {
    padding = 'pt-0';
  }

  return (
    <main className={`min-h-[60vh] bg-transparent ${padding}`}>
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
