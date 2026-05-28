'use client';

import { createContext, useContext } from 'react';
import {
  HERO_STATS,
  NJR_NAV_CATEGORIES,
  WORK_STATUS,
} from '../lib/njrTheme';
import { PROFILE, PROFESSIONAL_SUMMARY } from '../data/aboutData';

const defaults = {
  profile: PROFILE,
  professionalSummary: PROFESSIONAL_SUMMARY,
  workStatus: WORK_STATUS,
  heroStats: HERO_STATS,
  navCategories: NJR_NAV_CATEGORIES,
  projectsPageDescription: '',
  aboutSkillsSubtitle: '',
  experienceIntro: '',
};

const SiteSettingsContext = createContext(defaults);

export default function SiteSettingsProvider({ value, children }) {
  const merged = value
    ? {
        ...defaults,
        ...value,
        profile: { ...defaults.profile, ...value.profile },
        workStatus: { ...defaults.workStatus, ...value.workStatus },
        heroStats: value.heroStats?.length ? value.heroStats : defaults.heroStats,
        navCategories: value.navCategories?.length ? value.navCategories : defaults.navCategories,
      }
    : defaults;

  return (
    <SiteSettingsContext.Provider value={merged}>{children}</SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
