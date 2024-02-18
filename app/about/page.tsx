"use client";

import React from "react";
import { Introduce } from "../_components/introduce";
import Paragraph from "../_components/Character";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { Contact } from "@/components/contact";

const paragraph = "PASSIONATE CREATIVE DEVELOPER BASE IN CAN THO, VIETNAM.";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const AboutPage = () => {
  return (
    <div>
      <div className="container min-h-screen min-w-full flex flex-col justify-center items-center">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl font-mono uppercase"
        >
          About
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 150 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="text-6xl lg:text-[12rem] font-black uppercase"
        >
          MY SELF
        </motion.span>
      </div>
      <div className="text-5xl lg:text-8xl font-black max-w-[1000px] mx-auto text-center">
        <Paragraph paragraph={paragraph} />
      </div>

      {/* Intro */}
      <Introduce />

      {/* Skill */}
      <div className="container mt-[100px]">
        <div className="block text-center text-wrap">
          <span className="text-5xl lg:text-7xl font-black mx-auto">
            Technology and Skills
          </span>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-20">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-neutral-200 borderBlack rounded-xl px-5 py-3 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {/* Contact */}
      <Contact pageNuber="02" />
    </div>
  );
};

export default AboutPage;
