import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://cskxrqbnewtdiblysbpx.supabase.co",
  "sb_publishable_iNuaNoswI-e2i-E_wlqLQA_m8Rxm9AX"
);
