import { env } from "./src/env.js";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/testimony",
        destination: "/testimony/new",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [env.NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME],
  },
};

export default config;
