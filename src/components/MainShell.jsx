'use client';

import { usePathname } from 'next/navigation';
import { isRajanPage } from '../lib/rajanPages';
import PageTransition from './layout/PageTransition';

export default function MainShell({ children, maintenance = false }) {
  const pathname = usePathname();
  const rajan = isRajanPage(pathname);

  let padding = 'pt-[4.75rem] sm:pt-[5rem]';
  if (maintenance || rajan) {
    padding = 'pt-0';
  }

  return (
    <main className={`${maintenance ? 'min-h-[100svh]' : 'min-h-[60vh]'} bg-transparent ${padding}`}>
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
