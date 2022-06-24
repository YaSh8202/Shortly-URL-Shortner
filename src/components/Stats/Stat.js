import React from "react";

const Stat = (props) => {
  return (
    <div
      className={` rounded-md flex flex-col bg-white p-8 pt-20 relative ${props.className}`}
    >
      <img
        className=" brightness-90 text-center absolute w-20 p-3 -top-8 bg-veryDarkViolet rounded-full object-none left-28 md:left-[calc(50%-10px)] lg:left-8  "
        src={props.icon}
        alt=""
      />
      <h3 className="text-veryDarkViolet  font-bold text-2xl">
        {props.heading}
      </h3>
      <p className="mt-3 text-base leading-7 text-left text-grayishViolet">{props.text}</p>
    </div>
  );
};

export default Stat;
