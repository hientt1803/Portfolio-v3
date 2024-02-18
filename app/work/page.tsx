"use client";

import React from "react";
import { RecentWork } from "../../components/recentWork";
import { Contact } from "../../components/contact";
import { motion } from "framer-motion";

const WorkPage = () => {
  return (
    <div>
      <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="text-7xl font-mono uppercase"
        >
          Personal
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
          WORK
        </motion.span>
      </div>
      <RecentWork />
      <Contact pageNuber="03" />
    </div>
  );
};

export default WorkPage;
