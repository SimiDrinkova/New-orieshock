import { CookieManager } from './js/cookieManager.js';
import { initMobileNav } from './js/mobileNav.js';

// Initialize cookie manager
const cookieManager = new CookieManager();

// Initialize mobile navigation
initMobileNav();

// Store filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const regionSections = document.querySelectorAll('.region-section');

    // Show first region by default
    const firstRegion = document.querySelector('.region-section[data-region="bratislavsky"]');
    if (firstRegion) {
        firstRegion.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            filterButtons.forEach(btn => btn.classList.remove('active'));
            regionSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Show/hide region sections based on filter
            regionSections.forEach(section => {
                if (filterValue === 'all') {
                    section.style.display = 'block';
                } else {
                    section.style.display = section.getAttribute('data-region') === filterValue ? 'block' : 'none';
                }
            });
        });
    });
}); 