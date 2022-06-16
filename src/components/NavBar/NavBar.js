import React from "react";

const NavBar = () => {
  return (
    <div className="w-9/12 m-auto mt-6 grid grid-cols-8 items-center">
      <h2 className="col-span-1 text-3xl font-bold text-veryDarkBlue">
        Shortly
      </h2>
      <nav className="text-sm font-bold col-span-5  items-center  ">
        <ul className=" grid grid-cols-7 items-center text-grayishViolet">
          <li>
            <a href="/" className="inline-block cursor-pointer hover:text-veryDarkBlue">
              Features
            </a>  
          </li>
          <li>
            <a href="/" className=" inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold">
              Resources
            </a>
          </li>
        </ul>
      </nav>
      <div className="font-bold text-sm text-right col-span-2 space-x-10">
        <a href="/" className="cursor-pointer w-10 hover:text-veryDarkBlue hover:font-bold text-grayishViolet">
          Login
        </a>
        <button className="font-bold text-white bg-cyan text-xs rounded-full px-4 py-2 hover:opacity-70 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
