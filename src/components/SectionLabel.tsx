interface SectionLabelProps {
  children: string
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div style={{
      fontSize: '11px',
      fontWeight: 500,
      color: 'var(--muted)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>
      {children}
      <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}
