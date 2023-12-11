import React from "react";

const Title = ({ className, text }: { className?: string; text: string }) => {
  return <p className={`text-2xl md:text-4xl ${className}`}>{text}</p>;
};

export default Title;
