"use client";

import { motion, useScroll } from "framer-motion";

export const ProgressbarProvider = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
  );
};
