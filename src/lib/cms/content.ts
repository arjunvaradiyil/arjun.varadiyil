import { projects as staticProjects } from '../../data/projectData';
import { experienceData as staticExperience } from '../../data/experienceData';
import { skills as staticSkills } from '../../data/skills';
import { certifications as staticCertifications } from '../../data/certificationsData';
import {
  EDUCATION_TIMELINE as staticEducation,
  PROFILE as staticProfile,
  PROFESSIONAL_SUMMARY as staticSummary,
} from '../../data/aboutData';
import {
  HERO_STATS as staticHeroStats,
  NJR_NAV_CATEGORIES as staticNav,
  WORK_STATUS as staticWorkStatus,
} from '../../lib/njrTheme';
import { filterPublicProjects } from '../employment';
import { tryGetPayloadClient } from './getPayload';
import {
  mapCertification,
  mapEducation,
  mapExperience,
  mapProject,
  mapSiteSettings,
  mapSkill,
} from './mappers';

const PLACEHOLDER_PAYLOAD_SECRETS = [
  'replace-with-long-random-secret',
  'your-long-random-secret-here',
];

export function isCmsConfigured() {
  const db = process.env.DATABASE_URI?.trim();
  const secret = process.env.PAYLOAD_SECRET?.trim();

  if (!db || !secret) return false;
  if (process.env.CMS_ENABLED === 'false') return false;

  const secretLower = secret.toLowerCase();
  if (PLACEHOLDER_PAYLOAD_SECRETS.some((placeholder) => secretLower.includes(placeholder))) {
    return false;
  }

  return true;
}

async function getPayloadOrNull() {
  if (!isCmsConfigured()) return null;
  return tryGetPayloadClient();
}

function staticSiteSettings() {
  return {
    profile: { ...staticProfile, photo: '/assets/images/profilepic.png' },
    professionalSummary: staticSummary,
    workStatus: staticWorkStatus,
    heroStats: staticHeroStats,
    navCategories: staticNav,
    projectsPageDescription: '',
    aboutSkillsSubtitle: 'Frontend, backend, CMS, and deployment.',
    experienceIntro: 'Roles and delivery highlights.',
  };
}

export async function getSiteSettings() {
  if (!isCmsConfigured()) {
    return staticSiteSettings();
  }

  try {
    const payload = await getPayloadOrNull();
    if (!payload) return staticSiteSettings();

    const global = await payload.findGlobal({ slug: 'site-settings', depth: 1 });
    const mapped = mapSiteSettings(global as Record<string, unknown>);
    if (!mapped?.profile?.name) {
      return staticSiteSettings();
    }
    return {
      ...staticSiteSettings(),
      ...mapped,
      profile: { ...staticSiteSettings().profile, ...mapped.profile },
      workStatus: { ...staticSiteSettings().workStatus, ...mapped.workStatus },
      heroStats: mapped.heroStats?.length ? mapped.heroStats : staticSiteSettings().heroStats,
      navCategories: mapped.navCategories?.length
        ? mapped.navCategories
        : staticSiteSettings().navCategories,
    };
  } catch (error) {
    console.warn('[cms] site-settings fallback:', error);
    return staticSiteSettings();
  }
}

export type PortfolioProject = ReturnType<typeof mapProject>;

export async function getProjects(): Promise<PortfolioProject[]> {
  let projects: PortfolioProject[] = staticProjects as PortfolioProject[];

  if (isCmsConfigured()) {
    try {
      const payload = await getPayloadOrNull();
      if (payload) {
        const { docs } = await payload.find({
          collection: 'projects',
          where: { published: { equals: true } },
          sort: 'sortOrder',
          limit: 100,
          depth: 1,
        });

        if (docs.length) {
          projects = docs.map((doc) => mapProject(doc as Record<string, unknown>));
        }
      }
    } catch (error) {
      console.warn('[cms] projects fallback:', error);
    }
  }

  return filterPublicProjects(projects);
}

export async function getProjectBySlug(slug: string) {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

export type SitemapProject = {
  slug: string;
  lastModified?: Date;
};

export async function getProjectsForSitemap(): Promise<SitemapProject[]> {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function getExperience() {
  if (!isCmsConfigured()) {
    return staticExperience;
  }

  try {
    const payload = await getPayloadOrNull();
    if (!payload) return staticExperience;

    const { docs } = await payload.find({
      collection: 'experience',
      sort: 'sortOrder',
      limit: 50,
      depth: 1,
    });

    if (!docs.length) {
      return staticExperience;
    }

    const mapped = docs
      .map((doc) => mapExperience(doc as Record<string, unknown>))
      .filter((item) => item.company || item.role);

    return mapped.length ? mapped : staticExperience;
  } catch (error) {
    console.warn('[cms] experience fallback:', error);
    return staticExperience;
  }
}

export async function getSkills() {
  if (!isCmsConfigured()) {
    return staticSkills;
  }

  try {
    const payload = await getPayloadOrNull();
    if (!payload) return staticSkills;

    const { docs } = await payload.find({
      collection: 'skills',
      sort: 'sortOrder',
      limit: 50,
      depth: 1,
    });

    if (!docs.length) {
      return staticSkills;
    }

    return docs.map((doc) => mapSkill(doc as Record<string, unknown>));
  } catch (error) {
    console.warn('[cms] skills fallback:', error);
    return staticSkills;
  }
}

export async function getCertifications() {
  if (!isCmsConfigured()) {
    return staticCertifications;
  }

  try {
    const payload = await getPayloadOrNull();
    if (!payload) return staticCertifications;

    const { docs } = await payload.find({
      collection: 'certifications',
      sort: 'sortOrder',
      limit: 50,
      depth: 1,
    });

    if (!docs.length) {
      return staticCertifications;
    }

    return docs.map((doc) => mapCertification(doc as Record<string, unknown>));
  } catch (error) {
    console.warn('[cms] certifications fallback:', error);
    return staticCertifications;
  }
}

export async function getEducation() {
  if (!isCmsConfigured()) {
    return staticEducation;
  }

  try {
    const payload = await getPayloadOrNull();
    if (!payload) return staticEducation;

    const { docs } = await payload.find({
      collection: 'education',
      sort: 'sortOrder',
      limit: 20,
      depth: 1,
    });

    if (!docs.length) {
      return staticEducation;
    }

    return docs.map((doc) => mapEducation(doc as Record<string, unknown>));
  } catch (error) {
    console.warn('[cms] education fallback:', error);
    return staticEducation;
  }
}
