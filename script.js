import { products } from './data/products.js';
import { reviews } from './data/reviews.js';
import { CookieManager } from './js/cookieManager.js';
import { initMobileNav } from './js/mobileNav.js';

// Initialize cookie manager
const cookieManager = new CookieManager();

// Initialize mobile navigation
initMobileNav();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate the offset to account for fixed header
            const headerOffset = 80; // Height of the fixed header
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll to the target
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if it's open
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            const body = document.body;
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Product filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productsContainer = document.getElementById('productsContainer');

// Product display and filtering
let currentPage = 1;
const productsPerPage = 6;
let filteredProducts = [...products];

function displayProducts(category = 'all', searchQuery = '') {
    productsContainer.innerHTML = '';
    
    // Filter products based on category and search query
    filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    // Apply search filter if query exists
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Calculate pagination
    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-description-container">
                    <p class="product-description" data-product-id="${product.id}">${product.description}</p>
                </div>
                <p class="price">${product.weight}</p>
                <div class="product-actions">
                    <button class="read-more-btn">
                        <i class="fas fa-eye"></i>
                        <span class="read-more-text" data-translate="viewDetails">Zobraziť viac</span>
                    </button>
                    <button class="buy-btn" data-translate="buy">Nakupuj</button>
                </div>
            </div>
        `;

        // Add read more functionality
        const readMoreBtn = productCard.querySelector('.read-more-btn');
        const descriptionContainer = productCard.querySelector('.product-description-container');
        const description = productCard.querySelector('.product-description');
        
        descriptionContainer.classList.add('show-limited');
        
        readMoreBtn.addEventListener('click', () => {
            showQuickView(product);
        });

        productsContainer.appendChild(productCard);
    });

    // Show/hide "Show More" button
    const showMoreContainer = document.getElementById('showMoreContainer');
    if (endIndex < filteredProducts.length) {
        if (!showMoreContainer) {
            const container = document.createElement('div');
            container.id = 'showMoreContainer';
            container.innerHTML = '<button id="showMoreBtn" class="show-more-btn">Zobraziť viac</button>';
            productsContainer.after(container);
            
            document.getElementById('showMoreBtn').addEventListener('click', () => {
                currentPage++;
                displayProducts(category, searchQuery);
            });
        }
    } else if (showMoreContainer) {
        showMoreContainer.remove();
    }

    // Reapply current language translations
    const currentLang = localStorage.getItem('preferredLanguage') || 'sk';
    updateLanguage(currentLang);
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Reset pagination when changing filters
        currentPage = 1;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.filter);
    });
});

// Initialize products display with current language
displayProducts();

// Search functionality
const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';
searchContainer.innerHTML = `
    <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" id="searchInput" data-translate="searchPlaceholder" placeholder="Hľadať produkty...">
    </div>
`;

document.querySelector('.product-filters').after(searchContainer);

let searchTimeout;
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentPage = 1;
        displayProducts(document.querySelector('.filter-btn.active').dataset.filter, e.target.value);
    }, 300);
});

// Display reviews
const reviewsContainer = document.getElementById('reviewsContainer');
let currentReviewIndex = 0;

function displayReviews() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'sk';
    reviewsContainer.innerHTML = '';
    
    // Create navigation arrows
    const prevArrow = document.createElement('button');
    prevArrow.className = 'review-nav prev-review';
    prevArrow.innerHTML = '❮';
    prevArrow.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        updateReviewsDisplay();
    });

    const nextArrow = document.createElement('button');
    nextArrow.className = 'review-nav next-review';
    nextArrow.innerHTML = '❯';
    nextArrow.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        updateReviewsDisplay();
    });

    // Create swipe instruction text
    const swipeText = document.createElement('div');
    swipeText.className = 'swipe-instruction';
    swipeText.innerHTML = `<i class="fas fa-hand-pointer"></i> ${translations[currentLang]['swipe-instruction']}`;

    // Create reviews wrapper
    const reviewsWrapper = document.createElement('div');
    reviewsWrapper.className = 'reviews-wrapper';

    // Add elements to container
    reviewsContainer.appendChild(prevArrow);
    reviewsContainer.appendChild(reviewsWrapper);
    reviewsContainer.appendChild(nextArrow);
    reviewsContainer.appendChild(swipeText);

    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;

    reviewsWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        isSwiping = true;
    }, { passive: true });

    reviewsWrapper.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        touchEndX = e.touches[0].clientX;
    }, { passive: true });

    reviewsWrapper.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        const swipeDistance = touchEndX - touchStartX;
        const minSwipeDistance = 50; // Minimum distance for a swipe

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe right - previous review
                currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
            } else {
                // Swipe left - next review
                currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            }
            updateReviewsDisplay();
        }

        isSwiping = false;
    });

    // Initial display
    updateReviewsDisplay();

    function updateReviewsDisplay() {
        reviewsWrapper.innerHTML = '';
        
        // Show 3 reviews starting from current index
        for (let i = 0; i < 3; i++) {
            const reviewIndex = (currentReviewIndex + i) % reviews.length;
            const review = reviews[reviewIndex];
            
            // Determine card height based on text length
            let heightClass = 'review-card';
            if (review.text[currentLang].length < 100) {
                heightClass += ' short';
            } else if (review.text[currentLang].length > 200) {
                heightClass += ' long';
            }
            
            const reviewCard = document.createElement('div');
            reviewCard.className = heightClass;
            
            // Add active class for mobile view
            if (i === 0) {
                reviewCard.classList.add('active');
            }
            
            reviewCard.innerHTML = `
                <div class="rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                </div>
                <p>${review.text[currentLang]}</p>
                <div class="review-info">
                    <span>${review.name}</span>
                    <span>${review.product[currentLang]}</span>
                </div>
            `;
            reviewsWrapper.appendChild(reviewCard);
        }
    }
}

// Update reviews when language changes
document.addEventListener('languageChanged', () => {
    displayReviews();
});

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

// Quick View Modal
function showQuickView(product) {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Get current language
    const currentLang = localStorage.getItem('preferredLanguage') || 'sk';
    
    // Get translated description
    const translatedDescription = translations[currentLang][product.id]?.description || product.description;
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-modal" aria-label="Close">&times;</button>
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="quick-view-info">
                    <h2>${product.name}</h2>
                    <p class="price">${product.weight}</p>
                    <div class="product-description">
                        ${translatedDescription}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add touch event listeners for better mobile scrolling
    const modalContent = modal.querySelector('.quick-view-content');
    const modalGrid = modal.querySelector('.quick-view-grid');
    let touchStartY = 0;
    let touchEndY = 0;

    // Only add touch events for mobile devices
    if (window.innerWidth <= 768) {
        modalGrid.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        modalGrid.addEventListener('touchmove', (e) => {
            touchEndY = e.touches[0].clientY;
            
            // Allow scrolling if not at the top or bottom
            const scrollTop = modalGrid.scrollTop;
            const scrollHeight = modalGrid.scrollHeight;
            const clientHeight = modalGrid.clientHeight;
            
            if ((scrollTop <= 0 && touchEndY > touchStartY) || 
                (scrollTop + clientHeight >= scrollHeight && touchEndY < touchStartY)) {
                e.preventDefault();
            }
        }, { passive: false });

        modalGrid.addEventListener('touchend', () => {
            const scrollTop = modalGrid.scrollTop;
            
            // If at the top and pulling down with significant force, close the modal
            if (scrollTop <= 0 && touchEndY - touchStartY > 100) {
                closeModal();
            }
        });
    }

    function closeModal() {
        modal.remove();
        document.body.style.overflow = ''; // Restore body scroll
    }

    // Close modal when clicking close button or outside the modal
    modal.querySelector('.close-modal').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling to modal
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}); 