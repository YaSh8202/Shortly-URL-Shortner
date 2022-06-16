import React from "react";

const GrayLayout = (props) => {
  return (
    <div className="relative">
      <div className="top-44 -z-4 absolute w-full  bg-lightGray">
        <div className="z-10 relative -top-24" >{props.children}</div>
      </div>
    </div>
  );
};

export default GrayLayout;
