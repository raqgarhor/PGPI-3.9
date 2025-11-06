import { createClient } from '@supabase/supabase-js'

const supabase = createClient( "https://muphdgzdiwylnszaomge.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cGhkZ3pkaXd5bG5zemFvbWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MzQyNzMsImV4cCI6MjA3ODAxMDI3M30.wT7EOcGJotSQv_vZIhylnUM7CUCPsegQ2aLTWMvQN-w");
 
export default supabase;