# Portfólio — Nicolas Souza

Portfólio pessoal desenvolvido com React + TypeScript + Vite.

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Como publicar na Vercel

1. Suba o projeto no GitHub
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta GitHub
3. Clique em "New Project" e importe o repositório
4. Deixe as configurações padrão (Vercel detecta Vite automaticamente)
5. Clique em "Deploy"

Pronto! Seu portfólio estará no ar em `seu-projeto.vercel.app`.

## Personalizar

- **Projetos** → edite o array `projects` em `src/components/Projects.tsx`
- **Skills** → edite o array `skills` em `src/components/Skills.tsx`
- **Contato** → edite o array `links` em `src/components/Contact.tsx`
- **Textos** → edite `src/components/Hero.tsx` e `src/components/About.tsx`

## Estrutura

```
src/
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionLabel.tsx
├── App.tsx
├── main.tsx
└── index.css
```
