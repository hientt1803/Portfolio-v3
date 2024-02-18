"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";

export const RecentWork = () => {
  const data = projects;

  return (
    <section className="pt-[100px]" id="work">
      {/* Title */}
      <div className="ml-0">
        <SectionTitle
          number={"02"}
          value="RECENT WORK"
          rightTitle={"SEE MORE WORK"}
          isDivider
        />
      </div>
      {/* Content Work */}
      <div>
        {data.map((data) => {
          if (data.id % 2 === 0) {
            return (
              <div
                className="flex lg:gap-x-14 text-2xl font-medium"
                key={data.id}
              >
                <motion.div
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  className="flex-1 order-2 flex flex-col items-center lg:items-start h-auto gap-y-16 lg:gap-16 p-10"
                >
                  <p className="text-6xl lg:text-[5rem] lg:leading-[5rem] underline">
                    {data.title}
                  </p>
                  <span className="text-black/60 text-2xl">{data.desc}</span>
                  <div className="flex flex-col gap-y-4">{data.techStack}</div>
                  <Button variant={"outline"} size={"lg"} asChild>
                    <Link
                      href={data.slug}
                      className="font-semibold text-xl flex items-center gap-x-3"
                    >
                      See more <ArrowRightToLine />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, delay: 1 },
                  }}
                  viewport={{ once: true }}
                  className="order-1 hidden lg:block lg:flex-2 p-10 mr-10"
                >
                  <Link href={data.slug}>
                    <Image
                      src={data.image}
                      width={700}
                      height={800}
                      className="z-10 object-cover hidden lg:block"
                      alt={data.title}
                    />
                  </Link>
                </motion.div>
              </div>
            );
          }

          return (
            <div
              className="flex lg:gap-x-14 text-2xl font-medium"
              key={data.id}
            >
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col items-center lg:items-start h-auto gap-y-16 lg:gap-16 p-10"
              >
                <p className="text-6xl lg:text-[5rem] lg:leading-[5rem] underline">
                  {data.title}
                </p>
                <span className="text-black/60 text-2xl">{data.desc}</span>
                <div className="flex flex-col gap-y-4">{data.techStack}</div>
                <Button variant={"outline"} size={"lg"} asChild>
                  <Link
                    href={data.slug}
                    className="font-semibold text-xl flex items-center gap-x-3"
                  >
                    See more <ArrowRightToLine />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1 },
                }}
                viewport={{ once: true }}
                className="hidden lg:block lg:flex-2 p-10 mr-10"
              >
                <Link href={data.slug}>
                  <Image
                    src={data.image}
                    width={700}
                    height={800}
                    className="z-10 object-cover hidden lg:block"
                    alt={data.title}
                  />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
