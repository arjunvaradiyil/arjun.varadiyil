/** Employer & portfolio-safe copy — align with employment terms. */

export const EMPLOYER = 'Faircode Infotech Pvt Ltd';
export const EMPLOYER_SHORT = 'Faircode Infotech';

/** When true, employer/client projects are excluded from the public portfolio. */
export const HIDE_EMPLOYER_PROJECTS = true;

export const PORTFOLIO_NOTE =
  'Professional portfolio — employer client work is not listed here. For inquiries, use contact or LinkedIn.';

export function isEmployerProject(project) {
  if (!project?.employer) return false;
  const employer = String(project.employer).toLowerCase();
  return employer.includes('faircode');
}

export function filterPublicProjects(projects) {
  if (!HIDE_EMPLOYER_PROJECTS) return projects ?? [];
  return (projects ?? []).filter((project) => !isEmployerProject(project));
}
