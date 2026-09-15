// src/lib/supabaseClient.ts
// The shared client, typed against your database schema. The <Database> generic
// is what makes every query typed: misspell a column or use an invalid status
// and TypeScript errors before you run anything.

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in .env");
}

export const supabase = createClient<Database>(url, key);