"use client";

import { Poppins } from "next/font/google";
import { ArrowDown } from "lucide-react";

import { Ref, useState } from "react";
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

export const Hero = ({ valueRef }: { valueRef: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div
      className={cn(
        "mt-[80px] 2xl:mt-[250px] min-h-screen relative flex flex-col items-center justify-centere",
        textFont.className
      )}
      ref={valueRef}
    >
      {/* Sub title*/}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -110 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="absolute top-24 left-72 max-xl:top-12 2xl:top-4 font-bold text-2xl max-xl:text-4xl hidden lg:block"
        >
          TH
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 110 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="absolute top-8 right-56 max-xl:top-0 2xl:top-[-1%] italic text-lg sm:text-3xl lg:text-xl max-xl:text-2xl"
        >
          <span>Hi !</span> <br />
          <span>{"I'm"}Tran Trong Hien</span> <br />
          <span>
            Hopefully in one day. We can{" "}
            <a href="#contact" className="underline">
              work together.
            </a>{" "}
          </span>
        </motion.div>
      </div>

      {/* Main TITLE */}
      <motion.span
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x ? x - size / 2 : 0}px ${
            y ? y - size / 2 : 0
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <span
          className="text-[4.275rem] lg:text-[6.875rem] 2xl:text-[9.3rem] font-black lg:mt-24 2xl:mt-10 hidden lg:block pb-20"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="ml-32">{"I'm"} Making a </span>
          <br /> <span className="2xl:text-[7rem]">
            good website base on{" "}
          </span>{" "}
          <br />
          <span className="float-right 2xl:text-[8rem]">your requiments.</span>
        </span>
      </motion.span>

      <motion.span
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1, bounce: true },
        }}
        viewport={{ once: true }}
        className="text-[4.275rem] lg:text-[6.875rem] 2xl:text-[9.3rem] font-black lg:mt-24 2xl:mt-10 hidden lg:block pb-20"
      >
        <span className="ml-32">Creative Front- </span>
        <br /> <span className="2xl:text-[8rem]">end Developer base </span>{" "}
        <br />
        <span className="float-right 2xl:text-[8rem]">on Viet Nam.</span>
      </motion.span>

      {/* small display */}
      <span className="text-[4.275rem] sm:text-[6.875rem] 2xl:text-[9.3rem] font-black mt-36 pt-28 block lg:hidden">
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
