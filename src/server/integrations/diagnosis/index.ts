import 'server-only'

import { env } from '@/lib/env'
import { MockDiagnosisAdapter } from './mock-adapter'
import { N8nDiagnosisAdapter } from './n8n-adapter'
import type { DiagnosisAdapter } from './types'
import { DiagnosisDeliveryError } from './types'

class UnavailableDiagnosisAdapter implements DiagnosisAdapter {
  async submit(): Promise<void> {
    throw new DiagnosisDeliveryError('DELIVERY_UNAVAILABLE')
  }
}

export function getDiagnosisAdapter(): DiagnosisAdapter {
  if (env.N8N_WEBHOOK_URL && env.N8N_WEBHOOK_SECRET) {
    return new N8nDiagnosisAdapter({
      url: env.N8N_WEBHOOK_URL,
      secret: env.N8N_WEBHOOK_SECRET,
    })
  }

  if (env.NODE_ENV === 'development' || env.NODE_ENV === 'test') {
    return new MockDiagnosisAdapter()
  }

  return new UnavailableDiagnosisAdapter()
}

export type { DiagnosisAdapter, DiagnosisEnvelope } from './types'
export { DiagnosisDeliveryError } from './types'
