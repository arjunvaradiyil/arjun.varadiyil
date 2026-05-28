import Banner from '../../components/Home/Banner';
import HomeCta from '../../components/Home/HomeCta';
import HomeFeaturedProjects from '../../components/Home/HomeFeaturedProjects';
import HomeServices from '../../components/Home/HomeServices';
import { getProjects, getSkills } from '../../lib/cms/content';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  return (
    <div className="overflow-x-hidden bg-[#050505]">
      <Banner />
      <div id="home-content">
        <HomeFeaturedProjects projects={projects} />
        <HomeServices skills={skills} />
        <HomeCta />
      </div>
    </div>
  );
}
