import { CookieManager } from './js/cookieManager.js';

// Initialize cookie manager
const cookieManager = new CookieManager();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Store filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const regionSections = document.querySelectorAll('.region-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
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