// Mobile Navigation
export function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

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
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Close menu
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
            
            // Ensure body scroll is restored
            body.style.overflow = 'visible';
            body.style.position = 'static';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
            
            // Ensure body scroll is restored
            body.style.overflow = 'visible';
            body.style.position = 'static';
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
            
            // Ensure body scroll is restored
            body.style.overflow = 'visible';
            body.style.position = 'static';
        }
    });
} 