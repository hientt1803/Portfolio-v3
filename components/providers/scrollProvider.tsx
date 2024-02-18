import React from "react";
import { motion } from "framer-motion";

interface ScrollProviderProps {
  children: React.ReactNode;
  className?: string;
  direction?: boolean;
}

export const ScrollProvider = ({
  children,
  className,
  direction,
}: ScrollProviderProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: direction ? 100 : -100 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
