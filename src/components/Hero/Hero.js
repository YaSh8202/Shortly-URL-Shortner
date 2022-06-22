import React from "react";
import HeroImage from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="text-center lg:text-left lg:py-20 flex w-[85%] lg:flex-row flex-col-reverse  lg:w-9/12 m-auto lg:mt-4  relative ">
      <main className="mt-12 lg:mt-2 lg:w-4/6 text-center lg:text-left flex flex-col justify-center ">
        <h1 className=" text-veryDarkBlue leading-tight font-bold text-4xl lg:text-7xl">
          More than just shorter links
        </h1>
        <p className="lg:text-lg text-base lg:w-4/6 text-grayishViolet mt-3 lg:mt-0 ">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="m-auto lg:mx-0 font-bold w-40 text-base mt-6 text-white bg-cyan rounded-full px-6 py-3 hover:opacity-60">
          Get Started
        </button>
      </main>
      <div className=" lg:absolute relative z-10 -right-[6%] lg:-right-[30%] top-5 lg:top-10 ">
        <img className=" max-w-none w-[135%] h-[135%]  lg:w-[90%] " src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
