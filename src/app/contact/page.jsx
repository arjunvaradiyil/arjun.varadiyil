'use client';

import React from 'react';
import Contactform from '../../components/Contactform';
import { NEU } from '../../components/ui/neuTheme';

export default function ContactPage() {
  return (
    <div className={`${NEU.contactBg} min-h-screen ${NEU.pageShell}`}>
      <Contactform pageHero />
    </div>
  );
}
