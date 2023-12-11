"use client";

import React, { useState } from "react";
import SharedBar from "../atoms/SharedBar";

import { IoIosSend } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LinkedInIcon, PolyworkIcon } from "../atoms/icons";
import Link from "next/link";

const Footer = () => {
  const [message, setMessage] = useState<string>("");

  const handleClick = () => {
    console.log("your message:", message);
    setMessage("");
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <SharedBar
        containerWidth="w-[300px] relative"
        innerContainerBackgroundColor="bg-black"
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
      <SharedBar containerWidth="w-[200px]">
        <div className="flex w-full items-center justify-between px-4">
          <Link target="_blank" href="https://twitter.com/aminoxix">
            <AiFillTwitterCircle className="h-10 w-10" />
          </Link>
          <Link target="_blank" href="https://polywork.com/aminoxix">
            <PolyworkIcon />
          </Link>
          <Link target="_blank" href="https://linkedin.com/in/aminoxix">
            <LinkedInIcon className="h-10 w-10" />
          </Link>
        </div>
      </SharedBar>
    </div>
  );
};

export default Footer;
