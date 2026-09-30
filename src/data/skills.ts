import { FC, SVGProps } from "react";
import { IconType } from "react-icons";
import { Lightbulb, Users, CalendarDays, Coffee } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStreamlit,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiExpress,
  SiGit,
  SiGithub,
  SiCodeigniter,
  SiBootstrap,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Tools",
  // "Soft Skills",
] as const;

export const skills: Skill[] = [
  { name: "C", icon: "c", category: "Languages" },
  { name: "C++", icon: "cpp", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "JavaScript", icon: "javascript", category: "Languages" },
  { name: "Python", icon: "python", category: "Languages" },
  { name: "HTML", icon: "html", category: "Frontend" },
  { name: "CSS", icon: "css", category: "Frontend" },
  { name: "React.js", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Streamlit", icon: "streamlit", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "PHP", icon: "php", category: "Backend" },
  { name: "MySQL", icon: "mysql", category: "Backend" },
  { name: "Express.js", icon: "express", category: "Backend" },
  { name: "CodeIgniter", icon: "codeigniter", category: "Backend" },
  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "VS Code", icon: "vscode", category: "Tools" },
  { name: "DataTables", icon: "datatables", category: "Tools" },
  { name: "Problem Solving", icon: "problemsolving", category: "Soft Skills" },
  { name: "Team Collaboration", icon: "team", category: "Soft Skills" },
  // { name: "Project Management", icon: "project", category: "Soft Skills" },
];

type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const skillIconMap: Record<string, IconComponent> = {
  c: SiC as unknown as IconComponent,
  cpp: SiCplusplus as unknown as IconComponent,
  java: Coffee as unknown as IconComponent,
  javascript: SiJavascript as unknown as IconComponent,
  python: SiPython as unknown as IconComponent,
  html: SiHtml5 as unknown as IconComponent,
  css: SiCss as unknown as IconComponent,
  react: SiReact as unknown as IconComponent,
  nextjs: SiNextdotjs as unknown as IconComponent,
  tailwind: SiTailwindcss as unknown as IconComponent,
  streamlit: SiStreamlit as unknown as IconComponent,
  nodejs: SiNodedotjs as unknown as IconComponent,
  php: SiPhp as unknown as IconComponent,
  mysql: SiMysql as unknown as IconComponent,
  express: SiExpress as unknown as IconComponent,
  git: SiGit as unknown as IconComponent,
  github: SiGithub as unknown as IconComponent,
  vscode: VscVscode as unknown as IconComponent,
  codeigniter: SiCodeigniter as unknown as IconComponent,
  bootstrap: SiBootstrap as unknown as IconComponent,
  datatables: SiCodeigniter as unknown as IconComponent,
  // problemsolving: Lightbulb as unknown as IconComponent,
  // team: Users as unknown as IconComponent,
  // project: CalendarDays as unknown as IconComponent,
};

export interface SkillIconColor {
  light: string;
  dark?: string;
}

export const skillIconColors: Record<string, SkillIconColor> = {
  c: { light: "#A8B9CC" },
  cpp: { light: "#00599C" },
  java: { light: "#E76F00" },
  javascript: { light: "#F0DB4F", dark: "#F0DB4F" },
  python: { light: "#3776AB", dark: "#FFD43B" },
  html: { light: "#E44D26" },
  css: { light: "#1572B6" },
  react: { light: "#61DAFB" },
  nextjs: { light: "#000000", dark: "#FFFFFF" },
  tailwind: { light: "#38BDF8" },
  streamlit: { light: "#FF4F40" },
  nodejs: { light: "#3C873A" },
  php: { light: "#777BB4" },
  mysql: { light: "#00758F", dark: "#F29111" },
  express: { light: "#000000", dark: "#FFFFFF" },
  git: { light: "#F05032" },
  github: { light: "#161B22", dark: "#F0F6FC" },
  vscode: { light: "#007ACC" },
  codeigniter: { light: "#F95532" },
  bootstrap: { light: "#7952B3" },
  datatables: { light: "#1266F1" },
  // problemsolving: { light: "#F59E0B" },
  // team: { light: "#F59E0B" },
  // project: { light: "#F59E0B" },
};
 