const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '2.5rem',
      borderBottom: '1px solid var(--border)',
      marginBottom: '3.5rem',
    }}>
      <div style={{ fontSize: '15px', fontWeight: 500 }}>
        nicolas<span style={{ color: 'var(--accent)' }}>.dev</span>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['sobre', 'skills', 'projetos', 'contato'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '13px',
              color: 'var(--muted)',
              cursor: 'pointer',
              transition: 'color 0.2s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
