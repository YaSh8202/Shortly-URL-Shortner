import React, { useRef, useState } from "react";
import { FormBGMobile, LinkBg } from "../UI/AllSvgs";
import toast, { Toaster } from "react-hot-toast";

const ShortnerForm = ({shortedUrls, onNewUrl }) => {
  const inputRef = useRef();
  const [emptyInput, setEmptyInput] = useState(false);

  const findUrl = (url)=>{
    return shortedUrls.find(link=>link.url===url);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    const shortToast = toast.loading("Shortening your link...");
    if (url.length === 0) {
      setEmptyInput(true);
      setTimeout(() => {
        setEmptyInput(false);
      }, 3000);
      toast.error("Please enter a valid URL", { id: shortToast });
      return;
    }
    if(findUrl(url)){
      toast.error("This link has already been shortened", { id: shortToast });
      return ;
    }

    
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}/`);
    const data = await res.json();
    if (res.ok) {
      inputRef.current.value = "";
      onNewUrl((prev) => {
        localStorage.setItem(
          "shortedUrls",
          JSON.stringify([
            { url, shortedUrl: data.result.full_short_link },
            ...prev,
          ])
        );
        return [{ url, shortedUrl: data.result.full_short_link }, ...prev];
      });

      toast.success("Your link has been shortened!", { id: shortToast }); 
    }
    else{
      toast.error("link can't be shortened", { id: shortToast });
    }
  };

  return (
    <div className="py-8  md:py-7 flex md:items-center h-4/5 mt-0 lg:mt-14 m-auto w-[85%]  lg:w-9/12 relative">
      <Toaster />
      <LinkBg
        height={145}
        className="md:block hidden rounded-lg absolute -z-10 w-full bg-dark_voilte "
      />
      <FormBGMobile
        height={170}
        className="md:hidden rounded-lg absolute -z-10 w-full bg-dark_voilte "
      />
      <form className=" h-8 mt-7 mb-12 md:mt-0 md:mb-0 md:w-full m-auto md:mx-0 w-[85%] md:pr-12 flex md:flex-row flex-col  md:items-center space-x-2  ">
        <input
          ref={inputRef}
          placeholder="Shorten a link here..."
          className={`${
            emptyInput ? "outline-red/60 placeholder:text-red/60 " : ""
          } outline-none rounded-md py-3 px-3 md:px-6 md:py-4 text-base md:text-lg placeholder:text-gray md:ml-12 md:mr-4 inline-block flex-1 mb-6 md:mb-0 `}
          type="text"
        />
        <button
          style={{ marginLeft: 0 }}
          onClick={handleSubmit}
          className="relative bg-cyan rounded-lg md:px-12 md:py-4 px-8 py-3 font-bold text-lg hover:opacity-90 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 text-white before:-z-10  duration-200 before:rounded-lg "
        >
          Shorten it
        </button>
      </form>
      {emptyInput && (
        <div className="absolute text-red text-sm top-[6.8rem] left-8 md:top-[78px] md:left-12 brightness-75 ">
          Please add a link
        </div>
      )}
    </div>
  );
};

export default ShortnerForm;
