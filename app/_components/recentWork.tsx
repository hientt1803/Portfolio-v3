// "use client";

import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/data";
import Image from "next/image";
// import { useEffect, useLayoutEffect, useRef } from "react";

// Animation
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";

export const RecentWork = () => {
  const data = projects;
  // const text = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from(text.current, {
  //     scrollTrigger: {
  //       trigger: text.current,
  //       scrub: true,
  //       start: "0px bottom",
  //       end: "bottom+=400px bottom",
  //     },
  //     opacity: 0,
  //     left: "-200px",
  //     ease: "ease",
  //   });
  // }, []);

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
                <div className="flex-1 order-2 flex flex-col items-center lg:items-start h-auto gap-y-16 lg:gap-16 p-10">
                  <p className="text-6xl lg:text-[5rem] lg:leading-[5rem] underline">
                    {data.title}
                  </p>
                  <span className="text-black/60 text-2xl">{data.desc}</span>
                  <div className="flex flex-col gap-y-4">{data.techStack}</div>
                </div>
                <div className="order-1 hidden lg:block lg:flex-2 p-10 mr-10">
                  <Image
                    src={data.image}
                    width={700}
                    height={800}
                    className="z-10 object-cover hidden lg:block"
                    alt={data.title}
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              className="flex lg:gap-x-14 text-2xl font-medium"
              key={data.id}
            >
              <div className="flex-1 flex flex-col items-center lg:items-start h-auto gap-y-16 lg:gap-16 p-10">
                <p className="text-6xl lg:text-[5rem] lg:leading-[5rem] underline">
                  {data.title}
                </p>
                <span className="text-black/60 text-2xl">{data.desc}</span>
                <div className="flex flex-col gap-y-4">{data.techStack}</div>
              </div>
              <div className="hidden lg:block lg:flex-2 p-10 mr-10">
                <Image
                  src={data.image}
                  width={700}
                  height={800}
                  className="z-10 object-cover hidden lg:block"
                  alt={data.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
