"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { formatDate } from "@/lib/utils";

export default function Experience() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="My professional journey and the roles that shaped my expertise."
        />

        <div ref={containerRef} className="relative max-w-[850px] mx-auto">
          {/* Timeline vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

          {/* Timeline vertical line - mobile */}
          <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={item.role + item.date}
                className="relative grid grid-cols-[24px_1fr] md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] gap-4 md:gap-6 pt-8 pb-8 md:pt-10 md:pb-10 first:pt-0 last:pb-0"
              >
                {/* Desktop: Role info side (left for even, right for odd) */}
                <div
                  className={`hidden md:block ${
                    isLeft ? "order-1 text-right" : "order-3 text-left"
                  }`}
                >
                  <Reveal
                    delay={0.3 + i * 0.15}
                    direction={isLeft ? "right" : "left"}
                  >
                    <div className={isLeft ? "pr-6" : "pl-6"}>
                      <span className="text-sm text-orange-500 font-medium">
                        {formatDate(item.date)}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-neutral-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* Center: Timeline dot */}
                <div className="order-2 flex justify-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + i * 0.15,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="w-3 h-3 rounded-full bg-orange-500 border-4 border-white dark:border-neutral-950 z-10 mt-2"
                  />
                </div>

                {/* Desktop: Description side (right for even, left for odd) */}
                <div
                  className={`hidden md:block ${
                    isLeft ? "order-3" : "order-1"
                  }`}
                >
                  <Reveal
                    delay={0.4 + i * 0.15}
                    direction={isLeft ? "left" : "right"}
                  >
                    <div className={isLeft ? "pl-6" : "pr-6"}>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Mobile: All content in second column */}
                <div className="md:hidden order-3 pl-0">
                  <Reveal delay={0.3 + i * 0.15} direction="right">
                    <div className="mb-3">
                      <span className="text-sm text-orange-500 font-medium">
                        {formatDate(item.date)}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-neutral-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.35 + i * 0.15} direction="right">
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
