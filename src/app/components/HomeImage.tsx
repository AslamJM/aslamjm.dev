"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  classname: string;
};

export default function HomeImage({ children, classname }: Props) {
  return (
    <div
      className={`flex relative items-center justify-center w-full  border border-dark bg-light text-dark font-semibold text-xl rounded-2xl ${classname} p-1 aspect-square`}
    >
      <div className="absolute top-0 -right-3 w-[102%] h-[103%] -z-10 bg-dark rounded-2xl" />
      {children}
    </div>
  );
}
