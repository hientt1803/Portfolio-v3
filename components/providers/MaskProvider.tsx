"use client";

import { useState } from "react";
import styles from "@/app/_components/sass/Hero.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "@/lib/hooks/useMousePosition";

export const MaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.div
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x || 0 - size}px ${y || 0 - size}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
