import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { BrandSlats } from './brand-slats'

export interface Founder {
  name: string
  role: string
  photo?: { src: string; alt: string }
  bio?: string
}

// Only confirmed information. Photos and biographies will be supplied by the founders.
const founders: Founder[] = [
  { name: 'WEDSON SANTOS', role: 'CEO | CO-FUNDADOR' },
  {
    name: 'PEDRO NASCIMENTO',
    role: 'CTO | CO-FUNDADOR',
    photo: {
      src: '/brand/team/pedro-nascimento.webp',
      alt: 'Pedro Nascimento, CTO e co-fundador da N8FLOW',
    },
  },
]

export function Founders() {
  return (
    <section
      className="home-section founders-section"
      data-theme="dark"
      aria-labelledby="founders-title"
    >
      <Container>
        <h2 id="founders-title" className="section-title">
          QUEM ESTÁ POR TRÁS DA N8FLOW
        </h2>
        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-photo">
                {founder.photo ? (
                  <Image
                    src={founder.photo.src}
                    alt={founder.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 38vw, 90vw"
                    className="object-cover object-[center_28%]"
                  />
                ) : (
                  <div className="founder-photo-reserved" aria-hidden="true">
                    <svg viewBox="0 0 240 320" fill="none">
                      <circle cx="120" cy="120" r="43" />
                      <path d="M35 320v-40a85 85 0 0 1 170 0v40" />
                      <path d="M24 24h24M24 24v24M216 24h-24M216 24v24M24 296h24M24 296v-24M216 296h-24M216 296v-24" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="founder-info">
                <p className="founder-role">{founder.role}</p>
                <h3>{founder.name}</h3>
                <div className="founder-bio">{founder.bio && <p>{founder.bio}</p>}</div>
              </div>
              <BrandSlats />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
