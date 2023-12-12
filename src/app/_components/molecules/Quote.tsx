import localFont from "next/font/local";

import React from "react";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import { InvertedCommas } from "../atoms/icons";

const obviously = localFont({
  src: "../../../../public/fonts/Obviously-Regular.woff2",
  display: "swap",
  variable: "--font-obviously",
});

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Title
        className={`text-center ${obviously.className}`}
        text="we're not designing pages, we're designing systems of components."
      />
      <Paragraph className="text-primary" text="Stephen Hay" />
      <div className="inline-flex w-full items-center justify-center">
        <hr className="h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900">
          <InvertedCommas />
        </div>
      </div>
    </div>
  );
};

export default Quote;
