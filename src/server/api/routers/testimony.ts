import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const testimonyRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        social: z.string(),
        picture: z.string(),
        testimony: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.testimonial.create({
        data: input,
      });
    }),

  // in future, to update after authenticated
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        social: z.string().optional(),
        picture: z.string().optional(),
        testimony: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.testimonial.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          name: input.name,
          social: input.social,
          picture: input.picture,
          testimony: input.testimony,
        },
      });
    }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.testimonial.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getAllVerified: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.testimonial.findMany({
      where: {
        verified: true,
        reviewed: true,
      },
    });
  }),
});
