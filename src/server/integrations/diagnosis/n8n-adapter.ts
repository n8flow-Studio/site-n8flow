import 'server-only'

import { createHmac } from 'node:crypto'
import type { DiagnosisAdapter, DiagnosisEnvelope } from './types'
import { DiagnosisDeliveryError } from './types'

type N8nDiagnosisAdapterOptions = {
  url: string
  secret: string
  timeoutMs?: number
}

export class N8nDiagnosisAdapter implements DiagnosisAdapter {
  private readonly timeoutMs: number

  constructor(private readonly options: N8nDiagnosisAdapterOptions) {
    this.timeoutMs = options.timeoutMs ?? 8000
  }

  async submit(envelope: DiagnosisEnvelope): Promise<void> {
    const body = JSON.stringify(envelope)
    const timestamp = Date.now().toString()
    const signature = createHmac('sha256', this.options.secret)
      .update(`${timestamp}.${body}`)
      .digest('hex')

    let response: Response

    try {
      response = await fetch(this.options.url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-n8flow-timestamp': timestamp,
          'x-n8flow-signature': `sha256=${signature}`,
        },
        body,
        cache: 'no-store',
        signal: AbortSignal.timeout(this.timeoutMs),
      })
    } catch (error) {
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        throw new DiagnosisDeliveryError('DELIVERY_TIMEOUT', { cause: error })
      }

      throw new DiagnosisDeliveryError('DELIVERY_UNAVAILABLE', { cause: error })
    }

    if (!response.ok) {
      throw new DiagnosisDeliveryError(
        response.status >= 500 ? 'DELIVERY_UNAVAILABLE' : 'DELIVERY_REJECTED',
      )
    }
  }
}
