"use client";

import React, { useState } from "react";
import SharedBar from "../atoms/SharedBar";

import { CgCommunity } from "react-icons/cg";
import { IoRocketSharp } from "react-icons/io5";
import Timeline from "../atoms/Timeline";

const Experience = () => {
  const [toggleTimeline, setToggleTimeline] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <SharedBar
        containerWidth={`${toggleTimeline ? "w-[250px]" : "w-[300px]"}`}
      >
        <button
          className="flex w-full items-center justify-center gap-2"
          onClick={() => setToggleTimeline((prev) => !prev)}
        >
          <p className="text-sm font-semibold text-black md:text-lg">
            {toggleTimeline ? "work experience" : "community interaction"}
          </p>
          <div className="text-black">
            {toggleTimeline ? (
              <IoRocketSharp className="h-6 w-6" />
            ) : (
              <CgCommunity className="h-6 w-6" />
            )}
          </div>
        </button>
      </SharedBar>
      <Timeline toggleTimeline={toggleTimeline} />
    </div>
  );
};

export default Experience;
