// src/supabaseClient.js
// One shared Supabase client, imported wherever you need it. Created once.
//
// Values come from your .env (Vite exposes only vars prefixed with VITE_ to
// the browser). The publishable key is safe to expose; never put a secret key
// in a browser-reachable file.

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);
