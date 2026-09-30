export interface Experience {
  role: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    role: "Python Development Intern",
    organization: "Infotact Solutions",
    location: "Remote",
    date: "2025-07",
    description:
      "Completed a Python Development internship with practical exposure to real-world applications. Strengthened coding and debugging skills by working on efficient problem-solving tasks.",
    technologies: ["Python", "Problem Solving", "Debugging"],
  },
  {
    role: "Web Developer Intern",
    organization: "Apex Industries",
    location: "Mumbai, India",
    date: "2022-06",
    description:
      "Developed a fully responsive e-commerce website with secure payment integration, product catalog, and customer account management. Enhanced user experience by designing intuitive interfaces and smooth navigation features.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
