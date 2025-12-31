import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      integrations: {
        Row: {
          id: string;
          user_id: string;
          service: string;
          access_token: string;
          refresh_token: string | null;
          expires_at: string | null;
          connected_at: string;
          metadata: Record<string, any> | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          service: string;
          access_token: string;
          refresh_token?: string | null;
          expires_at?: string | null;
          connected_at?: string;
          metadata?: Record<string, any> | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          service?: string;
          access_token?: string;
          refresh_token?: string | null;
          expires_at?: string | null;
          connected_at?: string;
          metadata?: Record<string, any> | null;
        };
      };
    };
  };
};
