import React from "react";
import { HeroImage } from "../AllSvgs";

const Hero = () => {
  return (
    <div className="  w-9/12 m-auto mt-5 grid grid-cols-6 ">
      <main className="flex flex-col justify-center col-span-3">
        <h1 className=" text-veryDarkBlue leading-tight font-bold text-7xl">
          More than just shorter links
        </h1>
        <p className="text-lg w-4/5 text-Gray">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="font-bold w-40 text-base mt-6 text-white bg-cyan rounded-full px-6 py-3 hover:opacity-60">
          Get Started
        </button>
      </main>
      <div className="col-span-1"></div>
      <div className=" relative right-16 top-5 col-span-2">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
