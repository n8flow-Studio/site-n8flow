import { Crosshair, MousePointer2, Users, Workflow, ArrowUpRight } from 'lucide-react'

const nodes = [
  { label: 'Estratégia', icon: Crosshair },
  { label: 'Aquisição', icon: ArrowUpRight },
  { label: 'Conversão', icon: MousePointer2 },
  { label: 'Relacionamento', icon: Users },
]

/** Conceptual illustration, not a dashboard or commercial result. */
export function GrowthSystem() {
  return (
    <figure className="growth-figure">
      <figcaption className="growth-caption">
        <span>Arquitetura de Growth</span>
        <span className="font-mono">N8 / 01</span>
      </figcaption>
      <div className="growth-canvas" role="img" aria-label="Estratégia, aquisição, conversão e relacionamento conectados em uma operação de Growth, orientada por dados e aprendizado.">
        <svg className="growth-wiring" viewBox="0 0 480 420" fill="none" aria-hidden="true">
          <circle cx="240" cy="210" r="150" stroke="currentColor" />
          <circle cx="240" cy="210" r="114" stroke="currentColor" strokeDasharray="3 7" />
          <path d="M120 90H240V210H360V330M360 90V150H240V270H120V330" stroke="currentColor" />
          <path className="growth-signal" d="M120 90H240V210H360V330" pathLength="100" />
          <path d="M224 34H256M240 18V50M224 386H256M240 370V402" stroke="currentColor" />
        </svg>
        <div className="growth-core" aria-hidden="true">
          <Workflow size={28} strokeWidth={1.5} />
          <span>Operação</span><strong>Growth</strong>
          <div className="growth-core-line" />
        </div>
        {nodes.map(({ label, icon: Icon }, index) => (
          <div className={`growth-node growth-node-${index + 1}`} key={label} aria-hidden="true">
            <Icon size={20} strokeWidth={1.75} /><span>{label}</span><small>0{index + 1}</small>
          </div>
        ))}
      </div>
      <div className="growth-caption growth-caption-bottom" aria-hidden="true">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--green-700)]" />Dados e aprendizado</span>
        <span>Um sistema conectado</span>
      </div>
    </figure>
  )
}
