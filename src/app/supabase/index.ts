import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

// Create Supabase client
export const supabase = createClient(
  `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME}`,
  env.NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY,
);
