import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Pre-load dotenv in case this config is imported in files that do not initialize dotenv first
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Warning: SUPABASE_URL or SUPABASE_ANON_KEY is missing from environment variables.'
  );
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
