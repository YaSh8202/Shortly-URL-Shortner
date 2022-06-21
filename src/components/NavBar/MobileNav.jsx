import React from "react";

const MobileNav = (props) => {
  return (
    <div
      className={` rounded-lg z-20 w-full py-10 m-auto absolute bg-dark_voilte flex flex-col text-white font-bold ${props.className}`}
    >
      <div className="flex flex-col items-center child:cursor-pointer gap-6 text-base border-b border-b-Gray/25 mx-8 pb-6 ">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className="mx-8 flex flex-col items-center child:cursor-pointer gap-6 text-base pt-6  ">
        <p>Login</p>
        <button className="  font-bold w-full text-white bg-cyan text-md rounded-full px-4 py-3 hover:opacity-70 ">
            Sign Up
          </button>
      </div>
    </div>
  );
};

export default MobileNav;
