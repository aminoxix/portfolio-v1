import React from "react";

const Subtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p className={`text-sm text-primary md:text-lg ${className}`}>{text}</p>
  );
};

export default Subtitle;
