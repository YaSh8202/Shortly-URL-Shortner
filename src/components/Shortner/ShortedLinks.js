import React from "react";
import { Link } from "./Link";

const ShortedLinks = ({ links,removeLink }) => {
  return (
    <div className="lg:w-9/12 w-[85%] m-auto mt-10 ">
      {links.map(({ url, shortedUrl }, index) => (
        <Link key={url} url={url} shortedUrl={shortedUrl} removeLink={removeLink} />
      ))}
    </div>
  );
};

export default ShortedLinks;
