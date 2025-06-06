import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
        "You forgot to change the default URL",
      ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_BUCKET_NAME: z.string(),
    NEXT_PUBLIC_GITHUB_TOKEN: z.string(),
    NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME: z.string(),
    NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY: z.string(),
    NEXT_PUBLIC_EMAIL_SERVICE_BASE_URL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
    NEXT_PUBLIC_BUCKET_NAME: process.env.NEXT_PUBLIC_BUCKET_NAME,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME:
      process.env.NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME,
    NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY,
    NEXT_PUBLIC_EMAIL_SERVICE_BASE_URL:
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_BASE_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
