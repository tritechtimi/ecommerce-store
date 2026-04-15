import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fnzwectsjwzmstyyurpl.supabase.co";

const supabaseKey =   "sb_publishable_tycgtpPWLx3YfWZk8IE2Lw_oZYpZo3t";

export const supabase = createClient(supabaseUrl, supabaseKey);
