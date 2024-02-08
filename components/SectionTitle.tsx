import { inView, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState<number>(0);

  useEffect(() => {
    const divider = document.querySelector(".divider-section");

    if (divider) {
      inView(divider, () => {
        console.log("Element has entered the viewport");
        setLineWidth(100);
      });
    }
  }, []);

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
          ref={ref}
          style={{ width: `${lineWidth}%` }}
          className="h-[1.5px] mt-3 bg-black divider-section transition-all ease-linear delay-100"
        />
      )}
    </div>
  );
};
