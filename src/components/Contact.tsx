import SectionLabel from './SectionLabel'

interface LinkItem {
  label: string
  href: string
  primary?: boolean
}

const links: LinkItem[] = [
  { label: 'nicolasouzaxx@gmail.com', href: 'mailto:nicolasouzaxx@gmail.com', primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicolas-souza-816781344/' },
  { label: 'GitHub', href: 'https://github.com/DevNicolas01' },
]

export default function Contact() {
  return (
    <section id="contato" style={{ marginBottom: '3.5rem' }}>
      <SectionLabel>contato</SectionLabel>
      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.75rem 1.5rem',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 500,
          marginBottom: '6px',
          letterSpacing: '-0.3px',
        }}>
          Vamos conversar?
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Aberto a oportunidades CLT como desenvolvedor júnior.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 500,
                background: link.primary ? 'var(--accent)' : 'var(--bg3)',
                color: link.primary ? '#0d0d0d' : 'var(--muted)',
                border: link.primary ? 'none' : '1px solid var(--border)',
                transition: 'all 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                if (link.primary) {
                  e.currentTarget.style.background = 'var(--accent-hover)'
                } else {
                  e.currentTarget.style.color = 'var(--text)'
                }
              }}
              onMouseLeave={(e) => {
                if (link.primary) {
                  e.currentTarget.style.background = 'var(--accent)'
                } else {
                  e.currentTarget.style.color = 'var(--muted)'
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
