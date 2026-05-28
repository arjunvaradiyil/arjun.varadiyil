'use client';

import React from 'react';
import Contactform from '../../../components/Contactform';
import { PAGE } from '../../../components/ui/neuTheme';

export default function ContactPage() {
  return (
    <div className={`${PAGE.shell} overflow-x-hidden`}>
      <Contactform pageHero />
    </div>
  );
}
