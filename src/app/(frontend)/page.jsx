import Banner from '../../components/Home/Banner';
import HomeCta from '../../components/Home/HomeCta';
import HomeFeaturedProjects from '../../components/Home/HomeFeaturedProjects';
import HomeIntro from '../../components/Home/HomeIntro';
import HomeServices from '../../components/Home/HomeServices';
import MaintenanceScreen from '../../components/MaintenanceScreen';
import { getProjects, getSkills } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';

export const revalidate = 60;

export default async function HomePage() {
  if (isMaintenanceMode()) {
    return <MaintenanceScreen />;
  }

  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  return (
    <div className="overflow-x-hidden bg-[var(--color-surface)]">
      <Banner />
      <div id="home-content">
        <HomeIntro />
        <HomeFeaturedProjects projects={projects} />
        <HomeServices skills={skills} />
        <HomeCta />
      </div>
    </div>
  );
}
