const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        color: 'var(--accent)',
        background: 'var(--accent-bg)',
        border: '1px solid var(--accent-border)',
        padding: '4px 10px',
        borderRadius: '999px',
        marginBottom: '1.25rem',
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          background: 'var(--accent)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite',
          display: 'inline-block',
        }} />
        Disponivel para oportunidades
      </div>

      <h1 style={{
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: 1.15,
        letterSpacing: '-0.8px',
        marginBottom: '0.75rem',
      }}>
        Olá, sou Nicolas<br />
        <span style={{ color: 'var(--muted)', fontWeight: 500 }}>Desenvolvedor Full Stack</span>
      </h1>

      <p style={{
        fontSize: '15px',
        color: 'var(--muted)',
        lineHeight: 1.7,
        maxWidth: '520px',
        marginBottom: '1.75rem',
      }}>
        Construo aplicações web e mobile com JavaScript de ponta a ponta.
        React, Node.js e Expo — com foco em código limpo e experiência do usuário.
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => scrollTo('projetos')}
          style={{
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: 500,
            background: 'var(--accent)',
            color: '#0d0d0d',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
        >
          Ver projetos
        </button>
        <button
          onClick={() => scrollTo('contato')}
          style={{
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: 500,
            background: 'var(--bg3)',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Entrar em contato
        </button>
      </div>
    </div>
  )
}
