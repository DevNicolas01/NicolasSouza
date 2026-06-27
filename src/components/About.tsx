import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="sobre" style={{ marginBottom: '3.5rem' }}>
      <SectionLabel>sobre</SectionLabel>
      <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.8 }}>
        Desenvolvedor Full Stack em formação contínua, cursando{' '}
        <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
          Análise e Desenvolvimento de Sistemas
        </strong>{' '}
         pela Universidade do Extremo Sul Catarinense (UNESC), formado em Técnico de Informática para Internet pelo{' '}
        <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Instituto Federal Catarinense (IFC)</strong>.
        Trabalho com JavaScript de ponta a ponta com experiência em React, Expo, Node.js
        e diferentes bancos de dados. Acredito que bom software vai além de funcionar —
        precisa ser legível, fácil de manter e preparado pra crescer.
      </p>
    </section>
  )
}
