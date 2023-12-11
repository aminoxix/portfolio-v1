import React from "react";
import Link from "next/link";
import Image from "next/image";

import SharedBar from "../atoms/SharedBar";

const Navbar = () => {
  return (
    <div>
      <SharedBar containerWidth="w-[200px]">
        <Link
          className="flex items-center gap-3 px-1"
          target="_blank"
          href={"https://github.com/aminoxix"}
        >
          <Image
            className="cursor-pointer rounded-full"
            src={"/images/anshumaan.png"}
            alt="anshumaan_picture"
            height={38}
            width={38}
          />
          <p className="text-2xl font-semibold">aminoxix</p>
        </Link>
      </SharedBar>
    </div>
  );
};

export default Navbar;
