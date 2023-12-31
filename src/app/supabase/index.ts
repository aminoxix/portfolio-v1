import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

// Create Supabase client
export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
  env.NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY,
);
