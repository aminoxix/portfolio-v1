import React from "react";

import { InvertedCommas } from "../icons";

import Title from "../atoms/title";
import Paragraph from "../atoms/paragraph";

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Title
        className="text-center"
        text="we're not designing pages, we're designing systems of components."
      />
      <Paragraph className="text-primary" text="Stephen Hay" />
      <div className="inline-flex w-full items-center justify-center">
        <hr className="h-1 w-64 rounded border-0 bg-gray-200 dark:bg-secondary" />
        <div className="absolute left-1/2 -translate-x-1/2 bg-black px-4">
          <InvertedCommas />
        </div>
      </div>
    </div>
  );
};

export default Quote;
