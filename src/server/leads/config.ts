import 'server-only'
import { env } from '@/lib/env'
import { SupabaseLeadStore } from './supabase-store'
import { LeadStoreError } from './store'

export function getLeadStore() {
  if (env.LEAD_CAPTURE_ENABLED !== 'true' || !env.SUPABASE_URL || !env.SUPABASE_SECRET_KEY)
    throw new LeadStoreError('UNAVAILABLE')
  return new SupabaseLeadStore({
    url: new URL(env.SUPABASE_URL).origin,
    secretKey: env.SUPABASE_SECRET_KEY,
  })
}
