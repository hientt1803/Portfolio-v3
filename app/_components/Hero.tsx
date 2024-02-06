"use client";

import { Poppins } from "next/font/google";
import { ArrowDown } from "lucide-react";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Animation
import { motion } from "framer-motion";
import useMousePosition from "@/lib/hooks/useMousePosition";

import styles from "./sass/Hero.module.scss";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <div
      className={cn(
        "mt-[80px] 2xl:mt-[250px] min-h-screen relative flex flex-col items-center justify-centere",
        textFont.className
      )}
    >
      {/* Sub title*/}
      <div>
        <div className="absolute top-24 left-72 font-bold text-2xl hidden lg:block">
          TH
        </div>
        <div className="absolute top-8 right-56 italic text-lg sm:text-3xl lg:text-xl">
          <span>Hi !</span> <br />
          <span>{"I'm"}Tran Trong Hien</span> <br />
          <span>
            Hopefully in one day. We can{" "}
            <a href="#contact" className="underline">
              work together.
            </a>{" "}
          </span>
        </div>
      </div>

      {/* Main TITLE */}
      <motion.span
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <span
          className="text-[4.275rem] lg:text-[6.875rem] font-black lg:mt-24 hidden lg:block cursor-default"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="ml-32">{"I'm"} Making a </span>
          <br /> <span>good website base on </span> <br />
          <span className="float-right">your requiments.</span>
        </span>
      </motion.span>

      <span className="text-[4.275rem] lg:text-[6.875rem] font-black mt-36 lg:mt-24 hidden lg:block cursor-default">
        <span className="ml-32">Creative Front- </span>
        <br /> <span>end Developer base </span> <br />
        <span className="float-right">on Viet Nam.</span>
      </span>

      {/* small display */}
      <span className="text-[4.275rem] sm:text-[6.875rem] font-black mt-36 pt-28 block lg:hidden">
        Creative Front-end Developer base on Viet Nam.
      </span>

      {/* Butotn */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-full px-0 p-10 items-center"
              asChild
            >
              <Link href="#introduce">
                <ArrowDown className="w-10 h-10" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Scroll down</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
