'use client';

import React from 'react';
import Certifications from '../../../components/About/Certifications';
import Contactform from '../../../components/Contactform';
import PageHeader from '../../../components/layout/PageHeader';
import PageShell from '../../../components/layout/PageShell';
import { PAGE } from '../../../components/ui/neuTheme';

const DEFAULT_INTRO =
  'Professional certifications that validate my expertise in full-stack development and programming fundamentals.';

export default function CertificationsPageClient({ certifications = [], intro = DEFAULT_INTRO }) {
  return (
    <div className={PAGE.shell}>
      <PageShell className="!pb-0">
        <PageHeader index="03" eyebrow="Certifications" title="Certifications" description={intro} />
      </PageShell>
      <Certifications showHeader={false} certifications={certifications} />
      <Contactform />
    </div>
  );
}
