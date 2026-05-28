import { getProjects, getSiteSettings } from '../../../lib/cms/content';
import ProjectsPageClient from './ProjectsPageClient';

export const revalidate = 60;

export default async function ProjectsPage() {
  const [projects, site] = await Promise.all([getProjects(), getSiteSettings()]);

  return (
    <ProjectsPageClient
      projects={projects}
      description={site.projectsPageDescription}
    />
  );
}
