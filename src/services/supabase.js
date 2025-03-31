import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gbyfoejftzshfkwmscpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieWZvZWpmdHpzaGZrd21zY3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjM5MzEsImV4cCI6MjA1ODQ5OTkzMX0.ARNhKyRAeJr8v8TiiBZaa5xssvCQiqqNZytoujGza90";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
