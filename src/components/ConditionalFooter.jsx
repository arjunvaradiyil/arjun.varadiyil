'use client';

import { usePathname } from 'next/navigation';
import { isRajanPage } from '../lib/rajanPages';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (isRajanPage(pathname)) return null;
  return <Footer />;
}
