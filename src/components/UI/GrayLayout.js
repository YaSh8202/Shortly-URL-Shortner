import React from "react";

const GrayLayout = (props) => {
  return (
    <div className="relative">
      <div className="top-40 -z-10 absolute w-full  bg-lightGray">
        <div className=" relative -top-36" >{props.children}</div>
      </div>
    </div>
  );
};

export default GrayLayout;
