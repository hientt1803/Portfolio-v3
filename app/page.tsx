"use client";

import { Hero } from "@/app/_components/Hero";
import { Introduce } from "./_components/introduce";
import { RecentWork } from "./_components/recentWork";
import { AboutMe } from "./_components/about";
import { Contact } from "./_components/contact";

// Scroll animation
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen z-10 w-full text-md">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />

      {/* Main content */}
      <Hero />
      <Introduce />
      <RecentWork />
      <AboutMe />
      <Contact />
    </main>
  );
}
