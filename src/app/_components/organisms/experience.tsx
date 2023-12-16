"use client";

import React, { useEffect, useState } from "react";
import SharedBar from "../atoms/shared-bar";
import Timeline from "../molecules/timeline";

import { CgCommunity } from "react-icons/cg";
import { GiPartyPopper } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

import { api } from "~/trpc/react";
import TsParticle from "../atoms/tsparticles";

const Experience = () => {
  const [toggleTimeline, setToggleTimeline] = useState<boolean>(false);
  const [toggleParticleOptions, setToggleParticleOptions] =
    useState<boolean>(false);
  const [isHovering, setIsHovering] = useState(false);

  const { data: allClicks, refetch } = api.click.getCount.useQuery();

  const { mutate: createClick } = api.click.create.useMutation({
    onSuccess: () => {
      void refetch();
      setToggleParticleOptions(true);
    },
  });

  const { mutate: updateClick } = api.click.update.useMutation({
    onSuccess: () => {
      void refetch();
      setToggleParticleOptions(true);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setToggleParticleOptions(false);
    }, 10000);
  }, [toggleParticleOptions]);

  return (
    <div className="flex w-full flex-col items-center">
      <TsParticle toggleParticleOptions={toggleParticleOptions} />

      <div className="flex flex-col gap-12">
        <SharedBar
          containerWidth={`${toggleTimeline ? "w-[250px]" : "w-[300px]"}`}
        >
          <button
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            className="relative flex w-full items-center justify-center gap-2"
            onClick={() => {
              setToggleTimeline((prev) => !prev);
              allClicks && allClicks?.count !== 0
                ? updateClick({
                    id: allClicks.id,
                    total: allClicks.count + 1,
                  })
                : createClick({
                    total: 1,
                  });
            }}
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

            {isHovering && (
              <div className="absolute -bottom-12 flex items-center gap-2">
                <GiPartyPopper className="h-5 w-5" />
                {allClicks?.count ?? 0} clicks!
              </div>
            )}
          </button>
        </SharedBar>

        <Timeline toggleTimeline={toggleTimeline} />
      </div>
    </div>
  );
};

export default Experience;
