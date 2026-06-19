import Banner from '../../components/Home/Banner';
import HomeFeaturedProjects from '../../components/Home/HomeFeaturedProjects';
import MaintenanceScreen from '../../components/MaintenanceScreen';
import { getProjects } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';
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
        url: '/assets/images/profilepic.png',
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

  const projects = await getProjects();

  return (
    <div className="overflow-x-hidden bg-[var(--color-surface)]">
      <Banner />
      <div id="home-content">
        <HomeFeaturedProjects projects={projects} />
      </div>
    </div>
  );
}
