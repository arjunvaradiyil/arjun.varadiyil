import { getCertifications } from '../../../lib/cms/content';
import CertificationsPageClient from './CertificationsPageClient';

export const revalidate = 60;

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return <CertificationsPageClient certifications={certifications} />;
}
