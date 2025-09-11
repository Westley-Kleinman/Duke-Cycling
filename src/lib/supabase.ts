import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wxdcxvsjcljthzyfkjju.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseKey) {
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is not set')
}

export const supabase = supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Type definitions for our rides table
export interface Ride {
  id?: number
  title: string
  start_time: string
  type: string
  pace: string
  location: string
  route: string
  distance: string
  notes?: string
  approved: boolean
  created_at?: string
}
