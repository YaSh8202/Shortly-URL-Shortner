import React from "react";
import { Link } from "./Link";
import FlipMove from "react-flip-move";

const ShortedLinks = ({ links, removeLink }) => {
  return (
    <div className="lg:w-9/12 w-[85%] m-auto mt-10 ">
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {links?.map(({ url, shortedUrl }, index) => (
          <Link
            key={url}
            url={url}
            shortedUrl={shortedUrl}
            removeLink={removeLink}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default ShortedLinks;
