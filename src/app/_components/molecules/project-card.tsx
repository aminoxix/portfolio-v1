import React from "react";
import Link from "next/link";

import { GiThorHammer } from "react-icons/gi";

import Subtitle from "../atoms/subtitle";
import type { PinnedRepo } from "../lib/type";
import Description from "../atoms/description";

const ProjectCard = ({ repo }: { repo: PinnedRepo }) => {
  return (
    <Link
      key={repo.name}
      target="_blank"
      href={repo.homepageUrl}
      className="flex cursor-pointer flex-col justify-between gap-16 rounded-xl border-4 border-secondary bg-primary bg-opacity-10 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter"
    >
      <div className="flex flex-col">
        <Subtitle text={repo.name} />
        <Description text={repo.description} />
      </div>
      <div className="flex items-center gap-2">
        <GiThorHammer className="h-6 w-6 text-white" />
        <p className="text-xs md:text-sm">{repo.primaryLanguage.name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
