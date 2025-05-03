// Mobile Navigation
export function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;

    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        
        // Toggle classes
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        // Add focus trap when menu is open
        if (!isExpanded) {
            const firstLink = navLinks.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Get the target section
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                if (isMobile) {
                    // For mobile: store section and refresh
                    localStorage.setItem('scrollToSection', targetId);
                    window.location.reload();
                } else {
                    // For desktop: smooth scroll
                    const section = document.querySelector(targetId);
                    if (section) {
                        // Close menu first
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                        body.classList.remove('menu-open');
                        hamburger.setAttribute('aria-expanded', 'false');
                        
                        // Then scroll
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    });

    // Check if we need to scroll to a section after page load
    window.addEventListener('load', () => {
        const targetSection = localStorage.getItem('scrollToSection');
        if (targetSection) {
            const section = document.querySelector(targetSection);
            if (section) {
                // Wait for the page to be fully loaded
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    // Clear the stored section
                    localStorage.removeItem('scrollToSection');
                }, 100);
            }
        }
    });
} 