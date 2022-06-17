import React from "react";
import { BoosterDesktop, BoosterMobile } from "../UI/AllSvgs";

const Boost = () => {
  return (
    <div className="pt-10 flex items-center h-4/5 mt-12 m-auto  w-full relative top-16 ">
      {window.innerWidth > 400 ? (
        <BoosterDesktop
          height={200}
          className="absolute -z-10 w-full bg-dark_voilte "
        />
      ) : (
        <BoosterMobile
          height={160}
          className="absolute -z-10 w-full bg-dark_voilte "
        />
      )}
      <div className="text-center w-full ">
        <h3 className="text-white font-bold text-xl">
          Boost your links today
        </h3>
        <button className="font-bold w-40 text-base mt-6  text-white bg-cyan rounded-full px-4 py-3 hover:opacity-70">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Boost;
