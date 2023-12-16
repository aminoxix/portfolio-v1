import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const clickRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ total: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      return ctx.db.click.create({
        data: {
          count: input.total,
        },
      });
    }),
  update: publicProcedure
    .input(z.object({ id: z.number(), total: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      return ctx.db.click.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          count: input.total,
        },
      });
    }),

  getCount: publicProcedure.query(({ ctx }) => {
    return ctx.db.click.findFirst();
  }),
});
