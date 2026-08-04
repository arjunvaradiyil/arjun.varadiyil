'use client';

import { usePathname } from 'next/navigation';
import { isEditorialPage } from '../lib/editorialPages';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (isEditorialPage(pathname)) return null;
  return <Footer />;
}
