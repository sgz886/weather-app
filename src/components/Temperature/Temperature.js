import React from "react";

const Temperature = ({ value, className, isLoading }) => {
  return <div className={className}>{isLoading ? "..." : `${value}°`}</div>;
};

export default Temperature;