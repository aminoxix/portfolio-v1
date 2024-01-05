"use client";

import React from "react";
import Link from "next/link";

import type { Testimonial } from "@prisma/client";

import TestimonyCard from "./testimony-card";
import { IoIosAddCircle } from "react-icons/io";

const TestimonialContainer = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <TestimonyCard testimonial={testimonial} />
        </div>
      ))}
      <Link
        href={"/testimony/new"}
        className="flex h-[300px] w-full cursor-pointer flex-col items-center justify-center gap-16 rounded-xl border-4 border-dashed border-secondary bg-primary bg-opacity-10 bg-clip-padding p-3 backdrop-blur-sm backdrop-filter"
      >
        <IoIosAddCircle className="h-14 w-14 text-primary" />
      </Link>
    </div>
  );
};

export default TestimonialContainer;
