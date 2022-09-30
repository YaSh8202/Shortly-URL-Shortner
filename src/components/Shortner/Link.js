import React, { useState, forwardRef } from "react";

export const Link = forwardRef((props, ref) => {
  const [isClicked, setIsClicked] = useState(false);
  const { url, shortedUrl, removeLink } = props;
  return (
    <div
      ref={ref}
      className="my-4 box-border bg-white flex flex-col lg:flex-row lg:items-center items-start px-0 py-0 lg:px-6 lg:py-3 shadow-lg rounded-md "
    >
      <div className=" whitespace-nowrap overflow-hidden overflow-ellipsis border-b-2 flex-1 border-lightGray lg:border-0 py-3.5 lg:py-0 px-3 text-sm lg:text-base w-full ">
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
        }  text-white lg:mb-0 lg:w-24 py-2 text-sm rounded-md font-semibold hover:opacity-80 duration-100 w-[calc(100%-1.5rem)] mx-auto mb-3.5   `}
      >
        {isClicked ? "Copied!" : "Copy"}
      </button>
      {isClicked && (
        <button
          onClick={() => {
            removeLink({ url, shortedUrl });
          }}
          className="bg-red/90 text-white lg:w-24 py-2 text-sm rounded-md font-semibold lg:mb-0 hover:opacity-80 hover:bg-red duration-100 w-[calc(100%-1.5rem)] mx-auto mb-3.5 lg:ml-2  "
        >
          Delete
        </button>
      )}
    </div>
  );
});
