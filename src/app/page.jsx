'use client';

import React from 'react';
import Banner from '../components/Home/Banner';
import { NEU } from '../components/ui/neuTheme';

export default function HomePage() {
  return (
    <div className={NEU.pageShell}>
      <Banner />
    </div>
  );
}
