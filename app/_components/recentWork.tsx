import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export const RecentWork = () => {
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
        <div className="flex lg:gap-x-32 text-2xl font-medium">
          <div className="flex-1 flex flex-col items-center lg:items-start h-auto gap-y-16 lg:gap-16 p-10">
            <p className="text-6xl lg:text-[5rem] lg:leading-[5rem] underline">
              F4 Education System Manage.
            </p>
            <span className="text-black/60 text-2xl">
              A web application build in React, java(spring boot) and SQL Server
              for building a system manage a programming teaching center.
            </span>
            <div className="flex flex-col gap-y-4">
              <span>React</span>
              <span>Java(Spring boot).</span>
              <span>RESTful APIs</span>
              <span>Firebase</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="hidden lg:block lg:flex-2 p-10 mr-10">
            <Image
              src="https://images.unsplash.com/photo-1549980384-d61217e50c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
              width={700}
              height={800}
              objectFit="cover"
              className="z-10 hidden lg:block"
              alt="F4 educations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
