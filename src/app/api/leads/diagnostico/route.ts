import { env } from '@/lib/env'
import { getLeadStore } from '@/server/leads/config'
import { handleLeadSubmission } from '@/server/leads/handle-submission'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  return handleLeadSubmission(request, {
    getStore: getLeadStore,
    origin: env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3010',
    hashSecret: env.LEAD_RATE_LIMIT_SECRET ?? '',
    vercel: env.VERCEL === '1',
    environment: env.VERCEL_ENV ?? env.NODE_ENV,
    log: (entry) => console.info(JSON.stringify(entry)),
  })
}
