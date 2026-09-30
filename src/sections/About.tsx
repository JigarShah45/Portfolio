"use client";

import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Lightbulb, Zap } from "lucide-react";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building dynamic, user-centric web applications with modern frameworks.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Breaking down complex problems into efficient, practical solutions.",
  },
  {
    icon: Zap,
    title: "Full Stack Development",
    description: "End-to-end development from backend systems to polished frontend interfaces.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading label="About" title="A bit about me" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                {profile.objective}
              </p>
              <p>
                Completed my Bachelor of Engineering in Information Technology from
                St. Francis Institute of Technology, Mumbai University. During my studies, I focused on
                deepening my expertise in full-stack development; working with React, Next.js,
                Node.js, and modern databases.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, learning best
                practices, and continuously improving my craft.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={0.3 + i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-5 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-colors bg-white dark:bg-neutral-900/50"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
