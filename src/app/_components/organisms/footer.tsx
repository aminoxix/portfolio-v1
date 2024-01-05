"use client";

import Link from "next/link";
import React, { useState } from "react";

import Paragraph from "../atoms/paragraph";
import SharedBar from "../atoms/shared-bar";

import { IoIosSend } from "react-icons/io";
import { SiPolywork } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [message, setMessage] = useState<string>("");

  const handleClick = () => {
    // console.log("your message:", message);
    setMessage("");
  };
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full flex-col items-center gap-1">
        <Paragraph className="text-white" text="have a nice day!" />
        <SharedBar
          containerClassName="w-full md:w-[300px] relative"
          innerContainerClassName="bg-black"
        >
          <input
            value={message}
            placeholder="feel free to say 'hi'..."
            onChange={(e) => setMessage(e.currentTarget.value)}
            className="h-[45px] w-full rounded-full bg-black px-2 text-white focus:outline-none"
          />
          <button onClick={handleClick}>
            <IoIosSend className="absolute right-4 top-3 h-8 w-8 text-primary" />
          </button>
        </SharedBar>
      </div>
      <SharedBar containerClassName="w-[200px]">
        <div className="flex w-full items-center justify-between px-4">
          <Link target="_blank" href="https://twitter.com/aminoxix">
            <FaSquareXTwitter className="h-7 w-7 md:h-9 md:w-9" />
          </Link>
          <Link target="_blank" href="https://polywork.com/aminoxix">
            <SiPolywork className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
          <Link target="_blank" href="https://linkedin.com/in/aminoxix">
            <IoLogoLinkedin className="h-7 w-7 md:h-9 md:w-9" />
          </Link>
        </div>
      </SharedBar>
    </div>
  );
};

export default Footer;
