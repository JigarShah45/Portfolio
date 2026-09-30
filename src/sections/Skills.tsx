"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  skills,
  skillCategories,
  skillIconMap,
  skillIconColors,
} from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const getIconColor = (iconKey: string) => {
    const colors = skillIconColors[iconKey];
    if (!colors) return "#F97316";
    return mounted && isDark && colors.dark ? colors.dark : colors.light;
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/30"
    >
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A collection of technologies and tools I use to bring ideas to life."
        />

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {["All", ...skillCategories].map((cat) => (
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
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                const Icon = skillIconMap[skill.icon];
                const iconColor = getIconColor(skill.icon);

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={
                      gridVisible
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 20, scale: 0.97 }
                    }
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.5,
                      delay: gridVisible ? index * 0.03 : 0,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <TiltCard>
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="group p-4 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-colors duration-300 text-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.2 }}
                          className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-2 transition-colors"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${iconColor} 10%, transparent)`,
                          }}
                        >
                          {Icon ? (
                            <Icon
                              className="w-8 h-8"
                              style={{ color: iconColor }}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              className="text-sm font-bold"
                              style={{ color: iconColor }}
                            >
                              {skill.name.charAt(0)}
                            </span>
                          )}
                        </motion.div>
                        <h3 className="font-medium text-sm text-neutral-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                          {skill.category}
                        </p>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 overflow-hidden relative">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, i) => {
                const Icon = skillIconMap[skill.icon];
                const iconColor = getIconColor(skill.icon);

                return (
                  <div
                    key={`${skill.name}-${i}`}
                    className="flex-shrink-0 mx-3 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    <span
                      className="mr-2 inline-flex"
                      style={{ color: iconColor }}
                    >
                      {Icon ? (
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      ) : null}
                    </span>
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
