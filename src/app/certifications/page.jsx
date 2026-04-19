'use client';

import React from 'react';
import Certifications from '../../components/About/Certifications';
import Contactform from '../../components/Contactform';
import { NEU } from '../../components/ui/neuTheme';

export default function CertificationsPage() {
  return (
    <div className={`${NEU.pageShell} overflow-hidden text-gray-900 dark:text-gray-100`}>
      <Certifications />
      <Contactform />
    </div>
  );
}
