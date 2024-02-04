import { Hero } from "@/app/_components/Hero";
import { Introduce } from "./_components/introduce";
import { RecentWork } from "./_components/recentWork";
import { AboutMe } from "./_components/about";
import { Contact } from "./_components/contact";

export default function Home() {
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
