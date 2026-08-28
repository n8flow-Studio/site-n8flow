/**
 * Loading skeleton global.
 * Exibido enquanto segmentos de rota carregam.
 * Mantém dimensões estáveis para evitar layout shift (DS §7 — estados de página).
 */
export default function Loading() {
  return (
    <div
      className="flex min-h-[80dvh] items-center justify-center"
      role="status"
      aria-label="Carregando conteúdo"
    >
      {/* Spinner acessível */}
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-[var(--action-primary)]"
        aria-hidden="true"
      />
      <span className="sr-only">Carregando...</span>
    </div>
  )
}
