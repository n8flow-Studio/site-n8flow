import 'server-only'

import type { DiagnosisAdapter } from './types'

export class MockDiagnosisAdapter implements DiagnosisAdapter {
  async submit(): Promise<void> {
    // Deliberadamente não registra o payload: ele contém PII.
  }
}
