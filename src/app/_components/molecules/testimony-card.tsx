import React from "react";
import Image from "next/image";

import { obviously } from "../lib/utils";
import type { Testimonial } from "@prisma/client";

import Subtitle from "../atoms/subtitle";
import Description from "../atoms/description";
import { useScreenWidth } from "../hooks/useScreenWidth";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const TestimonyCard = ({
  testimonial,
  active,
  setActive,
  testimonials,
}: {
  testimonial: Testimonial;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  testimonials: Testimonial[];
}) => {
  const screenWidth = useScreenWidth();

  return (
    <div className="relative flex w-full shrink-0 flex-col items-center justify-around gap-8 rounded-xl border-4 border-double border-secondary bg-secondary bg-opacity-10 bg-clip-padding px-5 py-3 text-secondary backdrop-blur-sm backdrop-filter md:h-56 md:w-[800px] md:px-12 md:py-2">
      <p className={`text-justify text-sm md:text-base ${obviously.className}`}>
        {testimonial.testimony}
      </p>
      <div className="flex w-full items-center justify-end gap-2 md:gap-4">
        <Image
          width={screenWidth < 770 ? 35 : 45}
          height={screenWidth < 770 ? 50 : 70}
          src={testimonial.picture}
          alt={testimonial.name}
        />
        <div className="flex flex-col">
          <Subtitle className="text-white" text={testimonial.name} />
          <Description text={testimonial.position} />
        </div>
      </div>
      <button
        onClick={() => setActive((prev) => (prev === 0 ? 0 : prev - 1))}
        className="absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-2 focus:outline-none md:px-4"
      >
        <IoIosArrowDropleft className="h-5 w-5 md:h-7 md:w-7" />
      </button>
      <button
        onClick={() => {
          setActive((prev) => {
            return prev === testimonials.length - 1 ? 0 : prev + 1;
          });
          // if (active === testimonials.length - 1) {
          //   setTimeout(() => {
          //     setActive(0);
          //   }, 500);
          // }
        }}
        className="absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-2 focus:outline-none md:px-4"
      >
        <IoIosArrowDropright className="h-5 w-5 md:h-7 md:w-7" />
      </button>
    </div>
  );
};

export default TestimonyCard;
