import React from "react";

const Description = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-xs md:text-sm ${className}`}>{text}</p>;
};

export default Description;
