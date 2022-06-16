import React, { useState } from "react";

export const Link = ({ url, shortedUrl, index }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      key={index}
      className="my-3 bg-white flex items-center px-6 py-4 shadow-lg rounded-md "
    >
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
        }  text-white w-24 py-2 rounded-md`}
      >
        {isClicked ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
