import React, { useState } from "react";

export const Link = ({ url, shortedUrl }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="my-3 bg-white flex items-center px-6 py-4 shadow-lg rounded-md ">
      <div className="flex flex-1 mr-3 justify-between">
        <div className="">{url}</div>
        <a
          rel="noreferrer"
          target="_blank"
          href={shortedUrl}
          className=" text-cyan "
        >
          {shortedUrl}
        </a>
      </div>
      <button
        onClick={() => {
          setIsClicked(true);
          navigator.clipboard.writeText(shortedUrl);
        }}
        className={`${
          isClicked ? "bg-veryDarkViolet" : "bg-cyan"
        }  text-white w-24 py-2 rounded-md hover:opacity-80 duration-100 `}
      >
        {isClicked ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
