"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

interface ContactInterface {
  pageNuber?: string;
}

export const Contact = ({ pageNuber }: ContactInterface) => {
  return (
    <section className="pt-[100px] container" id="contact">
      <SectionTitle number={pageNuber || "00"} value={"CONTACT"} isDivider />

      <div className="flex flex-col justify-center items-center">
        <span className="text-xl md:text-3xl font-normal uppercase mt-32">
          I Hope We can work together
        </span>
        <span className="text-4xl md:text-[6.725rem] md:leading-[6.725rem] font-bold mt-32">
          Say Hi!
        </span>
        <a
          href="mailto:tronghientran18@gmail.com"
          className="text-2xl md:text-[3.5rem] md:leading-[3.5rem] text-black font-bold"
        >
          tronghientran18@gmail.com
        </a>

        <motion.button
          initial={{ opacity: 0, y: 150 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        >
          <Button
            variant={"default"}
            size={"lg"}
            className="mx-auto mt-32 rounded-full text-white text-lg"
          >
            <Link href="#" className="flex items-center gap-x-4">
              <ChevronUp className="w-8 h-8" /> Back to top
            </Link>
          </Button>
        </motion.button>
      </div>
    </section>
  );
};
