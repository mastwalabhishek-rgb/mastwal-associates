const elements = document.querySelectorAll('.fade-in');

function reveal() {
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// Subtle Hero Parallax
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.3 + 'px';
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const faders = document.querySelectorAll(".fade-up");

const appearOnScroll = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2
  }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});