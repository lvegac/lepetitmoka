 // Animaciones scroll
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    elements.forEach(el => observer.observe(el));

    // Carrusel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let index = 0;

    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
      index = (index + 1) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    });

    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    });