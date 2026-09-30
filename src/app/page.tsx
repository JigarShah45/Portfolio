"use client";

import { usePreloader } from "@/components/providers/PreloaderContext";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Home() {
  const { revealed } = usePreloader();

  return (
    <>
      <Hero revealed={revealed} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Services />
      <Contact />
    </>
  );
}
