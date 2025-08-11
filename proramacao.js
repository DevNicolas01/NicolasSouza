// Cria botão "Voltar ao topo"
const btnTop = document.createElement('button');
btnTop.textContent = '↑ Topo';
btnTop.id = 'btnTop';
btnTop.title = 'Voltar ao topo';
document.body.appendChild(btnTop);

btnTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  background-color: #1e40af;
  color: white;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(30,64,175,0.6);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s;
  z-index: 1001;
`;

// Mostrar/esconder botão ao rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnTop.style.opacity = '1';
    btnTop.style.visibility = 'visible';
  } else {
    btnTop.style.opacity = '0';
    btnTop.style.visibility = 'hidden';
  }
});

// Scroll suave ao clicar no botão
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Spy: destaca link ativo no menu conforme a seção visível
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');

function scrollSpy() {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}
window.addEventListener('scroll', scrollSpy);

// Inicializa o scrollSpy na carga da página
scrollSpy();

// Animação fade-in suave para as seções ao entrarem na viewport
const observerOptions = {
  threshold: 0.15
};

const fadeInCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(fadeInCallback, observerOptions);
sections.forEach(section => {
  section.classList.add('fade-section'); // estado inicial invisível
  observer.observe(section);
});
