'use client';

import React, { useEffect, useState } from 'react';
import Certifications from '../../components/About/Certifications';
import Contactform from '../../components/Contactform';
import { NEU } from '../../components/ui/neuTheme';
import { getCertificationsForFrontend } from '../../lib/cms';

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    let active = true;
    getCertificationsForFrontend().then((data) => {
      if (active) setCertifications(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={`${NEU.pageShell} overflow-hidden text-gray-900 dark:text-gray-100`}>
      <Certifications items={certifications} />
      {certifications.length === 0 ? (
        <div className='mx-auto mb-8 max-w-4xl px-6 text-center'>
          <p className={`${NEU.bodyText}`}>No certifications found in CMS.</p>
        </div>
      ) : null}
      <Contactform />
    </div>
  );
}
