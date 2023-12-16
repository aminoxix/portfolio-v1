import React from "react";
import { obviously } from "../lib/utils";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <p className={`text-2xl md:text-4xl ${obviously.className} ${className}`}>
      {text}
    </p>
  );
};

export default Title;
