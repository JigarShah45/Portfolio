export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  featured?: boolean;
  highlights: string[];
}

export const categories = [
  "All",
  "Full Stack",
  "E-Commerce",
  "Web",
  "Data",
  "Other",
] as const;

export type Category = (typeof categories)[number];

export const projects: Project[] = [
  {
    title: "WorkNexus",
    slug: "worknexus",
    description:
      "An employee management system built with CodeIgniter featuring attendance tracking, admin configuration, and SMTP integration.",
    longDescription:
      "An employee management system built with CodeIgniter (PHP MVC framework). Features attendance tracking, employee image management, database setup, admin configuration, and SMTP email integration. Designed for managing employee records with a clean admin interface.",
    image: "/images/projects/worknexus.png",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Full Stack",
    github: "https://github.com/JigarShah45/WorkNexus",
    featured: true,
    highlights: [
      "Employee management system",
      "Attendance tracking",
      "Admin setup and configuration",
      "SMTP email integration",
      "Employee image import and management",
    ],
  },
  {
    title: "ChatterBox",
    slug: "chatterbox",
    description:
      "A real-time chat application supporting instant multi-user messaging with a modern, responsive interface.",
    longDescription:
      "Built a real-time chat application using React for the frontend and Node.js with Express and Socket.io for the backend. Users can send and receive messages instantly in a modern and user-friendly interface. The lightweight architecture supports multiple simultaneous users with smooth, real-time data exchange.",
    image: "/images/projects/chatterbox.jpeg",
    technologies: ["React", "Node.js", "Express", "Socket.io", "CSS"],
    category: "Full Stack",
    github: "https://github.com/JigarShah45/ChatterBox",
    highlights: [
      "Real-time messaging with Socket.io",
      "React-based responsive frontend",
      "Node.js and Express backend",
      "Multiple users can chat simultaneously",
      "Lightweight and fast real-time architecture",
    ],
  },
  {
    title: "Aroma Emporium",
    slug: "aroma-emporium",
    description:
      "A responsive e-commerce perfume website with modern UI, product catalog, and contact form integration.",
    longDescription:
      "A responsive e-commerce website for premium perfumes built with HTML, CSS, JavaScript, PHP, and MySQL. Features dynamic product displays, user-friendly interface, shopping cart functionality, user authentication, payment page integration, and Formspree API integration for contact forms. Includes testimonials section and all-India shipping support.",
    image: "/images/projects/aroma-emporium.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Formspree API"],
    category: "E-Commerce",
    github: "https://github.com/JigarShah45/AROMA-EMPORIUM",
    live: "https://jigarshah45.github.io/AROMA-EMPORIUM/",
    highlights: [
      "Product catalog with featured items",
      "Shopping cart functionality",
      "User sign-up and authentication",
      "Payment page integration",
      "Contact form via Formspree API",
      "Responsive design across all devices",
    ],
  },
  {
    title: "E-Commerce Website",
    slug: "e-commerce-website",
    description:
      "A complete e-commerce website with Firebase authentication, Redux state management, and responsive design.",
    longDescription:
      "A complete e-commerce website built with React, featuring user sign-in/sign-up with Firebase authentication, shopping cart functionality, checkout with total price calculation, and product data from Fake Store API. Uses React Redux for state management with a fully responsive design for desktop and mobile.",
    image: "/images/projects/e-commerce.jpeg",
    technologies: ["React", "Redux", "Firebase", "JavaScript", "CSS"],
    category: "E-Commerce",
    github: "https://github.com/JigarShah45/e-commerce-website",
    highlights: [
      "Sign In / Sign Up with Firebase authentication",
      "Shopping cart functionality",
      "Checkout with total price calculation",
      "Fake Store API for product data",
      "React Redux for state management",
      "Fully responsive design",
    ],
  },
  {
    title: "MovieHut",
    slug: "moviehut",
    description:
      "A responsive React movie app to browse trending movies, search by title, view details, and save favorites.",
    longDescription:
      "A responsive React movie application using OMDb API. Browse trending movies, search by title, view detailed movie information including overview, cast, and trailer links. Users can save favorites using localStorage. Built with Vite and styled with Tailwind CSS for a clean, modern interface.",
    image: "/images/projects/moviehut.jpeg",
    technologies: ["React", "Vite", "Tailwind CSS", "OMDb API", "JavaScript"],
    category: "Web",
    github: "https://github.com/JigarShah45/MovieHut",
    live: "https://movie-hut.vercel.app/",
    highlights: [
      "Browse popular movies",
      "Search movies by title",
      "View movie details with overview and trailer link",
      "Mark/unmark favorites with localStorage",
      "Responsive UI with Tailwind CSS",
    ],
  },
  {
    title: "Meme Generation",
    slug: "meme-generation",
    description:
      "A fun meme generator that creates random memes via the Imgflip API with download functionality.",
    longDescription:
      "A meme generator built with React, Tailwind CSS, and Clerk authentication. Users can generate random memes via the Imgflip API and download them as images using html2canvas. Features a clean, modern interface with user authentication powered by Clerk.",
    image: "/images/projects/meme-generation.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Clerk Auth", "Imgflip API"],
    category: "Web",
    github: "https://github.com/JigarShah45/Meme-Generation",
    highlights: [
      "Random meme generation via Imgflip API",
      "Download memes as images",
      "User authentication with Clerk",
      "Responsive UI with Tailwind CSS",
    ],
  },
  {
    title: "Virat Kohli Power BI Dashboard",
    slug: "virat-kohli-dashboard",
    description:
      "An interactive Power BI dashboard analyzing Virat Kohli's international cricket career with dynamic KPIs and visualizations.",
    longDescription:
      "An interactive Power BI dashboard that analyzes Virat Kohli's international cricket career using match-by-match performance data. Features dynamic KPIs including total runs, matches, centuries, half-centuries, highest score, and average runs. Includes performance analysis against different opponents, year-wise and ground-wise breakdowns with interactive filters and slicers.",
    image: "/images/projects/virat-kohli-dashboard.jpeg",
    technologies: ["Power BI", "DAX", "Power Query", "CSV"],
    category: "Data",
    github: "https://github.com/JigarShah45/Virat-Kohli-PowerBI-Dashboard",
    highlights: [
      "Total runs, matches, centuries KPIs",
      "Performance against different opponents",
      "Year-wise performance analysis",
      "Ground-wise performance breakdown",
      "Interactive filters and slicers",
    ],
  },
];
