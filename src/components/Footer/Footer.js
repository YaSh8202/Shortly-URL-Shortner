import React from "react";
import { Facebook, Instagram, Pinterest, Twitter } from "../UI/AllSvgs";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:text-left text-center lg:grid-cols-7 bg-veryDarkViolet relative top-28 p-20 gap-10 ">
      <div className="lg:col-span-2 lg:text-left text-center ">
        <h3 className="text-3xl text-white font-bold">Shortly</h3>
      </div>
      <div className="lg:col-span-1 flex flex-col text-Gray text-sm">
        <h4 className="text-white pb-4 font-bold ">Features</h4>
        <div className="text-sm child:cursor-pointer first:cursor-default flex gap-2 flex-col child-hover:text-cyan/70 child:inline ">
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
      </div>
      <div className="lg:col-span-1 flex flex-col text-Gray text-sm">
        <h4 className="text-white pb-4 font-bold ">Resources</h4>
        <div className="text-sm child:cursor-pointer first:cursor-default flex gap-2 flex-col child-hover:text-cyan/70 ">
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
      </div>
      <div className=" lg:col-span-1 flex flex-col text-Gray text-sm ">
        <h4 className=" text-white pb-4 font-bold ">Company</h4>
        <div className="text-sm child:cursor-pointer first:cursor-default flex gap-2 flex-col child-hover:text-cyan/70 ">
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className=" child:cursor-pointer text-center lg:col-span-2 inline-flex  space-x-4 lg:justify-start justify-center  ">
        <Facebook className=" scale-90" />
        <Twitter className=" scale-90" />
        <Pinterest className=" scale-90" />
        <Instagram className=" scale-90" />
      </div>
    </div>
  );
};

export default Footer;
