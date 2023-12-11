import React from "react";
import Link from "next/link";

import type { PinnedRepo } from "../lib/type";
import { GiThorHammer } from "react-icons/gi";

const ProjectCard = ({ repo }: { repo: PinnedRepo }) => {
  return (
    <Link
      key={repo.name}
      target="_blank"
      href={repo.homepageUrl}
      className="flex cursor-pointer flex-col justify-between gap-16 rounded-xl border-4 border-secondary p-3"
    >
      <div className="flex flex-col">
        <p className="text-sm text-primary md:text-lg">{repo.name}</p>
        <p className="text-xs md:text-sm">{repo.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <GiThorHammer className="h-6 w-6 text-white" />
        <p className="text-xs md:text-sm">{repo.primaryLanguage.name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
