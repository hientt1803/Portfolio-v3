"use client";

import { SheetProvider } from "@/components/providers/SheetProvider";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  GithubIcon,
  Linkedin,
  Mail,
  Facebook,
  MenuIcon,
  X,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export const MenuSocialProvider = () => {
  return (
    <div className="sticky bottom-10 left-0 max-w-[35px]">
      {/* Socials icons */}
      <div className="flex flex-col gap-y-6">
        <Link href={"https://github.com/hientt1803"}>
          <GithubIcon className="w-8 h-8" />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/hi%E1%BA%BFn-tr%E1%BA%A7n-49b774256/"
          }
        >
          <Linkedin className="w-8 h-8" />
        </Link>
        <Link href={"mailto:tronghientran18@gmail.com"}>
          <Mail className="w-8 h-8" />
        </Link>
        <Link href={"/"}>
          <Facebook className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export const MenuButtonProvider = () => {
  const [menuActive, setMenuActive] = useState(0);

  return (
    <div className="sticky bottom-10 right-0 float-right max-w-[100px]">
      {/* Menu */}

      <SheetProvider>
        <SheetTrigger asChild>
          <Button size="sm" className="rounded-full px-6">
            <MenuIcon className="w-8 h-8 text-white z-20" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black">
          <div className="flex flex-col justify-center h-full p-10">
            <span className="text-md text-neutral-400 underline mb-16">
              Navigation
            </span>
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "relative menu-link-active text-5xl text-neutral-400 transition-all hover:underline hover:text-white",
                    menuActive === 0 && "active"
                  )}
                  onClick={() => setMenuActive(0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={cn(
                    "relative menu-link-active text-5xl text-neutral-400 transition-all hover:underline hover:text-white",
                    menuActive === 1 && "active"
                  )}
                  onClick={() => setMenuActive(1)}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "relative menu-link-active text-5xl text-neutral-400 transition-all hover:underline hover:text-white",
                    menuActive === 2 && "active"
                  )}
                  onClick={() => setMenuActive(2)}
                >
                  About
                </Link>
              </li>
            </ul>

            <span className="text-md text-neutral-400 underline mt-16">
              GET IN TOUCH
            </span>

            <div className="flex gap-x-16 flex-wrap mt-8">
              <Link
                href="https://github.com/hientt1803"
                className="text-xl text-neutral-50"
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/hi%E1%BA%BFn-tr%E1%BA%A7n-49b774256/"
                className="text-xl text-neutral-50"
              >
                LinkedIn
              </Link>
              <Link href="/" className="text-xl text-neutral-50">
                Facebook
              </Link>
              <Link
                href="mailto:tronghientran18@gmail.com"
                className="text-xl text-neutral-50"
              >
                Email
              </Link>
            </div>

            <SheetClose>
              <Button
                size={"lg"}
                className="rounded-full float-right w-fit mt-20"
                variant={"default"}
              >
                <X className="w-8 h-8 text-white z-50" />
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </SheetProvider>
    </div>
  );
};
