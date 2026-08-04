'use client';

import { usePathname } from 'next/navigation';
import { isEditorialPage } from '../lib/editorialPages';
import Navbar from './Navbar';

export default function SiteHeader({ maintenance = false }) {
  const pathname = usePathname();

  if (maintenance || isEditorialPage(pathname)) {
    return null;
  }

  return <Navbar />;
}
