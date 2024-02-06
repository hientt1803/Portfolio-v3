"use client";

import { Hero } from "@/app/_components/Hero";
import { Introduce } from "./_components/introduce";
import { RecentWork } from "./_components/recentWork";
import { AboutMe } from "./_components/about";
import { Contact } from "./_components/contact";

// Scroll animation
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
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
      <Hero />
      <Introduce />
      <RecentWork />
      <AboutMe />
      <Contact />
    </main>
  );
}
