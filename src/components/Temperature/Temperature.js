import React from "react";

const Temperature = ({ value, className }) => {
  return <div className={className}>{value}°</div>;
};

export default Temperature;
