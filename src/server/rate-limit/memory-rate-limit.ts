type RateLimitEntry = { count: number; resetAt: number }

export class MemoryRateLimit {
  private readonly entries = new Map<string, RateLimitEntry>()
  private readonly maxEntries = 10_000

  constructor(
    private readonly limit = 5,
    private readonly windowMs = 10 * 60 * 1000,
  ) {}

  check(key: string, now = Date.now()) {
    this.prune(now)
    const current = this.entries.get(key)

    if (!current || current.resetAt <= now) {
      this.entries.set(key, { count: 1, resetAt: now + this.windowMs })
      return { allowed: true, retryAfterSeconds: 0 }
    }

    if (current.count >= this.limit) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
      }
    }

    current.count += 1
    return { allowed: true, retryAfterSeconds: 0 }
  }

  private prune(now: number) {
    if (this.entries.size < this.maxEntries) return

    for (const [key, entry] of this.entries) {
      if (entry.resetAt <= now) this.entries.delete(key)
    }

    while (this.entries.size >= this.maxEntries) {
      const oldestKey = this.entries.keys().next().value
      if (typeof oldestKey !== 'string') break
      this.entries.delete(oldestKey)
    }
  }
}
