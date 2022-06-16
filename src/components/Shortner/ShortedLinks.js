import React from "react";

const ShortedLinks = ({ links }) => {
  return (
    <div className="w-9/12 m-auto mt-10 ">
      {links.map(({ url, shortedUrl },index) => (
        <div key={index} className="my-3 bg-white flex items-center px-6 py-4 shadow-lg rounded-md ">
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
            onClick={() => navigator.clipboard.writeText(shortedUrl)}
            className="bg-cyan text-white px-7  py-2 rounded-md"
          >
            Copy
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShortedLinks;
