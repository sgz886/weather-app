import React from "react";

const BackgroundImage = ({ image, children }) => {
  return <div className="bg-center bg-cover"
              style={{backgroundImage: `url(${image})`}}
  >{children}</div>;
};

export default BackgroundImage;
