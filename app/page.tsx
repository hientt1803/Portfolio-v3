"use client";

import { Hero } from "@/app/_components/Hero";
import { Introduce } from "./_components/introduce";
import { RecentWork } from "../components/recentWork";
import { AboutMe } from "./_components/about";
import { Contact } from "../components/contact";

// Scroll animation
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);

  const backToTop = () => {
    topRef.current
      ? topRef.current.scrollIntoView({ behavior: "smooth" })
      : null;
  };

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
      {/* Main content */}
      <Hero valueRef={topRef} />
      <Introduce />
      <RecentWork />
      <AboutMe />
      <Contact pageNuber="04" optFuction={backToTop} />
    </main>
  );
}
