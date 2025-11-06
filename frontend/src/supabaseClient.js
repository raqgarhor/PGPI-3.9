import { createClient } from '@supabase/supabase-js';
    
const supabaseUrl = "https://muphdgzdiwylnszaomge.supabase.com";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cGhkZ3pkaXd5bG5zemFvbWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MzQyNzMsImV4cCI6MjA3ODAxMDI3M30.wT7EOcGJotSQv_vZIhylnUM7CUCPsegQ2aLTWMvQN-w";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Faltan variables de entorno REACT_APP_SUPABASE_URL o REACT_APP_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
export default supabase;