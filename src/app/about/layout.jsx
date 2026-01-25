export const metadata = {
  title: 'About | Arjun Varadiyil',
  description: 'Arjun Varadiyil - Professional Web Developer & Web Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack. View portfolio, experience, and certifications.',
  keywords: [
    'Web Developer Kerala', 'Web Designer Kerala', 'Web Developer Kochi', 'Web Developer Perinthalmanna',
    'Freelance Web Developer Kerala', 'Best Web Developer Kerala', 'Full Stack Developer Kerala',
    'MERN Stack Developer Kerala', 'React Developer Kerala', 'Node.js Developer Kerala',
    'Professional Web Developer', 'Web Development Services Kerala', 'Arjun Varadiyil'
  ],
  openGraph: {
    title: 'Arjun Varadiyil',
    description: 'Professional Web Developer & Web Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack.',
    url: 'https://arjunvaradiyil.in/about',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arjun Varadiyil',
    description: 'Professional Web Developer & Web Designer in Kerala. Freelance Full Stack Developer specializing in MERN stack.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }) {
  return children;
}
