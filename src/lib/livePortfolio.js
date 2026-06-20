import { isInDevelopmentProject, isLiveProject } from './projectStatus';

const INDUSTRY_SHORT = {
  'Arts & Culture': 'Culture',
  'News & Media': 'News',
  Healthcare: 'Healthcare',
  'Civic Tech': 'Civic',
  'Education & Civic': 'Education',
  'Education & AI Literacy': 'Campaigns',
};

function industryLabel(project) {
  return INDUSTRY_SHORT[project.industry] || project.industry;
}

/** Summarise live and in-development projects from portfolio data. */
export function summarizeLiveProjects(projects = []) {
  const live = projects.filter((project) => isLiveProject(project));
  const inDevelopment = projects.filter((project) => isInDevelopmentProject(project));

  const liveTypes = [...new Set(live.map(industryLabel).filter(Boolean))];
  const inDevTypes = [...new Set(inDevelopment.map(industryLabel).filter(Boolean))];

  const liveCount = live.length;
  const buildsLabel =
    liveCount === 0
      ? 'No public live URLs yet'
      : `${liveCount} ${liveCount === 1 ? 'site' : 'sites'} in production`;

  const detailParts = [...liveTypes];
  if (inDevTypes.length > 0) {
    detailParts.push(`${inDevTypes.join(' · ')} in development`);
  }

  return {
    count: liveCount,
    inDevelopmentCount: inDevelopment.length,
    typesLabel: detailParts.join(' · '),
    buildsLabel,
    displayLabel: liveTypes.length > 0 ? liveTypes.join(' · ') : buildsLabel,
  };
}
