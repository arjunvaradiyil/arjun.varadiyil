'use client';

import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import { useSiteSettings } from '../../../components/SiteSettingsProvider';
import { SITE_EMAIL } from '../../../lib/siteSeo';

export default function ContactPage() {
  const { profile } = useSiteSettings();
  const email = profile?.email || SITE_EMAIL;

  return (
    <EditorialShell showGrid={false}>
      <LetsBuildSection as="header" email={email} animatePath headingAs="h1" className="pt-8" />
    </EditorialShell>
  );
}
