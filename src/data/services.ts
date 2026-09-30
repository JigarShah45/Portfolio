import { Code, Layout, Server, Database, Layers, MonitorSmartphone } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and modern websites using React, Next.js, and modern web technologies.",
    icon: Code,
  },
  {
    title: "Full Stack Applications",
    description:
      "End-to-end application development from database design to polished user interfaces.",
    icon: Layers,
  },
  {
    title: "Frontend Interfaces",
    description:
      "Creating clean, intuitive, and visually appealing user interfaces with attention to detail.",
    icon: Layout,
  },
  {
    title: "Backend Systems",
    description:
      "Building reliable backend systems with Node.js, Express, and PHP for data-driven applications.",
    icon: Server,
  },
  {
    title: "API Integration",
    description:
      "Connecting services and building RESTful APIs that power modern web applications.",
    icon: MonitorSmartphone,
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas with MySQL and optimizing queries for performance.",
    icon: Database,
  },
];
