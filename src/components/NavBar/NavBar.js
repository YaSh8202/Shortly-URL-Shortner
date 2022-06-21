import React from "react";
import { Menu } from "../UI/AllSvgs";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=" relative lg:w-9/12 w-11/12  m-auto mt-6 flex items-center justify-between lg:justify-start">
      <h2 className="text-3xl font-bold text-veryDarkBlue mr-8 ">
        Shortly
      </h2>
      <div className="lg:hidden" >
        <button onClick={()=>{setIsOpen(prev=>!prev)}} ><Menu  /></button>
      </div>
      <MobileNav className={`${isOpen?"visible":"invisible"} top-14`} />
      <nav className="hidden lg:flex text-sm font-bold  flex-1 justify-between  items-center container ">
        <div>
          <ul className="flex gap-6 items-center text-grayishViolet">
            <li>
              <a
                href="/"
                className="inline-block cursor-pointer hover:text-veryDarkBlue"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="font-bold text-sm text-right col-span-2 space-x-8">
          <a
            href="/"
            className="cursor-pointer w-10 hover:text-veryDarkBlue hover:font-bold text-grayishViolet"
          >
            Login
          </a>
          <button className="font-bold text-white bg-cyan text-xs rounded-full px-4 py-2 hover:opacity-70 ">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
