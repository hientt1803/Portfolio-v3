import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-y-8 justify-center text-center md:text-left md:justify-between items-center text-xl font-medium mt-[50px] pb-4">
      <div>
        Design by{" "}
        <a
          target="_blank"
          href="https://aquadev.site/"
          className="underline font-bold text-black"
        >
          AQUADEV,
        </a>{" "}
        building by me.
      </div>
      <div className="flex justify-between gap-x-6 items-center">
        <a href="https://github.com/hientt1803" target="_blank">
          GitHub
        </a>
        <a href="#" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:tronghientran18@gmail.com" target="_blank">
          Email
        </a>
      </div>
    </footer>
  );
};
