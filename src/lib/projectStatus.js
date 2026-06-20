export const PROJECT_STATUS = {
  LIVE: 'live',
  IN_DEVELOPMENT: 'in-development',
};

export function getProjectStatus(project) {
  if (project?.status === PROJECT_STATUS.IN_DEVELOPMENT) {
    return PROJECT_STATUS.IN_DEVELOPMENT;
  }
  if (project?.previewLink) {
    return PROJECT_STATUS.LIVE;
  }
  return null;
}

export function isLiveProject(project) {
  return getProjectStatus(project) === PROJECT_STATUS.LIVE;
}

export function isInDevelopmentProject(project) {
  return getProjectStatus(project) === PROJECT_STATUS.IN_DEVELOPMENT;
}

export function projectSiteLinkLabel(project) {
  return isInDevelopmentProject(project) ? 'In development' : 'Live site';
}
