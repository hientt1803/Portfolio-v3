import { ArrowDown, GithubIcon, Linkedin, Mail, Facebook } from "lucide-react";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { socials } from "@/lib/data";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Hero = () => {
  const data: typeof socials = socials;

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
      <span className="text-[6.875rem] font-black mt-46 pt-28 hidden lg:block">
        <span className="ml-32">Creative Front- </span>
        <br /> <span className="">end Developer base </span> <br />
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
