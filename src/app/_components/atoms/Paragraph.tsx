import React from "react";

const Paragraph = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <p className={`text-justify text-sm md:text-base ${className}`}>{text}</p>
  );
};

export default Paragraph;
