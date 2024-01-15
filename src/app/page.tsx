import React from "react";
import Link from "next/link";

import { env } from "~/env";
import { query } from "./_components/lib/utils";
import type { APIResponse } from "./_components/lib/type";

import Title from "./_components/atoms/title";
import Hero from "./_components/organisms/hero";
import Quote from "./_components/organisms/quote";
import SharedBar from "./_components/atoms/shared-bar";
import Experience from "./_components/organisms/experience";
import Testimonial from "./_components/organisms/testimonial";
import ProjectCard from "./_components/molecules/project-card";

import { BiLogoTypescript } from "react-icons/bi";
import { SiTrpc, SiNextdotjs, SiPrisma } from "react-icons/si";
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";

async function getPinnedRepos(): Promise<APIResponse> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const projects: APIResponse = (await res.json()) as APIResponse;
  return projects;
}

export default async function Home() {
  const projects: APIResponse = await getPinnedRepos();

  return (
    <main className="flex flex-col items-center justify-center gap-14 bg-gradient-to-b text-white">
      <Hero />
      <SharedBar containerClassName="w-full md:w-[700px] lg:w-[800px]">
        <div className="flex w-full items-center justify-between px-4">
          <Link target="_blank" href="https://react.dev">
            <RiReactjsLine className="h-7 w-7 text-black md:h-10 md:w-10" />
          </Link>
          <Link target="_blank" href="https://www.typescriptlang.org">
            <BiLogoTypescript className="h-8 w-8 text-black md:h-11 md:w-11" />
          </Link>
          <Link target="_blank" href="https://trpc.io">
            <SiTrpc className="h-6 w-6 text-black md:h-9 md:w-9" />
          </Link>
          <Link target="_blank" href="https://nextts.org">
            <SiNextdotjs className="h-6 w-6 text-black md:h-9 md:w-9" />
          </Link>
          <Link target="_blank" href="https://www.javascript.com">
            <RiJavascriptFill className="h-8 w-8 text-black md:h-11 md:w-11" />
          </Link>
          <Link target="_blank" href="https://www.prisma.io">
            <SiPrisma className="h-6 w-6 text-black md:h-9 md:w-9" />
          </Link>
        </div>
      </SharedBar>
      <div className="flex w-full flex-col gap-8 md:w-[700px] lg:w-[800px]">
        <Title text="things I've built" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects?.data?.user?.pinnedItems?.nodes?.map((repo, index) => (
            <ProjectCard key={index} repo={repo} />
          ))}
        </div>
      </div>
      <Quote />
      <Experience />
      <div className="flex w-full flex-col gap-8 md:w-[700px] lg:w-[800px]">
        <Title text="echoes from collaborations" />
        <Testimonial />
      </div>
    </main>
  );
}
