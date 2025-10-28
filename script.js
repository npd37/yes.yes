// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const header = document.getElementById('header');
mobileMenuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('active'); });
mobileNavLinks.forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.remove('active'); }); });
const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .btn-primary');
allNavLinks.forEach(link => { link.addEventListener('click', (e) => {
    e.preventDefault(); const targetId = link.getAttribute('href'); const targetSection = document.querySelector(targetId);
    if (targetSection) { const offsetTop = targetSection.offsetTop - 80; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); }
}); });
window.addEventListener('scroll', () => { if (window.scrollY > 50) { header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); } });
document.addEventListener('click', (e) => { if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) { mobileMenu.classList.remove('active'); } });
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } }); }, observerOptions);
const animatedElements = document.querySelectorAll('.card, .service-card, .membership-card');
animatedElements.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'all 0.6s ease'; observer.observe(el); });