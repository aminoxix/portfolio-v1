import React from "react";
import Image from "next/image";

import { env } from "~/env";
import { query } from "./_components/lib/utils";
import type { APIResponse } from "./_components/lib/type";

import Title from "./_components/atoms/Title";
import SharedBar from "./_components/atoms/SharedBar";
import Paragraph from "./_components/atoms/Paragraph";
import Experience from "./_components/molecules/Experience";
import ProjectCard from "./_components/molecules/ProjectCard";

import { BiLogoTypescript } from "react-icons/bi";
import { SiTrpc, SiNextdotjs, SiPrisma } from "react-icons/si";
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import Link from "next/link";

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
    <main className="flex flex-col items-center justify-center gap-14 bg-gradient-to-b px-9 text-white md:px-[150px] xl:px-[300px] 2xl:px-[400px]">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <Title text="hi." />
          <Paragraph
            text="anshumaan aka 'aminos' is a frontend developer by profession & a
            community builder by passion."
          />
          <Paragraph
            text="he is an awesome individual who enjoys engaging with community
            folks, and committed to supporting beginners who are making strides
            in the field of technology."
          />
        </div>
        <Image
          src={"/images/aminoxix.png"}
          className="shrink-0"
          alt="logo"
          width={250}
          height={200}
        />
      </div>
      <SharedBar containerWidth="w-full">
        <div className="flex w-full items-center justify-between overflow-y-scroll px-4">
          <Link target="_blank" href="https://react.dev">
            <RiReactjsLine className="h-10 w-10 text-black" />
          </Link>
          <Link target="_blank" href="https://www.typescriptlang.org">
            <BiLogoTypescript className="h-11 w-11 text-black" />
          </Link>
          <Link target="_blank" href="https://trpc.io">
            <SiTrpc className="h-9 w-9 text-black" />
          </Link>
          <Link target="_blank" href="https://nextts.org">
            <SiNextdotjs className="h-9 w-9 text-black" />
          </Link>
          <Link target="_blank" href="https://www.javascript.com">
            <RiJavascriptFill className="h-11 w-11 text-black" />
          </Link>
          <Link target="_blank" href="https://www.prisma.io">
            <SiPrisma className="h-9 w-9 text-black" />
          </Link>
        </div>
      </SharedBar>
      <div className="flex w-full flex-col gap-8">
        <Title text="things I've built" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects?.data?.user?.pinnedItems?.nodes?.map((repo, index) => (
            <ProjectCard key={index} repo={repo} />
          ))}
        </div>
      </div>
      <Experience />
    </main>
  );
}
