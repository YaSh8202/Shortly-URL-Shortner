import React from "react";

const GrayLayout = (props) => {
  return (
    <div id="layout" className="relative">
      <div className="top-52 -z-4 absolute w-full  bg-lightGray">
        <div className="z-10 relative -top-24" >{props.children}</div>
      </div>
    </div>
  );
};

export default GrayLayout;
