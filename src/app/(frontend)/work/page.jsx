import { getProjects, getSiteSettings } from '../../../lib/cms/content';
import ProjectsPageClient from '../projects/ProjectsPageClient';

export const revalidate = 60;

export const metadata = {
  title: 'Work',
  description:
    'Selected production builds — Next.js and Payload CMS for festivals, Malayalam & Telugu newsrooms, and civic tools.',
  alternates: {
    canonical: '/work',
  },
};

export default async function WorkPage() {
  const [projects, site] = await Promise.all([getProjects(), getSiteSettings()]);

  return (
    <ProjectsPageClient
      projects={projects}
      description={site.projectsPageDescription}
    />
  );
}
