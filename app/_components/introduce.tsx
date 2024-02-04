import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Introduce = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between pt-[100px]"
      id="introduce"
    >
      <div className="md:flex-1 ml-0 md:pl-28 mb-10 md:mb-0">
        <SectionTitle number={"01"} value={"Introduce"} />
      </div>
      <div className="md:flex-1 text-2xl md:text-5xl uppercase font-medium">
        <p>
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
        </p>
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 md:gap-x-0 md:gap-y-10 justify-between items-start font-medium mt-32">
          <div className="max-w-[300px] text-2xl">
            Skill in both front-end and back-end. But My main{" "}
            <span className="underline">focus is front-end</span>
          </div>
          <Link href="#" className="text-lg flex items-center gap-x-2">
            More about me <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
