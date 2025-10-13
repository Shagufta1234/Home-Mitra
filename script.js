// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active')
        ? 'rotate(48deg) translateY(8px)'
        : 'none';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active')
        ? 'rotate(-48deg) translateY(-8px)'
        : 'none';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
        navLinks?.classList.remove('active');
        resetHamburgerMenu();
    }
});

// Reset hamburger menu animation
function resetHamburgerMenu() {
    const spans = menuToggle?.querySelectorAll('span');
    if (spans) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navLinks?.classList.remove('active');
            resetHamburgerMenu();
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn?.addEventListener('click', () => {
    const query = searchInput?.value.trim();
    if (query) {
        handleSearch(query);
    }
});

searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            handleSearch(query);
        }
    }
});

function handleSearch(query) {
    console.log(`Searching for: ${query}`);
    // Implement search functionality here
    // For now, we'll filter product cards based on the query
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const title = card.querySelector('h2')?.textContent.toLowerCase();
        const category = card.dataset.category?.toLowerCase();
        if (title?.includes(query.toLowerCase()) || category?.includes(query.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// View More button functionality
const viewMoreBtn = document.querySelector('.view-more-btn');
viewMoreBtn?.addEventListener('click', () => {
    // Implement view more functionality
    console.log('Loading more products...');
    // This could fetch more products from an API or show hidden products
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});