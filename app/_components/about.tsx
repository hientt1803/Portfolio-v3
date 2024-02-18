import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollProvider } from "@/components/providers/scrollProvider";

export const AboutMe = () => {
  return (
    <section className="pt-[100px]" id="about">
      <SectionTitle number={"03"} value={""} rightTitle={"ABOUT ME"} />
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex justify-center items-center mb-24"
      >
        <span className="text-[3.3rem] md:text-[6.725rem] font-black uppercase mt-10 md:mt-0">
          Movie, <br />
          Gaming, <br />
          Music.
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-x-28 gap-y-10">
        <ScrollProvider
          direction={false}
          className="max-w-[30rem] font-medium text-2xl"
        >
          During my free time, i’m learning english and i also enjoy playing
          video games, watching movies, and playing instrument like guitar,
          piano, drum.
        </ScrollProvider>

        <ScrollProvider direction>
          <Link href="#" className="text-lg flex items-center gap-x-2">
            More about me <ArrowRight />
          </Link>
        </ScrollProvider>
      </div>
    </section>
  );
};
