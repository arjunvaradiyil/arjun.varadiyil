/** Employer & portfolio copy. */

export const EMPLOYER = 'Faircode Infotech Pvt Ltd';
export const EMPLOYER_SHORT = 'Faircode Infotech';
export const ROLE_TITLE = 'Full Stack Developer';
export const ROLE_AT_EMPLOYER = `Full Stack Developer @ ${EMPLOYER_SHORT}`;
export const LOCATION = 'Kerala, India';
export const ROLE_EYEBROW = EMPLOYER_SHORT;

/** Project slugs omitted from the homepage featured section (still on /projects). */
export const HIDDEN_FROM_HOME_SLUGS = ['prajasakti-news-portal', 'homoeopathic-clinic-melattur'];

/** When true, projects tagged with employer field are hidden from the public portfolio. */
export const HIDE_EMPLOYER_PROJECTS = true;

export const PORTFOLIO_NOTE =
  'Selected work on this site. For inquiries, use contact or LinkedIn.';

export function isEmployerProject(project) {
  if (!project?.employer) return false;
  const employer = String(project.employer).toLowerCase();
  return employer.includes('faircode');
}

export function filterPublicProjects(projects) {
  if (!HIDE_EMPLOYER_PROJECTS) return projects ?? [];
  return (projects ?? []).filter((project) => !isEmployerProject(project));
}
