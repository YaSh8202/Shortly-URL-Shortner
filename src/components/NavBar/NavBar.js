import React from "react";

const NavBar = () => {
  return (
    <div className="w-4/5 m-auto mt-4 grid grid-cols-8 items-center">
      <h2 className="col-span-1 text-3xl font-bold text-veryDarkBlue">
        Shortly
      </h2>
      <nav className=" col-span-5  items-center  ">
        <ul className=" font-body grid grid-cols-7 items-center text-grayishViolet">
          <li>
            <button className="inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold">
              Features
            </button>
          </li>
          <li>
            <button className=" inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold">
              Pricing
            </button>
          </li>
          <li>
            <button className="inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold">
              Resources
            </button>
          </li>
        </ul>
      </nav>
      <div className=" col-span-2 flex items-center space-x-5">
        <button className="cursor-pointer w-10 hover:text-veryDarkBlue hover:font-bold text-grayishViolet">
          Login
        </button>
        <button className=" text-white bg-cyan text-sm rounded-full px-4 py-1 hover:opacity-70 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
