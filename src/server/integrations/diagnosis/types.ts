import type { DiagnosisInput } from '@/lib/validation/diagnosis'

export type DiagnosisEnvelope = {
  schemaVersion: '1.0'
  event: 'lead.submitted'
  occurredAt: string
  requestId: string
  idempotencyKey: string
  source: 'n8flow.com.br'
  payload: Omit<DiagnosisInput, 'website' | 'attribution'>
  attribution: DiagnosisInput['attribution']
}

export interface DiagnosisAdapter {
  submit(envelope: DiagnosisEnvelope): Promise<void>
}

export class DiagnosisDeliveryError extends Error {
  constructor(
    public readonly code: 'DELIVERY_UNAVAILABLE' | 'DELIVERY_TIMEOUT' | 'DELIVERY_REJECTED',
    options?: ErrorOptions,
  ) {
    super(code, options)
    this.name = 'DiagnosisDeliveryError'
  }
}
