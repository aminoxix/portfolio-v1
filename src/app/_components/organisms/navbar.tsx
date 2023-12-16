"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import SharedBar from "../atoms/shared-bar";
import { useScreenWidth } from "../hooks/useScreenWidth";

const Navbar = () => {
  const screenWidth = useScreenWidth();

  return (
    <div>
      <SharedBar containerWidth="md:w-[200px] w-[190px]">
        <Link
          target="_blank"
          href={"https://github.com/aminoxix"}
          className="flex items-center gap-3 px-2 md:px-1"
        >
          <Image
            loading="eager"
            className="cursor-pointer rounded-full"
            src={"/images/anshumaan.png"}
            alt="anshumaan_picture"
            height={screenWidth < 770 ? 30 : 38}
            width={screenWidth < 770 ? 30 : 38}
          />
          <p className="text-2xl font-semibold">aminoxix</p>
        </Link>
      </SharedBar>
    </div>
  );
};

export default Navbar;
