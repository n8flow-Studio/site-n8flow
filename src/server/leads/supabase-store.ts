import 'server-only'
import { z } from 'zod'
import { LeadStoreError, type LeadStore } from './store'

const receiptSchema = z.object({ requestId: z.uuid(), duplicate: z.boolean() }).strict()
const rateSchema = z
  .object({ allowed: z.boolean(), retryAfterSeconds: z.number().int().min(0).max(600) })
  .strict()

// Ingestion only. Never use this privileged client for admin reads.
export class SupabaseLeadStore implements LeadStore {
  constructor(
    private readonly config: { url: string; secretKey: string },
    private readonly request: typeof fetch = fetch,
  ) {}
  private async rpc(name: string, body: unknown): Promise<unknown> {
    try {
      const response = await this.request(`${this.config.url}/rest/v1/rpc/${name}`, {
        method: 'POST',
        headers: { apikey: this.config.secretKey, 'content-type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
        redirect: 'error',
        signal: AbortSignal.timeout(8_000),
      })
      if (!response.ok) throw new LeadStoreError('UNAVAILABLE')
      return await response.json()
    } catch (error) {
      if (error instanceof LeadStoreError) throw error
      throw new LeadStoreError(
        error instanceof Error && error.name === 'TimeoutError' ? 'TIMEOUT' : 'UNAVAILABLE',
      )
    }
  }
  async checkRateLimit(clientHash: string) {
    const parsed = rateSchema.safeParse(
      await this.rpc('n8flow_check_lead_rate', { p_client_hash: clientHash }),
    )
    if (!parsed.success) throw new LeadStoreError('UNAVAILABLE')
    return parsed.data
  }
  async save(input: Parameters<LeadStore['save']>[0]) {
    const result = await this.rpc('n8flow_capture_lead', {
      p_key: input.key,
      p_request_id: input.requestId,
      p_payload: input.payload,
    })
    if (
      z
        .object({ conflict: z.literal(true) })
        .strict()
        .safeParse(result).success
    )
      throw new LeadStoreError('CONFLICT')
    const parsed = receiptSchema.safeParse(result)
    if (!parsed.success) throw new LeadStoreError('UNAVAILABLE')
    return parsed.data
  }
}
