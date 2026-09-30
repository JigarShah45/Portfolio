"use client";

import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What I can build"
          description="Services I offer to help bring your ideas to life."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-8 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
