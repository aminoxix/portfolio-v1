import Image from "next/image";

import Description from "../atoms/description";
import Subtitle from "../atoms/subtitle";

import Link from "next/link";
import { communityInteraction, workExperience } from "../lib/data";

const Timeline = ({ toggleTimeline }: { toggleTimeline: boolean }) => {
  const timelineData = toggleTimeline ? communityInteraction : workExperience;
  return (
    <div className="flex w-full flex-col items-center">
      {timelineData.map((timeline, index) => {
        const isCommunity =
          timeline.name === "campus expert" ||
          timeline.name === "student leader" ||
          timeline.name === "founding member" ||
          timeline.name === "founder";
        return (
          <div key={index}>
            {/* Timeline */}
            <div>
              {/* Above line */}
              <div className="pl-8">
                <div
                  className={`h-8 border-l-2 border-dashed border-primary ${
                    timeline.track === 1 && "invisible"
                  }`}
                ></div>
              </div>
              {/* Avatar */}
              <div className="relative flex items-center">
                <Image
                  loading="eager"
                  src={timeline.icon}
                  alt={timeline.name}
                  width={70}
                  height={70}
                />
                <Link
                  key={timeline.name}
                  href={!isCommunity ? `/company/${timeline.track}` : {}}
                  className={`absolute flex w-36 flex-grow ${
                    !isCommunity && "cursor-pointer"
                  } flex-col gap-5 rounded-xl p-5 md:w-48 ${
                    timeline.track % 2 === 0
                      ? toggleTimeline
                        ? "left-20 md:left-24"
                        : "right-14 md:right-24"
                      : toggleTimeline
                        ? "right-14 md:right-24"
                        : "left-20 md:left-24"
                  }`}
                >
                  <div className="flex flex-col">
                    <Subtitle text={timeline.name} />
                    <Description text={timeline.description} />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-secondary md:text-sm">
                      {timeline.tenure}{" "}
                      {timeline.tenure !== "present" && "months"}
                    </p>
                  </div>
                </Link>
              </div>
              {/* Below line */}
              <div className="pl-8">
                <div
                  className={`h-9 border-l-2 border-dashed border-primary ${
                    timelineData.length === timeline.track && "invisible"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
