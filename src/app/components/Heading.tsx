"use client";

import React from "react";

type Props = {
  text: string;
  classname?: string;
};

function HeadingHome({ text }: Props) {
  return (
    <div className="py-2 relative w-[60%] md:w-full mx-auto md:mx-0">
      <h2 className="text-dark font-bold text-xl md:text-2xl text-center md:text-left">
        {text}
      </h2>
      <div className="absolute h-[2px] bottom-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-dark to-light" />
    </div>
  );
}

export default HeadingHome;
