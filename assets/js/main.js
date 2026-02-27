/* ============================================
   MASTWAL ASSOCIATES - PROFESSIONAL JAVASCRIPT
   ============================================ */

// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// ============ REVEAL ON SCROLL ANIMATIONS ============
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============ HERO PARALLAX EFFECT ============
const hero = document.querySelector('.hero');

function handleParallax() {
    if (hero && window.innerWidth > 768) {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
}

window.addEventListener('scroll', handleParallax);

// ============ STATS COUNTER ANIMATION ============
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        statsAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
}

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ IMAGE LAZY LOADING ============
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============ PREVENT BODY SCROLL WHEN MENU OPEN ============
const style = document.createElement('style');
style.textContent = `
    body.no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ============ ACTIVE NAV LINK HIGHLIGHT ============
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

function highlightNavOnScroll() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial reveal check
    setTimeout(() => {
        revealOnScroll();
        animateStats();
    }, 100);
});

// ============ CONSOLE MESSAGE ============
console.log('%c Mastwal Associates ', 'background: #1a1a1a; color: #8b7355; font-size: 20px; padding: 10px;');
console.log('%c Website Developed with ❤️ ', 'color: #666; font-size: 12px;');