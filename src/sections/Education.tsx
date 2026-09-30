"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
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
    <section id="education" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic background"
          description="My educational journey and qualifications."
        />

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

          {/* Timeline vertical line - mobile */}
          <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          {education.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={item.degree}
                className="relative grid grid-cols-[24px_1fr] md:grid-cols-[1fr_40px_1fr] gap-4 md:gap-6 mb-10 last:mb-0"
              >
                {/* Desktop: Content side (left for even, right for odd) */}
                <div
                  className={`hidden md:block ${
                    isLeft ? "order-1 text-right" : "order-3 text-left"
                  }`}
                >
                  <Reveal
                    delay={0.3 + i * 0.15}
                    direction={isLeft ? "right" : "left"}
                  >
                    <div
                      className={`${
                        isLeft ? "pr-8" : "pl-8"
                      }`}
                    >
                      <span className="text-sm text-orange-500 font-medium">
                        {item.period}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-neutral-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {item.institution}
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

                {/* Desktop: Score card side (right for even, left for odd) */}
                <div
                  className={`hidden md:block ${
                    isLeft ? "order-3" : "order-1"
                  }`}
                >
                  <Reveal
                    delay={0.4 + i * 0.15}
                    direction={isLeft ? "left" : "right"}
                  >
                    <div
                      className={`${
                        isLeft ? "pl-8" : "pr-8 text-right"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800"
                      >
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-neutral-900 dark:text-white">
                            {item.result}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {item.resultLabel}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </Reveal>
                </div>

                {/* Mobile: All content in second column */}
                <div className="md:hidden order-3 pl-0">
                  <Reveal delay={0.3 + i * 0.15} direction="right">
                    <div className="mb-3">
                      <span className="text-sm text-orange-500 font-medium">
                        {item.period}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-neutral-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.35 + i * 0.15} direction="right">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800"
                    >
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-neutral-900 dark:text-white">
                          {item.result}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.resultLabel}
                        </p>
                      </div>
                    </motion.div>
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
