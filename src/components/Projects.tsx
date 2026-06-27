import SectionLabel from './SectionLabel'

interface Project {
  type: string
  name: string
  description: string
  tags: string[]
  url: string
}

const projects: Project[] = [
  {
    type: 'mobile app',
    name: 'QRHUNT',
    description:
      'App mobile para escanear QR Codes e adicionar insígnias a um inventário pessoal. Integração com Firebase para armazenamento seguro de dados e imagens.',
    tags: ['Expo','React', 'Firebase', 'QR Scanner', 'JavaScript'],
    url: 'https://github.com/DevNicolas01',
  },
  {
    type: 'landing page',
    name: 'Bistrô',
    description:
      'Landing page para restaurante bistrô com design elegante, cardápio e informações de contato.',
    tags: ['HTML', 'CSS', 'Tailwind', 'Vite', 'JavaScript'],
    url: 'https://github.com/DevNicolas01',
  },
  {
    type: 'landing page',
    name: 'Surf',
    description:
      'Landing page para marca de surf com visual moderno, galeria e seção de produtos.',
    tags: ['HTML', 'CSS', 'Tailwind', 'Vite', 'JavaScript'],
    url: 'https://github.com/DevNicolas01',
  },
]

export default function Projects() {
  return (
    <section id="projetos" style={{ marginBottom: '3.5rem' }}>
      <SectionLabel>projetos</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => window.open(project.url, '_blank')}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.background = '#1a1a1a'
              const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
              if (arrow) arrow.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--bg2)'
              const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
              if (arrow) arrow.style.color = 'var(--muted)'
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '11px',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '4px',
              }}>
                {project.type}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text)',
                marginBottom: '5px',
              }}>
                {project.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: '10px',
              }}>
                {project.description}
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      background: 'var(--bg3)',
                      color: '#666',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="arrow"
              style={{
                color: 'var(--muted)',
                fontSize: '18px',
                flexShrink: 0,
                marginTop: '2px',
                transition: 'color 0.2s',
              }}
            >
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
