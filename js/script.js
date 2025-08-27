
document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
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
  sr.reveal('.skills-container h2, .skills-container ul li', { origin: 'bottom', interval: 200 });
  sr.reveal('.Contact-container h2, .Contact-container p, .Contact-container ul', { origin: 'bottom' });
  sr.reveal('.footer-container', { origin: 'bottom' });


  function animateNumbers() {
    const skillPercentages = document.querySelectorAll('.skills-container h1');
    skillPercentages.forEach(skill => {
      const target = parseInt(skill.innerText);
      const duration = 1500; // 1.5 seconds
      let startTime;

      const update = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const current = Math.floor(progress * target);

        skill.innerText = current + '%';

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          skill.innerText = target + '%';
        }
      };

      skill.innerText = '0%';
      requestAnimationFrame(update);
    });
  }

  animateNumbers();
});
