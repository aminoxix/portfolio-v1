import React from "react";

import { api } from "~/trpc/server";
import TestimonialContainer from "../molecules/testimonial-container";

const Testimonial = async () => {
  const testimonials = await api.testimonial.getAllVerified.query();

  return <TestimonialContainer testimonials={testimonials} />;
};

export default Testimonial;
