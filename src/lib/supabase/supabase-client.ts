import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const supabaseClient = createClient<Database>(url, anonKey);
