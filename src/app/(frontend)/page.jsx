import dynamic from 'next/dynamic';
import Banner from '../../components/Home/Banner';
import HomeFeaturedProjects from '../../components/Home/HomeFeaturedProjects';
import HomeLatestBlog from '../../components/Home/HomeLatestBlog';
import HomeSeoCopy from '../../components/Home/HomeSeoCopy';
import MaintenanceScreen from '../../components/MaintenanceScreen';
import { getProjects } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';
import {
  DEFAULT_DESCRIPTION,
  OG_DESCRIPTION,
  OG_TITLE,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  TWITTER_DESCRIPTION,
  absoluteUrl,
} from '../../lib/siteSeo';

const HomeIntro = dynamic(() => import('../../components/Home/HomeIntro'));
const ZeroClickFaq = dynamic(() => import('../../components/ZeroClickFaq'));

export const revalidate = 60;

export const metadata = {
  title: SITE_TITLE_DEFAULT,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    url: absoluteUrl('/'),
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/assets/images/profilepic.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Full Stack Developer in Kerala`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: TWITTER_DESCRIPTION,
    images: ['/assets/images/profilepic.png'],
  },
};

export default async function HomePage() {
  if (isMaintenanceMode()) {
    return <MaintenanceScreen />;
  }

  const projects = await getProjects();

  return (
    <div className="bg-[var(--color-surface)]">
      <Banner />
      <div id="home-content">
        <HomeFeaturedProjects projects={projects} />
        <HomeIntro />
        <HomeLatestBlog />
        <HomeSeoCopy />
        <ZeroClickFaq />
      </div>
    </div>
  );
}
