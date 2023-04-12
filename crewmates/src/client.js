import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vennprjddzusrhqstcyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbm5wcmpkZHp1c3JocXN0Y3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjk4MTEsImV4cCI6MTk5Njc0NTgxMX0.KEQaBGEGCeFwT2KFccBUWf70T3C5U5Ywjm-we1VN7bY";
export const supabase = createClient(supabaseUrl, supabaseKey);
