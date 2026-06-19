'use client';

import React from 'react';
import Certifications from '../../../components/About/Certifications';
import PageHeader from '../../../components/layout/PageHeader';
import PageShell from '../../../components/layout/PageShell';
import { PAGE } from '../../../components/ui/neuTheme';

export default function CertificationsPageClient({ certifications = [] }) {
  return (
    <div className={PAGE.shell}>
      <PageShell className="!pb-0">
        <PageHeader index="03" eyebrow="Certifications" title="Certifications" />
      </PageShell>
      <Certifications showHeader={false} certifications={certifications} />
    </div>
  );
}
