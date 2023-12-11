import Image from "next/image";
import React from "react";

const workExperience = [
  {
    track: 1,
    icon: "/images/getmicro-76.png",
    name: "micro.",
    description: "fractional investment",
    tenure: "3",
    role: "tech intern",
    tech_stack: ["mern stack", "digital ocean"],
  },
  {
    track: 2,
    icon: "/images/pillar-76.png",
    name: "pillar @ etherspot",
    description: "decentralized finance",
    tenure: "6",
    role: "junior frontend developer",
    tech_stack: ["typescript", "react", "etherspot sdk"],
  },
  {
    track: 3,
    icon: "/images/xamtac-76.png",
    name: "xamtac consulting",
    description: "marketing agency",
    tenure: "present",
    role: "frontend developer",
    tech_stack: ["t3 stack", "prisma orm"],
  },
];

const communityInteraction = [
  {
    track: 1,
    icon: "/images/gce-76.png",
    name: "campus expert",
    description: "github",
    tenure: "6",
  },

  {
    track: 2,
    icon: "/images/postman-76.png",
    name: "student leader",
    description: "postman",
    tenure: "present",
  },
  {
    track: 3,
    icon: "/images/devstrons-76.png",
    name: "founding member",
    description: "devstrons (open source)",
    tenure: "present",
  },
];

const Timeline = ({ toggleTimeline }: { toggleTimeline: boolean }) => {
  const timelineData = toggleTimeline ? communityInteraction : workExperience;
  return (
    <div className="flex w-full flex-col items-center pb-10 md:pb-5">
      {timelineData.map((timeline) => (
        <>
          {/* Timeline */}
          <div>
            {/* Above line */}
            <div className="pl-8">
              <div
                className={`h-7 border-l-2 border-dashed border-primary ${
                  timeline.track === 1 && "invisible"
                }`}
              ></div>
            </div>
            {/* Avatar */}
            <div className="relative flex items-center">
              <Image
                src={timeline.icon}
                alt={timeline.name}
                width={70}
                height={70}
              />
              <div
                key={timeline.name}
                className={`absolute flex w-28 flex-col gap-10 rounded-xl border-4 border-secondary p-3 md:w-[350px] ${
                  timeline.track % 2 === 0
                    ? toggleTimeline
                      ? "left-20 md:left-24"
                      : "right-20 md:right-24"
                    : toggleTimeline
                      ? "right-20 md:right-24"
                      : "left-20 md:left-24"
                }`}
              >
                <div className="flex flex-col">
                  <p className="text-sm text-primary md:text-lg">
                    {timeline.name}
                  </p>
                  <p className="text-xs md:text-sm">{timeline.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-secondary md:text-sm">
                    {timeline.tenure}{" "}
                    {timeline.tenure !== "present" && "months"}
                  </p>
                </div>
              </div>
            </div>
            {/* Below line */}
            <div className="pl-8">
              <div
                className={`h-5 border-l-2 border-dashed border-primary ${
                  workExperience.length === timeline.track && "invisible"
                }`}
              ></div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Timeline;
