export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      fontSize: '12px',
      color: '#444',
      paddingTop: '2rem',
      borderTop: '1px solid var(--border)',
      marginTop: '1rem',
    }}>
      <div>Desenvolvido com React e TypeScript | hospedado na Vercel</div>
      <div style={{ marginTop: '4px' }}>Feito por Nicolas S.</div>
    </footer>
  )
}