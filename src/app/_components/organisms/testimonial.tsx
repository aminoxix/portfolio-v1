import React from "react";
import Link from "next/link";

import { IoIosAddCircle } from "react-icons/io";

import { api } from "~/trpc/server";
import Carousel from "../molecules/carousel";

const Testimonial = async () => {
  const testimonials = await api.testimonial.getAllVerified.query();

  return (
    // <div className="scrollbar-hide relative flex w-full gap-6 overflow-x-scroll rounded-lg">
    <div>
      <Carousel testimonials={[...testimonials, testimonials[0]!]} />
      <Link
        href={"/testimony/new"}
        className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-8 rounded-xl border-4 border-double border-secondary bg-secondary bg-opacity-10 bg-clip-padding px-5 py-3 text-secondary backdrop-blur-sm backdrop-filter md:h-64 md:w-[800px] md:px-12 md:py-8"
      >
        <IoIosAddCircle className="h-14 w-14 text-primary" />
      </Link>
    </div>
  );
};

export default Testimonial;
