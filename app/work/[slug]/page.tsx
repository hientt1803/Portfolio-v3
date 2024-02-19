"use client";

import { useEffect, useState } from "react";

// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { projects } from "@/lib/data";
import { Contact } from "@/components/contact";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  ButtonFirst,
  ButtonLast,
  ButtonPlay,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const WorkPage = ({ params }: any) => {
  const [mounted, setMounted] = useState(false);

  const project = projects.filter((item) => item.slug === params.slug);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const slider = document.getElementById("workSlider");

    if (slider) {
      slider.focus();
    }
  }, [mounted]);

  return (
    <>
      <div className="container w-full mt-[60px]">
        <div className="flex justify-center items-center">
          {/* Caroucel here */}
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={project[0]?.listImage?.length}
            infinite
            className="w-full h-auto"
          >
            <Slider
              className="h-[80vh] shadow-md group transition-all"
              id="workSlider"
            >
              {project[0]?.listImage.map((item, index) => (
                <Slide
                  key={index}
                  index={index}
                  className="hover:zoom-in-100 hover:shadow-lg transition-all"
                >
                  <Image
                    src={item}
                    hasMasterSpinner
                    isBgImage
                    alt="Image carousel"
                    className="object-contain group-hover:zoom-in-110 "
                    style={{
                      height: "auto",
                    }}
                  />
                </Slide>
              ))}
            </Slider>
            <div className="flex justify-center gap-x-3 mt-3">
              <ButtonFirst className="border-2 bg-transparent outline-2 font-semibold shadow-neutral-400 p-2 px-7 rounded-sm">
                First
              </ButtonFirst>
              <ButtonBack className="border-2 bg-transparent outline-2 font-semibold shadow-neutral-400 p-2 px-7 rounded-sm">
                Back
              </ButtonBack>
              <ButtonNext className="border-2 bg-transparent outline-2 font-semibold shadow-neutral-400 p-2 px-7 rounded-sm">
                Next
              </ButtonNext>
              <ButtonLast className="border-2 bg-transparent outline-2 font-semibold shadow-neutral-400 p-2 px-7 rounded-sm">
                Last
              </ButtonLast>
              <ButtonPlay className="border-2 bg-transparent outline-2 font-semibold shadow-neutral-400 p-2 px-7 rounded-sm">
                Play
              </ButtonPlay>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="w-full py-56">
        <h1 className="text-5xl md:text-9xl text-center mb-24 uppercase font-mono">
          About Project
        </h1>
        <div className="flex justify-between gap-20 md:gap-2 flex-wrap">
          <div className="flex-[3] flex flex-col flex-wrap gap-y-10">
            <span className="text-2xl md:text-5xl font-black uppercase">
              {project[0].title}
            </span>
            <span className="text-xl font-bold uppercase flex justify-start gap-x-0 md:gap-x-2 flex-wrap">
              Github:
              <a
                href={project[0].github}
                className="text-black font-semibold lowercase underline text-xl ml-3"
              >
                {project[0].github}
              </a>
            </span>
            <span className="text-xl font-bold uppercase">
              Techstack:
              <span className="text-black font-semibold lowercase text-xl ml-3">
                {project[0].techStack}
              </span>
            </span>
          </div>
          <div className="flex-1 flex flex-col flex-wrap gap-y-10">
            <div className="text-2xl font-bold">{project[0].desc}</div>
            {project[0].url && (
              <span className="text-xl font-semibold uppercase">
                Deploy Link:
                <a
                  href={project[0].url}
                  className="text-black font-medium italic lowercase underline text-xl ml-3"
                >
                  {project[0].url}
                </a>
              </span>
            )}
          </div>
        </div>
      </div>

      <Contact pageNuber="END" />
    </>
  );
};

export default WorkPage;
