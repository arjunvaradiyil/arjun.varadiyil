import Banner from '../../components/Home/Banner';
import HomeCta from '../../components/Home/HomeCta';
import HomeFeaturedProjects from '../../components/Home/HomeFeaturedProjects';
import HomeIntro from '../../components/Home/HomeIntro';
import HomeServices from '../../components/Home/HomeServices';
import MaintenanceScreen from '../../components/MaintenanceScreen';
import PageStructuredData from '../../components/PageStructuredData';
import ZeroClickFaq from '../../components/ZeroClickFaq';
import { getProjects, getSkills } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';
import { buildFaqPageSchema } from '../../lib/zeroClickSeo';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TITLE_DEFAULT, absoluteUrl } from '../../lib/siteSeo';

export const revalidate = 60;

export const metadata = {
  title: SITE_TITLE_DEFAULT,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: absoluteUrl('/'),
    title: SITE_TITLE_DEFAULT,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/assets/images/arjunvaradiyil.jpeg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Full Stack Developer in Kerala`,
      },
    ],
  },
};

export default async function HomePage() {
  if (isMaintenanceMode()) {
    return <MaintenanceScreen />;
  }

  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  return (
    <>
      <PageStructuredData schemas={buildFaqPageSchema()} />
      <div className="overflow-x-hidden bg-[var(--color-surface)]">
        <Banner />
        <div id="home-content">
          <HomeIntro />
          <HomeFeaturedProjects projects={projects} />
          <HomeServices skills={skills} />
          <ZeroClickFaq />
          <HomeCta />
        </div>
      </div>
    </>
  );
}
