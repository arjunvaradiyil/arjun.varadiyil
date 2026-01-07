import image1 from "../assets/images/learnt.png";
import video2 from "../assets/images/design.webm";
import image3 from "../assets/images/vrv.png";
import image4 from "../assets/images/fitpeo.png";
import image5 from "../assets/images/ecart.png";
import video1 from "../assets/images/ikea.webm";
import image6 from "../assets/images/carelabs.png";
import image7 from "../assets/images/docApp.png";
import image8 from "../assets/images/movieApp.png";


export const projects = [
  {
    id: "008",
    title: "Carelabs",
    tagline: "Redesign and redevelopment of a multi-country corporate website with scalable CMS architecture.",
    description:
      "Carelabs is a professional training and lab-based learning platform. This project involved redesigning and rebuilding their existing website using Next.js and Tailwind CSS, with Strapi as the headless CMS. The platform was rebuilt to support large-scale content management and country-specific pages, while maintaining a consistent brand identity across regions.",
    year: "2025",
    timeline: "2 Months",
    services: "Frontend Development • CMS Architecture • Website Redesign",
    industry: "Education & Professional Training",
    services: [ "Next.js", "React", "Tailwind CSS","Framer Motion", "Strapi", "GraphQL","Apollo Client"],
    about:
      "For Carelabs, I worked on the complete redesign and redevelopment of their existing corporate website, rebuilding it from the ground up using Next.js, React, and Tailwind CSS. I was responsible for developing the entire frontend and integrating it with a Strapi headless CMS using GraphQL and Apollo Client. A major part of the project involved designing a scalable content architecture to support country-specific pages, where each country had its own content, navigation, and page structure while still maintaining a unified codebase and brand identity. To achieve this, I implemented dynamic routing and data-driven page rendering in Next.js, allowing content to be fully managed from Strapi without hardcoding pages. I also focused on performance optimization, responsive design, and clean component architecture to ensure maintainability and future scalability. The final outcome was a modern, fast, and flexible website that significantly improved content management, scalability, and overall user experience compared to the previous version.",
    challenges:
      "A major challenge was handling country-specific content within a single website. Each country had its own set of pages, navigation structure, and content requirements, all managed from the same CMS. Structuring Strapi to support this level of flexibility without duplicating content or complicating frontend logic was a key technical challenge.",
    solutions:
      "We redesigned the CMS architecture in Strapi using structured content types, relations, and dynamic zones to manage country-specific data efficiently. On the frontend, Next.js dynamic routing combined with GraphQL queries enabled seamless rendering of localized pages. Apollo Client handled optimized data fetching and caching, resulting in a scalable and maintainable solution.",
    image: image6,
    logo: "https://carelabs-khaki.vercel.app/_next/image?url=https%3A%2F%2Fstriking-pleasure-03fbdffa08.media.strapiapp.com%2Fcarelab_logo_7d51f198e5.png&w=640&q=75",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://carelabs-khaki.vercel.app/", 
    linkedinLink: "",  
  },
  {
    id: "002",
    title: "Design Declares UK",
    tagline: "A pixel-perfect, animated frontend clone built with React, SCSS, and Framer Motion.",
    description:
      "A high-fidelity frontend clone of the Design Declares UK website, focusing on pixel-perfect layouts, smooth animations, and responsive behavior. The project was developed as part of a company task, replicating the original design with close attention to spacing, typography, interactions, and scroll-based animations.",
    year: "2024",
    timeline: "Company Task",
    services: "Frontend Development • UI Engineering",
    industry: "Design & Sustainability",
    services: [ "React", "SCSS", "Framer Motion","React Router","Vercel"],
    about:
    "This project is a high-fidelity frontend clone of the Design Declares UK website, built using React, SCSS, and Framer Motion. I focused on achieving pixel-perfect layouts by closely matching the original design’s spacing, typography, and visual hierarchy across all sections. The site is content-heavy and includes multiple pages and country-specific variations, which I handled using reusable, props-driven components and React Router for navigation. Smooth scroll and reveal animations were implemented using Framer Motion to closely replicate the original interactions. The project was completed as part of a company task under time constraints, with a strong emphasis on UI accuracy, responsiveness, and clean component architecture. Pixel-perfect UI implementation and attention to detail were the core focus of this project.",
    challenges:
      "The primary challenge was achieving pixel-perfect accuracy across a content-heavy website with complex layouts and animations. The site included multiple sections, reusable components, and country-based pages, all of which needed to match the original design precisely across different screen sizes.",
    solutions:
      "I structured the UI using modular SCSS with a BEM-inspired approach and built reusable React components for sections like headers, footers, menus, country pages, and interactive elements. Framer Motion was used to implement smooth scroll-based and reveal animations, while React Router enabled multi-page navigation. Props-driven components allowed flexible styling and content variations for different country pages.",
    image: video2,
    logo: "https://via.placeholder.com/40x40",
    type: "video",
    gitLink: "https://github.com/GourinandhanaES/fitpeo-web",
  previewLink: "https://fitpeo-web.vercel.app/",
    linkedinLink: "", 
  },
  {
    id: "001",
    title: "Learnt Accademy",
    tagline: "A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.",
    description:
      "For Syncorp, we developed a comprehensive sales software suite featuring a custom CRM, call center tools, AI-driven automations, local payment integration, and a multilingual client portal.",
    year: "2024",
    timeline: "3 Months",
    services: "Website • Branding",
    industry: "E-learning",
    services: "Full Stack Development",
    about:
      "Learnt Academy is an e-learning platform focused on delivering structured, accessible education through modern digital experiences.",
    challenges:
      "The client had a strong product but lacked an online presence that reflected credibility and scalability. The existing layout lacked structure, clarity, and storytelling.",
    solutions:
      "We designed a clear, modular layout focused on storytelling, smooth scrolling, and concise content blocks. A scalable structure was introduced to support future expansion.",
    image: image1,
    logo: "https://learnt-accademy-frontend.vercel.app/assets/logoImg-BiGmV2N8.png",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "https://www.linkedin.com/in/your-linkedin-profile",  
  },
  {
    id: "008",
    title: "Document App",
    tagline: "A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.",
    description:
      "For Syncorp, we developed a comprehensive sales software suite featuring a custom CRM, call center tools, AI-driven automations, local payment integration, and a multilingual client portal.",
    year: "2024",
    timeline: "3 Months",
    services: "Website • Branding",
    industry: "E-learning",
    services: "Full Stack Development",
    about:
      "Learnt Academy is an e-learning platform focused on delivering structured, accessible education through modern digital experiences.",
    challenges:
      "The client had a strong product but lacked an online presence that reflected credibility and scalability. The existing layout lacked structure, clarity, and storytelling.",
    solutions:
      "We designed a clear, modular layout focused on storytelling, smooth scrolling, and concise content blocks. A scalable structure was introduced to support future expansion.",
    image: image7,
    logo: "https://carelabs-khaki.vercel.app/_next/image?url=https%3A%2F%2Fstriking-pleasure-03fbdffa08.media.strapiapp.com%2Fcarelab_logo_7d51f198e5.png&w=640&q=75",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Document-App", 
    previewLink: "https://document-app-six.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_react-materialui-firebase-activity-7274159169572597761-UIxG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5CXa8B49YpFztAnY0CrzmdiWnsXpFKE3g",  
  },
  {
    id: "008",
    title: "Movie Watchlist App",
    tagline: "A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.",
    description:
      "For Syncorp, we developed a comprehensive sales software suite featuring a custom CRM, call center tools, AI-driven automations, local payment integration, and a multilingual client portal.",
    year: "2024",
    timeline: "3 Months",
    services: "Website • Branding",
    industry: "E-learning",
    services: "Full Stack Development",
    about:
      "Learnt Academy is an e-learning platform focused on delivering structured, accessible education through modern digital experiences.",
    challenges:
      "The client had a strong product but lacked an online presence that reflected credibility and scalability. The existing layout lacked structure, clarity, and storytelling.",
    solutions:
      "We designed a clear, modular layout focused on storytelling, smooth scrolling, and concise content blocks. A scalable structure was introduced to support future expansion.",
    image: image8,
    logo: "https://carelabs-khaki.vercel.app/_next/image?url=https%3A%2F%2Fstriking-pleasure-03fbdffa08.media.strapiapp.com%2Fcarelab_logo_7d51f198e5.png&w=640&q=75",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://movie-watchlist-neon.vercel.app/", 
    linkedinLink: "",  
  },
  {
    id: "003",
    title: "RBAC Project",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI/UX + Backend",
    image: image3,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "https://www.linkedin.com/in/your-linkedin-profile", 
  },
  {
    id: "004",
    title: "IKEA UI Clone website",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI",
    image: video1,
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png",
    type: "video",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "https://www.linkedin.com/in/your-linkedin-profile", 
  },
  {
    id: "005",
    title: "E-cart",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI/UX + Backend",
    image: image5,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "https://www.linkedin.com/in/your-linkedin-profile", 
  },
  {
    id: "007",
    title: "Tolirwa",
    tagline: "A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.",
    description:
      "For Syncorp, we developed a comprehensive sales software suite featuring a custom CRM, call center tools, AI-driven automations, local payment integration, and a multilingual client portal.",
    year: "2024",
    timeline: "3 Months",
    services: "Website • Branding",
    industry: "E-learning",
    services: "Full Stack Development",
    about:
      "Learnt Academy is an e-learning platform focused on delivering structured, accessible education through modern digital experiences.",
    challenges:
      "The client had a strong product but lacked an online presence that reflected credibility and scalability. The existing layout lacked structure, clarity, and storytelling.",
    solutions:
      "We designed a clear, modular layout focused on storytelling, smooth scrolling, and concise content blocks. A scalable structure was introduced to support future expansion.",
    image: image6,
    logo: "https://carelabs-khaki.vercel.app/_next/image?url=https%3A%2F%2Fstriking-pleasure-03fbdffa08.media.strapiapp.com%2Fcarelab_logo_7d51f198e5.png&w=640&q=75",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://carelabs-khaki.vercel.app/", 
    linkedinLink: "",  
  },
  {
    id: "010",
    title: "Fitness App",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI/UX + Backend",
    image: image5,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/static-react", 
    previewLink: "https://static-react-rosy.vercel.app/", 
    linkedinLink: "", 
  },
  {
    id: "009",
    title: "Weather App",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI/UX + Backend",
    image: image5,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Weather-App", 
    previewLink: "https://weather-app-one-omega-45.vercel.app/", 
    linkedinLink: "", 
  },
  {
    id: "006",
    title: "Dashboard UI",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    services: "UI/UX + Backend",
    image: image4,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "", 
  },
];
