import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import { notFound } from 'next/navigation';

interface SectionPageProps {
  params: Promise<{
    section: string;
  }>;
}

const sections = {
  about: About,
  experience: Experience,
  education: Education,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  contact: Contact,
};

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const SectionComponent = sections[section as keyof typeof sections];

  if (!SectionComponent) {
    notFound();
  }

  return (
    <main className="pt-20">
      <SectionComponent />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(sections).map((section) => ({
    section,
  }));
} 