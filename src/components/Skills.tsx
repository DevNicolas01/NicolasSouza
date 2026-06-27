import SectionLabel from './SectionLabel'

interface Skill {
  name: string
  icon: string
  highlight?: boolean
  invert?: boolean
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: 'javascript/javascript-original', highlight: true },
  { name: 'TypeScript', icon: 'typescript/typescript-original', highlight: true },
  { name: 'React', icon: 'react/react-original', highlight: true },
  { name: 'Node.js', icon: 'nodejs/nodejs-original', highlight: true },
  { name: 'Expo', icon: 'expo/expo-original', highlight: true },
  { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
  { name: 'Vite', icon: 'vitejs/vitejs-original' },
  { name: 'Firebase', icon: 'firebase/firebase-plain' },
  { name: 'MySQL', icon: 'mysql/mysql-original' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
  { name: 'Git', icon: 'git/git-original' },
  { name: 'GitHub', icon: 'github/github-original-wordmark', invert: true },
  { name: 'HTML5', icon: 'html5/html5-original' },
  { name: 'CSS3', icon: 'css3/css3-original' },
]

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: '3.5rem' }}>
      <SectionLabel>skills</SectionLabel>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '10px',
      }}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              background: skill.highlight ? 'rgba(110,231,183,0.04)' : 'var(--bg2)',
              border: `1px solid ${skill.highlight ? 'var(--accent-border)' : 'var(--border)'}`,
              borderRadius: '10px',
              padding: '14px 10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'border-color 0.2s, background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = skill.highlight
                ? 'var(--accent)'
                : 'var(--border-hover)'
              e.currentTarget.style.background = skill.highlight
                ? 'rgba(110,231,183,0.08)'
                : '#1c1c1c'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = skill.highlight
                ? 'var(--accent-border)'
                : 'var(--border)'
              e.currentTarget.style.background = skill.highlight
                ? 'rgba(110,231,183,0.04)'
                : 'var(--bg2)'
            }}
          >
            <img
              src={`${DEVICON_BASE}/${skill.icon}.svg`}
              alt={skill.name}
              width={32}
              height={32}
              style={{
                objectFit: 'contain',
                filter: skill.invert ? 'invert(1)' : 'none',
              }}
            />
            <span style={{
              fontSize: '11px',
              color: skill.highlight ? 'var(--accent)' : 'var(--muted)',
              textAlign: 'center',
            }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
