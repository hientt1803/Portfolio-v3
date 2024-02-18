import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import Paragraph from "./Character";
import { ScrollProvider } from "@/components/providers/scrollProvider";

const paragraph =
  "HELLO, I'M TRAN HIEN. I'M A FRONT-END DEVELOPER WITH 6 MONTHS OF EXPERIENCE.I LOVE DESIGN AND MAKE " +
  "A ELEGANT AND MODERN DESIGN IN TO REAL SITES.";

const secondParagraph =
  "I ENJOY BUILDING SITES. MY FOCUS IS REACT (NEXT.JS) AND JAVA (SPRING BOOT).";

export const Introduce = () => {
  return (
    <section
      className="container flex flex-col md:flex-row justify-between pt-[100px]"
      id="introduce"
    >
      <div className="md:flex-1 ml-0 md:pl-28 mb-10 md:mb-0">
        <SectionTitle number={"01"} value={"Introduce"} />
      </div>

      <div
        className={cn("md:flex-1 text-2xl md:text-5xl uppercase font-medium")}
      >
        <Paragraph paragraph={paragraph} />

        <div className="mt-8">
          <Paragraph paragraph={secondParagraph} />
        </div>
        {/* <p>
          Hello, {"I'm"} Tran Hien. {"I'm"} a{" "}
          <span className="font-bold">front-end developer</span> with 6 months
          of experience.
        </p>
        <p>
          I love design and make a <span className="font-bold">elegant</span>{" "}
          and <span className="font-bold">Modern design</span> in to real sites.
        </p>
        <p className="mt-8">
          I enjoy building sites. My focus is{" "}
          <span className="font-bold">React (Next.js)</span> and{" "}
          <span className="font-bold">Java (Spring boot)</span>.
        </p> */}

        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 md:gap-x-0 md:gap-y-10 justify-between items-start lg:items-center font-medium mt-32">
          <ScrollProvider className="max-w-[300px] text-2xl" direction={false}>
            Skill in both front-end and back-end. But My main{" "}
            <span className="underline">focus is front-end</span>
          </ScrollProvider>
          <ScrollProvider direction>
            <Link href="#" className="text-lg flex items-center  gap-x-2">
              More about me <ArrowRight />
            </Link>
          </ScrollProvider>
        </div>
      </div>
    </section>
  );
};
