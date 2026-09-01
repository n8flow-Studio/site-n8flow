const nodes = [
  { id: '01', label: 'Estratégia', position: 'left-0 top-0', accent: 'green' },
  { id: '02', label: 'Aquisição', position: 'right-0 top-[18%]', accent: 'violet' },
  { id: '03', label: 'Conversão', position: 'left-[8%] bottom-[18%]', accent: 'violet' },
  { id: '04', label: 'Relacionamento', position: 'right-[6%] bottom-0', accent: 'green' },
] as const

export function GrowthSystem() {
  return (
    <div
      className="relative min-h-[360px] border-y border-[var(--border-strong)] py-8 sm:min-h-[430px] lg:min-h-[520px]"
      aria-label="Arquitetura conceitual conectando estratégia, aquisição, conversão, relacionamento e dados"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--border-default)]" />
        <div className="absolute top-1/2 left-0 h-px w-full bg-[var(--border-default)]" />
        <div className="absolute top-[14%] left-[18%] h-[70%] w-[64%] rotate-[-8deg] border border-[var(--border-subtle)]" />
        <div className="absolute top-[22%] left-[24%] h-[56%] w-[52%] rotate-[7deg] border border-[var(--border-subtle)]" />
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[var(--text-primary)] bg-[var(--bg-canvas)] sm:h-40 sm:w-40">
        <div className="text-center">
          <span className="block font-mono text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
            Operação
          </span>
          <strong className="font-display mt-2 block text-xl font-semibold sm:text-2xl">
            Growth
          </strong>
          <span className="mx-auto mt-2 block h-1 w-8 bg-[var(--green-400)]" />
        </div>
      </div>

      {nodes.map((node) => (
        <div key={node.id} className={`absolute z-10 ${node.position} w-[46%] max-w-44`}>
          <div className="border-t border-[var(--border-strong)] bg-[var(--bg-canvas)] pt-3">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] ${
                node.accent === 'green' ? 'text-[var(--green-700)]' : 'text-[var(--violet-700)]'
              }`}
            >
              {node.id}
            </span>
            <p className="font-display mt-1 text-sm font-semibold sm:text-base">{node.label}</p>
          </div>
        </div>
      ))}

      <p className="absolute bottom-[42%] left-1/2 z-20 -translate-x-1/2 translate-y-20 bg-[var(--bg-canvas)] px-3 font-mono text-[9px] tracking-[0.18em] text-[var(--text-muted)] uppercase sm:translate-y-24">
        dados e aprendizado
      </p>
    </div>
  )
}
