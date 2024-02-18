"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  number: string;
  value: string;
  rightTitle?: string;
  isDivider?: boolean;
}

export const SectionTitle = ({
  number,
  value,
  rightTitle,
  isDivider,
}: SectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center uppercase">
        <div className="flex gap-x-14">
          <span className="text-neutral-600 text-lg md:text-3xl flex-nowrap">
            {number} /
          </span>
          <span className="font-semibold text-xl md:text-4xl">{value}</span>
        </div>
        {rightTitle && (
          <span className="font-semibold text-xl md:text-4xl flex items-center gap-2">
            {rightTitle} <ArrowRight />{" "}
          </span>
        )}
      </div>
      {isDivider && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{
            opacity: 1,
            width: "100%",
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="h-1 relative bg-black mt-2"
        />
      )}
    </div>
  );
};
