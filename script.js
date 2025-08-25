// script.js - Alpha y Omega Seguros

// 1. Scroll suave con offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 100; // Altura del header
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// 2. Animaciones al desplazar
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.seccion, .por-que .item, .producto');
  const screenPosition = window.innerHeight / 1.1;

  elements.forEach(el => {
    const position = el.getBoundingClientRect();
    if (position.top < screenPosition && !el.classList.contains('visible')) {
      el.classList.add('visible');
    }
  });
};

// Ejecutar al cargar y al hacer scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// 3. Efecto en header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});