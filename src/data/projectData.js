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
    id: "012",
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
    id: "011",
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
    id: "010",
    title: "Learnt Accademy",
    tagline: "A full-featured e-learning platform built with React and the MERN stack.",
    description:
    "Learnt Accademy is an interactive online learning platform that enables users to browse courses, track learning progress, complete quizzes, and purchase premium content. Built using the MERN stack, the platform includes secure authentication, role-based access, admin controls, and integrated payments.",
    year: "2024",
    timeline: "1 Month",
    services: "Frontend Development • Full Stack Integration",
    industry: "Education & E-Learning",
    services: ["React", "React Router", "Axios","Node.js","Express","MongoDB","JWT Authentication","OTP Verification",
    "Razorpay","React Bootstrap","CSS"],
    about:
      "Learnt Accademy is a full-stack e-learning platform designed to deliver an engaging and structured learning experience. Users can register and log in securely using OTP-based authentication, browse available courses, track progress, and complete quizzes with real-time feedback. The platform also supports paid courses through Razorpay integration in test mode, allowing users to purchase and access content instantly. An admin dashboard provides complete control over courses, videos, users, and progress monitoring. The application was built with a strong focus on scalability, clean UI, and smooth user experience across all devices.",
    challenges:
      "The main challenges included implementing secure authentication with OTP verification, handling role-based access for users and admins, managing dynamic course progress tracking, and integrating a payment gateway while ensuring a smooth and responsive user experience.",
    solutions:
      "I implemented JWT-based authentication combined with OTP verification for secure access control. React Router was used to manage protected routes and role-based navigation. Course progress and quiz data were handled through structured MongoDB schemas, while Razorpay was integrated in test mode for secure course purchases. The UI was built using React Bootstrap and custom CSS to ensure responsiveness and usability across devices.",
    image: image1,
    logo: "https://learnt-accademy-frontend.vercel.app/assets/logoImg-BiGmV2N8.png",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Learnt-Accademy-Frontend.git", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "",  
  },
  {
    id: "009",
    title: "Document App",
    tagline: "A modern document management system with real-time syncing and rich text editing.",
    description:
      "A React-based document management application that allows users to add, view, edit, search, and delete documents efficiently. Built with Firebase for real-time data handling and React Quill for rich text editing, the app delivers a clean, responsive, and intuitive user experience.",
    year: "2024",
    timeline: "2 weeks",
    services: "Frontend Development • UI Engineering",
    industry: "Productivity & Document Management",
    services: [ "React","React Router","Firebase Firestore","Firebase Authentication","Material UI","React Quill","CSS","Vercel"],
    about:
      "The Document Management App is a modern and efficient solution for managing digital documents. Users can create documents with titles, descriptions, and image URLs, and edit content using a rich text editor powered by React Quill. Firebase Firestore enables real-time data syncing, ensuring changes are reflected instantly across the app. The interface is built with Material UI to provide a sleek, consistent, and fully responsive experience. The project focuses on usability, clean UI design, and scalable frontend architecture.",
    challenges:
      "Key challenges included integrating a rich text editor with dynamic content updates, managing real-time document state with Firebase Firestore, and maintaining a smooth and responsive UI across different devices.",
    solutions:
      "React Quill was integrated for rich text editing, enabling users to format document content easily. Firebase Firestore was used for real-time CRUD operations and state synchronization. React Router handled seamless navigation between document listing and detail pages, while Material UI components ensured a consistent, accessible, and responsive interface.",
    image: image7,
    logo: "",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Document-App", 
    previewLink: "https://document-app-six.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_react-materialui-firebase-activity-7274159169572597761-UIxG"
  },
  {
    id: "008",
    title: "Movie Watchlist App",
    tagline: "A simple and interactive movie watchlist built with React and the OMDb API.",
    description:
      "A React-based movie watchlist application that allows users to search for movies using the OMDb API, add them to a personal watchlist, and mark movies as watched. The project focuses on API integration, state management, and responsive UI design.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development",
    industry: "Entertainment & Media",
    services: ["React","OMDb API","JavaScript", "CSS", "Vercel"],
    about:
      "The Movie Watchlist App is a lightweight React application designed to demonstrate API integration and client-side state management. Users can search for movies in real time using the OMDb API, add selected movies to a personal watchlist, and mark them as watched for easy tracking. The application features a clean and intuitive interface with responsive layouts to ensure a smooth experience across devices.",
    challenges:
      "The main challenges involved handling asynchronous API calls, managing watchlist state efficiently, and preventing duplicate entries while maintaining a smooth user experience.",
    solutions:
      "The OMDb API was integrated using asynchronous requests to fetch movie data dynamically. React state management was used to track the watchlist and watched status, ensuring real-time UI updates. Conditional rendering was applied to manage different movie states, while responsive styling ensured usability across various screen sizes.",
    image: image8,
    logo: "",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/movie-watchlist", 
    previewLink: "https://movie-watchlist-neon.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_react-webdevelopment-frontenddevelopment-activity-7266488597116010496-ezbW",  
  },
  {
    id: "007",
    title: "RBAC Project",
    tagline: "A role-based employee management system with controlled access and CRUD operations.",
    description:
      "A React-based employee management application implementing role-based access control (RBAC). The platform allows admins, editors, and viewers to interact with employee data based on defined permissions, ensuring secure and structured user management.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development • Access Control Implementation",
    industry: "HR & Enterprise Management",
    services: ["React","Bootstrap","Role-Based Access Control","REST API","JSON Server","Local Storage","Vercel",
      "Render"],
    about:
      "The RBAC Employee Management System is a web application designed to demonstrate role-based access control in a real-world scenario. The app supports three user roles—admin, editor, and viewer—each with specific permissions. Admins can add, edit, and delete employee records, editors can add and update records, and viewers have read-only access. The frontend is built with React and Bootstrap to ensure a responsive and user-friendly interface, while a JSON Server hosted on Render serves as the backend API. Local storage is used to manage authentication state and enforce role-based restrictions across the application.",
    challenges:
      "The key challenge was implementing clear and enforceable role-based permissions while maintaining clean UI logic and preventing unauthorized actions across different user roles.",
    solutions:
      "Role-based permissions were handled through conditional rendering and centralized access checks based on role data stored in local storage. Protected UI actions ensured that users could only access features allowed by their role. CRUD operations were integrated via REST APIs, and responsive layouts were implemented using Bootstrap for consistent usability across devices.",
    image: image3,
    link: "#",
    logo: "https://via.placeholder.com/40x40",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/employee-management", 
    previewLink: "https://employee-management-dun.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_admins-editors-viewers-activity-7266016004697186305-1qhL", 
  },
  {
    id: "006",
    title: "IKEA UI Clone website",
    tagline: "A static, pixel-focused UI clone of the IKEA website using HTML and CSS.",
    description:
      "A static UI clone of the IKEA website built using only HTML and CSS. The project focuses on layout accuracy, visual hierarchy, and responsive structure, showcasing strong fundamentals in frontend design and styling.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend UI Development",
    industry: "E-Commerce & Retail",
    services: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Netlify"
    ],
    about:
      "The IKEA UI Clone is a static frontend project developed to replicate the visual structure and layout of the IKEA website using pure HTML and CSS. The focus was on recreating the overall look and feel, including page sections, spacing, typography, and product-style layouts. This project demonstrates a strong understanding of core web fundamentals and responsive design principles without relying on JavaScript or frameworks.",
    challenges:
      "The main challenge was replicating a large e-commerce layout using only HTML and CSS while maintaining proper alignment, spacing, and responsiveness across different screen sizes.",
    solutions:
      "The layout was structured using semantic HTML and modern CSS techniques such as Flexbox and Grid. Careful attention was given to spacing, typography, and alignment to closely match the original design, ensuring a clean and responsive UI across devices.",
    image: video1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png",
    type: "video",
    gitLink: "https://github.com/GourinandhanaES/ikea",
    previewLink: "https://clone-ikeaweb.netlify.app/",
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_ikea-html-css-activity-7242628021210284032-FJ_e"
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
