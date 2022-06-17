import React from "react";
import Stat from "./Stat";

import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <div className="w-9/12 m-auto mt-28 flex flex-col mb-28 ">
      <div className=" text-center w-2/4 m-auto flex flex-col mb-24 ">
        <h2 className="text-3xl font-bold mb-3 text-veryDarkBlue ">
          Advanced Statistics
        </h2>
        <p className="text-lg text-grayishViolet ">
          Track your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex gap-7 relative ">
        <div className="-z-10 left-12 top-36 absolute m-auto bg-cyan w-4/6 h-2" ></div>
        <Stat
          icon={brandRecognition}
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Stat
        className="top-10"
          icon={detailedRecords}
          heading="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Stat
        className="top-20"
          icon={fullyCustomizable}
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
};

export default Stats;
