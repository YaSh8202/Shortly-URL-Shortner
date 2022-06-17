import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-7 bg-veryDarkViolet relative top-28 p-20 ">
      <div class="col-span-2 text-left ">
        <h3 className="text-3xl text-white font-bold">Shortly</h3>
      </div>
      <div class="col-span-1 flex flex-col text-Gray text-sm gap-2 ">
        <h4 className="text-white pb-2 font-bold " >Features</h4>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div class="col-span-1 flex flex-col text-Gray text-sm gap-2 ">
        <h4 className="text-white pb-2 font-bold " >Resources</h4>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div class="col-span-1 flex flex-col text-Gray text-sm gap-2 ">
        <h4 className="text-white pb-2 font-bold " >Company</h4>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>
      <div className="col-span-2 flex " >
        
      </div>
    </div>
  );
};

export default Footer;
