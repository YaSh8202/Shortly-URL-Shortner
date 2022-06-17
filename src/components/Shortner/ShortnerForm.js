import React, { useRef, useState } from "react";
import { LinkBg } from "../UI/AllSvgs";

const ShortnerForm = ({ onNewUrl }) => {
  const inputRef = useRef();
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    if (url.length === 0) {
      setEmptyInput(true);
      setTimeout(() => {
        setEmptyInput(false);
      }, 3000);
      return;
    }
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}/`);
    const data = await res.json();
    if (res.ok) {
      onNewUrl((prev) => {
        localStorage.setItem(
          "shortedUrls",
          JSON.stringify([
            ...prev,
            { url, shortedUrl: data.result.full_short_link },
          ])
        );
        return [...prev, { url, shortedUrl: data.result.full_short_link }];
      });
    }
  };

  return (
    <div className="py-8 flex items-center h-4/5 mt-12 m-auto  w-9/12 relative">
      <LinkBg
        height={145}
        className=" rounded-lg absolute -z-10 w-full bg-dark_voilte "
      />
      <form className="h-8 w-full pr-12 flex items-center space-x-2">
        <input
          ref={inputRef}
          placeholder="Shorten a link here..."
          className={`${
            emptyInput ? "outline-red/60 placeholder:text-red/60 " : ""
          } outline-none  rounded-md px-6 py-4 text-lg placeholder:text-gray ml-12 mr-4 inline-block flex-1`}
          type="text"
        />
        <button
          onClick={handleSubmit}
          className=" bg-cyan rounded-lg px-12 py-4 font-bold text-lg hover:opacity-60 text-white hover:brightness-150 "
        >
          Shorten it!
        </button>
      </form>
      {emptyInput && (
        <div className="absolute text-red text-sm -bottom-2 left-12 brightness-75 ">
          Please add a link
        </div>
      )}
    </div>
  );
};

export default ShortnerForm;
