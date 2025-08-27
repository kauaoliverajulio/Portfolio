document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ScrollReveal
  const sr = ScrollReveal({
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
  });

  sr.reveal('.hero-container h2, .hero-container p, .hero-container ul', { origin: 'left' });
  sr.reveal('.hero-img', { origin: 'right' });
  sr.reveal('.about-container h2, .about-container p, .about-container ul', { origin: 'bottom' });
  sr.reveal('.services-container h2, .services-container ul li', { origin: 'bottom', interval: 200 });
  sr.reveal('.skills-container h2, .skills-container ul li', { 
    origin: 'bottom', 
    interval: 200, 
    afterReveal: animateNumbers 
  });
  sr.reveal('.Contact-container h2, .Contact-container p, .Contact-container ul', { origin: 'bottom' });
  sr.reveal('.footer-container', { origin: 'bottom' });

  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarUl = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
  });

  // Função de animação dos números
  function animateNumbers() {
    const skillPercentages = document.querySelectorAll('.skills-container h1');

    skillPercentages.forEach(skill => {
              const target = parseInt(skill.dataset.value); // Read target here, after delay 
      if (isNaN(target) || target <= 0) {
        skill.innerText = "0%";
        return;
      }

      // Reset inicial
      skill.innerText = "0%";

      const duration = 1500; // 1.5s
      let startTime = null;

      function easeOutQuad(t) {
        return t * (2 - t); // curva suave
      }

      function update(currentTime) {
        if (!startTime) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const current = Math.floor(easedProgress * target);

        skill.innerText = current + "%";

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          skill.innerText = target + "%"; // garante o valor final
        }
      }

      requestAnimationFrame(update);
    });
  }
});
