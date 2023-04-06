import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-xl md:text-2xl text-center md:text-left font-bold text-dark mb-3">
      {text}
    </h1>
  );
};

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="w-full md:w-1/2 p-2">
        <Heading text="Finding myself in the world of  science and technology." />
        <p className="text-justify md:text-left text-md md:text-lg text-dark">
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
      <div className="w-1/2 p-2 hidden md:flex items-center justify-center ">
        <div className="w-96 h-96 bg-slate-500 rounded-md flex items-center justify-center font-semibold text-light">
          There will be an image here 😥
        </div>
      </div>
    </div>
  );
};

export default Hero;
