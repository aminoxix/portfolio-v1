"use client";

import React from "react";
import Image from "next/image";
import Title from "../atoms/title";
import Paragraph from "../atoms/paragraph";
import { useScreenWidth } from "../hooks/useScreenWidth";

const Hero = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
      <div className="flex w-full flex-col gap-8 md:w-1/2">
        <Title text="hi." />
        <Paragraph
          text="anshumaan aka 'aminos' is a frontend developer by profession & a
            community builder by passion."
        />
        <Paragraph text="an individual who enjoys engaging with community folks, and casually talks about web & hackathons." />
      </div>
      <div className="rounded-full bg-primary bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter">
        <Image
          alt="logo"
          width={screenWidth < 770 ? 200 : 250}
          height={screenWidth < 770 ? 150 : 200}
          quality={100}
          loading="eager"
          className="shrink-0"
          src={"/images/aminoxix.png"}
        />
      </div>
    </div>
  );
};

export default Hero;
