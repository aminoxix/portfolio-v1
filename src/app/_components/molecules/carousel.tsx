"use client";

import React, { useEffect, useState } from "react";
import type { Testimonial } from "@prisma/client";
import TestimonyCard from "./testimony-card";

const Carousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [active, setActive] = useState<number>(0);

  return (
    // // state changer
    // <div className="relative flex w-full shrink-0 cursor-pointer items-center justify-center rounded-xl border-4 border-double border-secondary bg-secondary bg-opacity-0 bg-clip-padding px-5 py-3 text-secondary backdrop-blur-sm backdrop-filter md:h-64 md:w-[800px] md:px-12 md:py-8">
    //   {testimonials.map((testimonial, index) => (
    //     <div key={testimonial.id}>
    //       {active === index && <TestimonyCard testimonial={testimonial} />}
    //     </div>
    //   ))}
    //   <button
    //     onClick={() => setActive((prev) => (prev === 0 ? 0 : prev - 1))}
    //     className="absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-2 focus:outline-none md:px-4"
    //   >
    //     <IoIosArrowDropleft className="h-5 w-5 md:h-7 md:w-7" />
    //   </button>
    //   <button
    //     onClick={() =>
    //       setActive((prev) =>
    //         testimonials
    //           ? prev === testimonials.length - 1
    //             ? testimonials.length - 1
    //             : prev + 1
    //           : 0,
    //       )
    //     }
    //     className="absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-2 focus:outline-none md:px-4"
    //   >
    //     <IoIosArrowDropright className="h-5 w-5 md:h-7 md:w-7" />
    //   </button>
    // </div>

    // game changer
    <div className="relative flex shrink-0 items-center overflow-hidden">
      <ul
        className={`relative flex ${
          active === 0 ? "duration-0" : "duration-1000"
        } transition`}
        style={{
          transform: `translate(calc(-100% * ${active} / ${testimonials.length} ))`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonyCard
              active={active}
              setActive={setActive}
              testimonial={testimonial}
              testimonials={testimonials}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
