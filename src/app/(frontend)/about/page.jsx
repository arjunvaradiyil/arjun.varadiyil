import {
  getCertifications,
  getEducation,
  getExperience,
  getSiteSettings,
  getSkills,
} from '../../../lib/cms/content';
import AboutPageClient from './AboutPageClient';

export const revalidate = 60;

export default async function AboutPage() {
  const [education, skills, experience, certifications, site] = await Promise.all([
    getEducation(),
    getSkills(),
    getExperience(),
    getCertifications(),
    getSiteSettings(),
  ]);

  return (
    <AboutPageClient
      education={education}
      skills={skills}
      experience={experience}
      certifications={certifications}
      profile={site.profile}
      professionalSummary={site.professionalSummary}
      aboutSkillsSubtitle={site.aboutSkillsSubtitle}
      experienceIntro={site.experienceIntro}
      workStatus={site.workStatus}
    />
  );
}
