import Image from "next/image";
import React from "react";
import { obviously } from "../lib/utils";

const Testimonial = () => {
  return (
    <div className="flex w-full items-center justify-around rounded-xl border-4 border-dashed border-secondary bg-secondary bg-opacity-10 bg-clip-padding p-8 text-secondary backdrop-blur-sm backdrop-filter md:p-12">
      <div></div>
      <Image
        alt="testimonial"
        src={"/images/testimonial.png"}
        width={100}
        height={100}
      />
      <p
        className={`w-40 text-center text-2xl font-semibold md:text-4xl ${obviously.className}`}
      >
        Coming Soon
      </p>
      <div></div>
    </div>
  );
};

export default Testimonial;
