import { ArrowRight } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

interface SectionProps {
  number: String;
  value: String;
  rightTitle?: String;
  isDivider?: Boolean;
}

export const SectionTitle = ({
  number,
  value,
  rightTitle,
  isDivider,
}: SectionProps) => {
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
      {isDivider && <Separator className="h-[1.5px] mt-3 bg-black" />}
    </div>
  );
};
