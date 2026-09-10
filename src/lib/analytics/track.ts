'use client'

export type AnalyticsEvent = { name: 'submit_diagnosis'; formId: 'diagnosis-contact' }

export function track(event: AnalyticsEvent) {
  window.dispatchEvent(new CustomEvent<AnalyticsEvent>('n8flow:analytics', { detail: event }))
}
