import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <section className="pt-[100px]" id="about">
      <SectionTitle number={"03"} value={""} rightTitle={"ABOUT ME"} />
      <div className="flex justify-center items-center mb-24">
        <span className="text-[3.3rem] md:text-[6.725rem] font-black uppercase mt-10 md:mt-0">
          Movie, <br />
          Gaming, <br />
          Music.
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-x-28 gap-y-10">
        <div className="max-w-[30rem] font-normal text-2xl">
          During my free time,i’m learning english and i also enjoy playing
          video games, watching movies, and playing instrument like guitar,
          piano, drum.
        </div>
        <Link href="#" className="text-lg flex items-center gap-x-2">
          More about me <ArrowRight />
        </Link>
      </div>
    </section>
  );
};
