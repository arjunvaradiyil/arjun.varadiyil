import { getExperience, getSiteSettings } from '../../../lib/cms/content';
import ExperiencePageClient from './ExperiencePageClient';

export const revalidate = 60;

export const metadata = {
  title: 'Experience',
  description:
    'AI Engineer & Full Stack Developer experience — Payload CMS, Next.js, LangChain, and production delivery at Faircode Infotech.',
  alternates: {
    canonical: '/experience',
  },
};

export default async function ExperiencePage() {
  const [experience, site] = await Promise.all([getExperience(), getSiteSettings()]);

  return (
    <ExperiencePageClient
      experience={experience}
      experienceIntro={site.experienceIntro}
    />
  );
}
