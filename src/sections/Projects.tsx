"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects, categories, type Category } from "@/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <TiltCard className="group h-full">
      <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
        <div className="aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />

          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-orange-500 text-white">
                Featured
              </Badge>
            </div>
          )}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1 min-h-[180px]">
          <Link href={`/work/${project.slug}`}>
            <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white hover:text-orange-500 transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [gridVisible, setGridVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setGridVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/30"
    >
      <div className="section-container">
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="A curated collection of projects that showcase my skills and experience."
        />

        {featuredProject && activeCategory === "All" && (
          <Reveal delay={0.1}>
            <div className="mb-16">
              <TiltCard>
                <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-[16/10] lg:aspect-auto bg-neutral-100 dark:bg-neutral-800 relative">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                    </div>

                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <Badge className="w-fit mb-4">Featured Project</Badge>
                      <Link href={`/work/${featuredProject.slug}`}>
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white hover:text-orange-500 transition-colors">
                          {featuredProject.title}
                        </h3>
                      </Link>
                      <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {featuredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {featuredProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-8">
                        {featuredProject.github && (
                          <a
                            href={featuredProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </a>
                        )}
                        {featuredProject.live && (
                          <a
                            href={featuredProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 border border-neutral-200 dark:border-neutral-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={gridRef}>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={
                    gridVisible
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 30, scale: 0.98 }
                  }
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.5,
                    delay: gridVisible ? index * 0.08 : 0,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
