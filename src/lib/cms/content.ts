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
import { getPayloadClient } from './getPayload';
import {
  mapCertification,
  mapEducation,
  mapExperience,
  mapProject,
  mapSiteSettings,
  mapSkill,
} from './mappers';

export function isCmsConfigured() {
  return Boolean(process.env.DATABASE_URI?.trim() && process.env.PAYLOAD_SECRET?.trim());
}

function staticSiteSettings() {
  return {
    profile: { ...staticProfile, photo: '/arjunvaradiyil.png' },
    professionalSummary: staticSummary,
    workStatus: staticWorkStatus,
    heroStats: staticHeroStats,
    navCategories: staticNav,
    projectsPageDescription:
      'News portals, biennale platform, and civic tech — Next.js, Payload CMS, and MERN stack.',
    aboutSkillsSubtitle:
      'Node.js, React, Next.js, Payload CMS, databases, and the tools I use to ship production-ready web products.',
    experienceIntro:
      'At Faircode Infotech I build biennale platforms, news portals, and civic tech — full-stack delivery with Next.js, Payload CMS, and modern databases.',
  };
}

export async function getSiteSettings() {
  if (!isCmsConfigured()) {
    return staticSiteSettings();
  }

  try {
    const payload = await getPayloadClient();
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

export async function getProjects() {
  if (!isCmsConfigured()) {
    return staticProjects;
  }

  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'projects',
      where: { published: { equals: true } },
      sort: 'sortOrder',
      limit: 100,
      depth: 1,
    });

    if (!docs.length) {
      return staticProjects;
    }

    return docs.map((doc) => mapProject(doc as Record<string, unknown>));
  } catch (error) {
    console.warn('[cms] projects fallback:', error);
    return staticProjects;
  }
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
  const fallback = staticProjects.map((p) => ({ slug: p.slug }));

  if (!isCmsConfigured()) {
    return fallback;
  }

  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'projects',
      where: { published: { equals: true } },
      sort: 'sortOrder',
      limit: 100,
      depth: 0,
    });

    if (!docs.length) {
      return fallback;
    }

    return docs.map((doc) => {
      const record = doc as Record<string, unknown>;
      const updatedAt = record.updatedAt;
      return {
        slug: String(record.slug ?? ''),
        lastModified:
          updatedAt instanceof Date
            ? updatedAt
            : updatedAt
              ? new Date(String(updatedAt))
              : undefined,
      };
    });
  } catch (error) {
    console.warn('[cms] sitemap projects fallback:', error);
    return fallback;
  }
}

export async function getExperience() {
  if (!isCmsConfigured()) {
    return staticExperience;
  }

  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'experience',
      sort: 'sortOrder',
      limit: 50,
      depth: 1,
    });

    if (!docs.length) {
      return staticExperience;
    }

    return docs.map((doc) => mapExperience(doc as Record<string, unknown>));
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
    const payload = await getPayloadClient();
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
    const payload = await getPayloadClient();
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
    const payload = await getPayloadClient();
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
