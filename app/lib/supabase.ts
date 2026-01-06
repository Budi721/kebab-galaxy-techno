import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client
// This should only be used in Server Components and Server Actions

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create Supabase client with fallback empty strings for development
// The app will handle missing data gracefully
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

