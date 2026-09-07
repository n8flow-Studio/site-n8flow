type StoredResult<T> = { value: T; expiresAt: number }

export class MemoryIdempotency<T> {
  private readonly entries = new Map<string, StoredResult<T>>()
  private readonly maxEntries = 10_000

  constructor(private readonly ttlMs = 30 * 60 * 1000) {}

  get(key: string, now = Date.now()): T | undefined {
    const stored = this.entries.get(key)

    if (!stored) return undefined

    if (stored.expiresAt <= now) {
      this.entries.delete(key)
      return undefined
    }

    return stored.value
  }

  set(key: string, value: T, now = Date.now()) {
    this.prune(now)
    this.entries.set(key, { value, expiresAt: now + this.ttlMs })
  }

  private prune(now: number) {
    if (this.entries.size < this.maxEntries) return

    for (const [key, stored] of this.entries) {
      if (stored.expiresAt <= now) this.entries.delete(key)
    }

    while (this.entries.size >= this.maxEntries) {
      const oldestKey = this.entries.keys().next().value
      if (typeof oldestKey !== 'string') break
      this.entries.delete(oldestKey)
    }
  }
}
