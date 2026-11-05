import { createBrowserClient } from '@supabase/ssr'
export function supabase() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}
export type Drink = { id: number; name: string; description: string; price: number; available: boolean; sort_order: number }
