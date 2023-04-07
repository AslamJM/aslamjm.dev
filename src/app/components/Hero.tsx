import React from "react";
import HomeImage from "./HomeImage";
import { TSIcon, CodeIcon, ReactIcon, MathIcon } from "@/icons/HompageSvgs";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-xl md:text-2xl text-center md:text-left font-bold text-dark mb-3">
      {text}
    </h1>
  );
};

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-1 md:mt-4 min-h-screen">
      <div className="w-full md:w-1/2 p-2">
        <Heading text="Finding myself in the world of  science and technology." />
        <p className="text-justify md:text-left text-md md:text-lg text-dark px-5 md:px-0">
          I am <span className="font-semibold text-black italic">Aslam</span>{" "}
          living in a post AI world where AI has decimated the hopes of me
          impressing people with my knowledge. I love to learn even a most basic
          things related to science and technology. I would like to share my
          thoughts and knowledge with you through this site. You are welcome.
          <span className="text-red-500">
            (my own words. not AI generated 😂)
          </span>
        </p>
      </div>
      <div className="w-1/2 lg:w-1/3 mx-auto p-2 hidden md:flex items-center justify-center ">
        <div className="grid grid-cols-4 gap-6 w-full">
          <HomeImage classname="col-span-2">
            <TSIcon />
          </HomeImage>
          <HomeImage classname="col-span-2">
            <CodeIcon />
          </HomeImage>
          <HomeImage classname="col-span-2">
            <ReactIcon />
          </HomeImage>
          <HomeImage classname="col-span-2">
            <MathIcon />
          </HomeImage>
        </div>
      </div>
    </div>
  );
};

export default Hero;
