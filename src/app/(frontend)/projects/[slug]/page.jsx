import { getProjectBySlug, getProjects } from '../../../../lib/cms/content';
import ProjectDetailClient from './ProjectDetailClient';

export const revalidate = 60;

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const [projects, project] = await Promise.all([getProjects(), getProjectBySlug(slug)]);

  return <ProjectDetailClient slug={slug} projects={projects} project={project} />;
}
