import { createTRPCRouter } from "~/server/api/trpc";

import { postRouter } from "~/server/api/routers/post";
import { clickRouter } from "~/server/api/routers/click";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  click: clickRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
