import React, { useState } from "react";

export const Link = ({ url, shortedUrl }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="my-4 box-border bg-white flex flex-col lg:flex-row lg:items-center items-start px-0 py-0 lg:px-6 lg:py-3 shadow-lg rounded-md ">
      <div className="border-b-2 flex-1 border-lightGray lg:border-0 py-3.5 lg:py-0 px-3 text-sm lg:text-base w-full ">
        {url}
      </div>
      <a
        rel="noreferrer"
        target="_blank"
        href={shortedUrl} 
        className=" text-cyan lg:mr-4 px-3 lg:px-0 py-2.5 lg:py-0 text-sm lg:text-base "
      >
        {shortedUrl}
      </a>
      <button
        onClick={() => {
          setIsClicked(true);
          navigator.clipboard.writeText(shortedUrl);
        }}
        className={`${
          isClicked ? "bg-veryDarkViolet" : "bg-cyan"
        }  text-white lg:w-24 py-2 text-sm rounded-md font-semibold hover:opacity-80 duration-100 w-11/12 mx-auto mb-3.5   `}
      >
        {isClicked ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
