"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { useEffect, useState } from "react";

function RotatingRole() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = siteConfig.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 text-orange-500 block"
          initial={false}
          animate={{
            y: i === currentIndex ? 0 : i < currentIndex ? "-120%" : "120%",
            opacity: i === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

interface HeroProps {
  revealed?: boolean;
}

export default function Hero({ revealed = true }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--glow)_0%,_transparent_50%)]" />

      <div className="section-container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium tracking-[0.2em] text-orange-500 uppercase mb-6"
          >
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[0.95]"
          >
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="text-neutral-900 dark:text-white">
              {siteConfig.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* <motion.div
            variants={itemVariants}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-display font-semibold h-[1.2em]">
            I build{" "}
            <RotatingRole />
          </motion.div> */}

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-md"
          >
            {siteConfig.roles.length > 0
              ? "Building dynamic, user-centric web applications with a focus on clean interfaces, reliable systems, and practical solutions."
              : "Let's build something together."}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <MagneticButton>
              <a href="#work">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact">
                <Button variant="secondary" size="lg">
                  Hire Me
                </Button>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="/pdf/resume.pdf" download>
                <Button variant="outline" size="lg">
                  Download CV
                  <Download className="w-4 h-4" />
                </Button>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={
            revealed
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.92 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <motion.div
              initial={{ opacity: 0 }}
              animate={revealed ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 rounded-full bg-orange-500/15 blur-3xl"
            />
            <Image
              src="/images/profile.jpg"
              alt="Jigar Shah"
              fill
              sizes="(max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
              className="object-cover object-top rounded-full ring-4 ring-orange-500/30 shadow-2xl shadow-orange-500/20 scale-[0.92]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={revealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-400 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-orange-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
