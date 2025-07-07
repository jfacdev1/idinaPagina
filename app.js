// IDINA Landing Page Interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  }

  // Animated counter for beta players
  const counter = document.querySelector('.counter');
  if (counter) {
    const target = parseInt(counter.getAttribute('data-count'), 10) || 10000;
    let current = 0;
    const increment = Math.ceil(target / 80);
    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
      } else {
        counter.textContent = current.toLocaleString();
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  }

  // Carousel controls for cities
  const carousel = document.getElementById('citiesCarousel');
  if (carousel) {
    const cards = carousel.querySelector('.cities__cards');
    const prevBtn = carousel.querySelector('.carousel__control--prev');
    const nextBtn = carousel.querySelector('.carousel__control--next');
    if (cards && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        cards.scrollBy({ left: -250, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        cards.scrollBy({ left: 250, behavior: 'smooth' });
      });
    }
  }

  // Pricing toggle and annual savings
  const planRadios = document.querySelectorAll('.pricing__toggle input[type="radio"]');
  const annualSavings = document.getElementById('annualSavings');
  if (planRadios && annualSavings) {
    planRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        let savings = 0;
        if (radio.value === 'premium') savings = 100; // ejemplo
        if (radio.value === 'season') savings = 60;
        annualSavings.textContent = `€${savings}`;
      });
    });
  }

  // Animate fade-in and scale-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in, .scale-in, .slide-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => observer.observe(el));

  // (Optional) Simple particles for hero section
  const canvas = document.getElementById('heroParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.querySelector('.hero').offsetHeight;
    }
    function createParticles() {
      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.3
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#00ffe7';
        ctx.shadowColor = '#00ffe7';
        ctx.shadowBlur = 8;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    resize();
    createParticles();
    draw();
    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
  }
});
