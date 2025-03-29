import { products } from './data/products.js';
import { reviews } from './data/reviews.js';
import { CookieManager } from './js/cookieManager.js';

// Initialize cookie manager
const cookieManager = new CookieManager();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Product filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productsContainer = document.getElementById('productsContainer');

function displayProducts(category = 'all') {
    productsContainer.innerHTML = '';
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-bottom">
                    <p class="price">${product.weight}</p>
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.filter);
    });
});

// Display reviews
const reviewsContainer = document.getElementById('reviewsContainer');

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="rating">
                ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
            </div>
            <p>${review.text}</p>
            <div class="review-info">
                <span>${review.name}</span>
                <span>${review.product}</span>
            </div>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Slideshow functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for manual controls
prevBtn.addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

nextBtn.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow();
        showSlide(index);
        startSlideShow();
    });
});

// Start the slideshow when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startSlideShow();
    displayProducts();
    displayReviews();
});

// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Region filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const regionButtons = document.querySelectorAll('.region-btn');
    const storeTypes = document.querySelectorAll('.store-type');

    // Show first region by default
    const firstRegion = document.querySelector('.store-type[data-region="bratislavsky"]');
    if (firstRegion) {
        firstRegion.classList.add('active');
    }

    regionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and store types
            regionButtons.forEach(btn => btn.classList.remove('active'));
            storeTypes.forEach(store => store.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show selected region
            const selectedRegion = button.getAttribute('data-region');
            const targetStore = document.querySelector(`.store-type[data-region="${selectedRegion}"]`);
            if (targetStore) {
                targetStore.classList.add('active');
            }
        });
    });
});

// Touch interactions for slideshow
let touchStartX = 0;
let touchEndX = 0;

slideshowContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
}, false);

slideshowContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add touch feedback to interactive elements
document.querySelectorAll('.buy-btn, .filter-btn, .slide-btn').forEach(button => {
    button.classList.add('interactive-element');
});

// Pull-to-refresh functionality
let touchStartY = 0;
let pullRefresh = document.querySelector('.pull-refresh');
let isPulling = false;

document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0) {
        touchStartY = e.touches[0].clientY;
        isPulling = true;
    }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (!isPulling) return;
    
    const touchY = e.touches[0].clientY;
    const pullDistance = touchY - touchStartY;
    
    if (pullDistance > 0) {
        e.preventDefault();
        pullRefresh.style.transform = `translateY(${Math.min(pullDistance, 50)}px)`;
    }
}, { passive: false });

document.addEventListener('touchend', () => {
    if (!isPulling) return;
    
    const pullDistance = touchEndY - touchStartY;
    if (pullDistance > 50) {
        pullRefresh.classList.add('active');
        // Refresh products
        displayProducts();
        setTimeout(() => {
            pullRefresh.classList.remove('active');
        }, 1000);
    }
    
    pullRefresh.style.transform = '';
    isPulling = false;
}); 