import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xrsevcstzokkxutbhrtn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyc2V2Y3N0em9ra3h1dGJocnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1MTI2MDEsImV4cCI6MTk5NTA4ODYwMX0.8razLDKE76uyPq7jnN7ah3qkYT3FFFAxGywDuYD9ErY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
