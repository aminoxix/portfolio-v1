import React from "react";
import Link from "next/link";
import Image from "next/image";

import { obviously } from "../lib/utils";
import type { Testimonial } from "@prisma/client";

import Subtitle from "../atoms/subtitle";
import Description from "../atoms/description";
import { useScreenWidth } from "../hooks/useScreenWidth";

const TestimonyCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const screenWidth = useScreenWidth();

  return (
    <div className="flex min-h-[303px] w-full cursor-pointer flex-col justify-between gap-16 rounded-xl border-4 border-double border-secondary bg-primary bg-opacity-10 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter md:h-[388px] md:p-7">
      <p className={`text-justify text-sm md:text-base ${obviously.className}`}>
        {testimonial.testimony.toLowerCase()}
      </p>
      <div className="flex w-full items-center justify-end gap-2 md:gap-4">
        <Image
          loading="eager"
          className="rounded-md"
          alt={testimonial.name}
          src={testimonial.picture}
          width={screenWidth < 770 ? 35 : 45}
          height={screenWidth < 770 ? 50 : 70}
        />
        <div className="flex flex-col">
          <Link href={testimonial.social} target="_blank">
            <Subtitle
              className="text-primary"
              text={testimonial.name.toLowerCase()}
            />
          </Link>
          <Description text={testimonial.position.toLowerCase()} />
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
