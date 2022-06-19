import React from "react";
import { Link } from "./Link";

const ShortedLinks = ({ links }) => {
  return (
    <div className="w-9/12 m-auto mt-10 ">
      {links.map(({ url, shortedUrl }, index) => (
        <Link key={index} url={url} shortedUrl={shortedUrl}/>
      ))}
    </div>
  );
};

export default ShortedLinks;
