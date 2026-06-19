import {
  getCertifications,
  getEducation,
  getExperience,
  getProjects,
  getSiteSettings,
  getSkills,
} from '../../../lib/cms/content';
import { summarizeLiveProjects } from '../../../lib/livePortfolio';
import AboutPageClient from './AboutPageClient';

export const revalidate = 60;

export default async function AboutPage() {
  const [education, skills, experience, certifications, projects, site] = await Promise.all([
    getEducation(),
    getSkills(),
    getExperience(),
    getCertifications(),
    getProjects(),
    getSiteSettings(),
  ]);

  const liveSummary = summarizeLiveProjects(projects);

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
      liveSummary={liveSummary}
    />
  );
}
