import { createTRPCRouter } from "~/server/api/trpc";

import { clickRouter } from "~/server/api/routers/click";
import { testimonyRouter } from "~/server/api/routers/testimony";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  click: clickRouter,
  testimonial: testimonyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
