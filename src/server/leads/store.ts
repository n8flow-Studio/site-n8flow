import type { DiagnosisInput } from '@/lib/validation/diagnosis'

export type LeadPayload = Omit<DiagnosisInput, 'website'>
export interface LeadStore {
  checkRateLimit(clientHash: string): Promise<{ allowed: boolean; retryAfterSeconds: number }>
  save(input: {
    key: string
    requestId: string
    payload: LeadPayload
  }): Promise<{ requestId: string; duplicate: boolean }>
}
export class LeadStoreError extends Error {
  constructor(public readonly code: 'UNAVAILABLE' | 'TIMEOUT' | 'CONFLICT') {
    super(code)
    this.name = 'LeadStoreError'
  }
}
