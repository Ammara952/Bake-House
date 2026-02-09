// ===================================
// Bake House - JavaScript
// Interactive Features & Animations
// ===================================

// ===== Loading Animation =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    // Show/hide scroll to top button
    updateScrollTopButton();

    // Animate elements on scroll
    animateOnScroll();
});

// ===== Active Nav Link Highlight =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== Smooth Scroll for Navigation Links =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

function updateScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Dark/Light Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// ===== Product Filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        productItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                // Show the item
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            } else {
                // Hide the item
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px) scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Add to Cart Functionality =====
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartToast = new bootstrap.Toast(document.getElementById('cartToast'));

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Add animation to button
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

        // Show toast notification
        cartToast.show();

        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            button.style.background = '';
        }, 2000);

        // Add bounce animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

// ===== Product Modal =====
function showProductModal(productName) {
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    document.getElementById('productModalLabel').textContent = productName;
    modal.show();
}

// ===== Animated Counters =====
const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

function animateCounters() {
    if (counterAnimated) return;

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    });

    counterAnimated = true;
}

// Trigger counter animation when about section is in view
function checkCounterVisibility() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    const rect = aboutSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !counterAnimated) {
        animateCounters();
    }
}

window.addEventListener('scroll', checkCounterVisibility);

// ===== Order Form Validation & Submission =====
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const productSelect = document.getElementById('productSelect').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const address = document.getElementById('address').value;

    // Validate phone number (simple validation)
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phoneNumber.replace(/[-\s]/g, ''))) {
        alert('Please enter a valid phone number (11 digits)');
        return;
    }

    // Validate delivery date (must be future date)
    const selectedDate = new Date(deliveryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert('Please select a future date for delivery');
        return;
    }

    // Show success message
    const successMessage = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4 class="alert-heading"><i class="fas fa-check-circle"></i> Order Placed Successfully!</h4>
            <p><strong>Thank you, ${customerName}!</strong></p>
            <p>Your order has been received and will be delivered on ${deliveryDate}.</p>
            <p class="mb-0">We'll contact you at ${phoneNumber} for confirmation.</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    orderForm.insertAdjacentHTML('beforebegin', successMessage);
    orderForm.reset();

    // Scroll to success message
    setTimeout(() => {
        document.querySelector('.alert-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    // Remove success message after 10 seconds
    setTimeout(() => {
        const alert = document.querySelector('.alert-success');
        if (alert) {
            alert.remove();
        }
    }, 10000);
});

// ===== Newsletter Form =====
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Show success message
    const button = newsletterForm.querySelector('button');
    const originalHTML = button.innerHTML;

    button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    button.style.background = '#4CAF50';

    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
        newsletterForm.reset();
    }, 3000);
});

// ===== Animate Elements on Scroll =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .review-card, .special-card, .contact-info-card');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial setup for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.product-card, .review-card, .special-card, .contact-info-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease-out';
    });
});

// ===== Set minimum date for order form =====
document.addEventListener('DOMContentLoaded', () => {
    const deliveryDateInput = document.getElementById('deliveryDate');
    if (deliveryDateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const minDate = tomorrow.toISOString().split('T')[0];
        deliveryDateInput.setAttribute('min', minDate);
    }
});

// ===== Carousel Auto-play Control =====
const carousel = document.getElementById('cakeCarousel');
if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 3000,
        wrap: true
    });
}

// ===== Product Card Hover Effect Enhancement =====
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Add ripple effect to buttons =====
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
        rippleElement.remove();
    }

    button.appendChild(ripple);
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// ===== Add CSS for ripple effect =====
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Image Lazy Loading Fallback =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// ===== Console Welcome Message =====
console.log('%c🍰 Welcome to Bake House! 🍰', 'color: #ff6b9d; font-size: 24px; font-weight: bold;');
console.log('%cFreshly Baked Happiness Everyday', 'color: #c44569; font-size: 16px;');
console.log('%cWebsite developed with ❤️', 'color: #666; font-size: 12px;');

// ===== Performance Monitoring =====
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// ===== Error Handling for Images =====
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function () {
            // Set a placeholder image if the original fails to load
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
            this.alt = 'Image not available';
        });
    });
});

// ===== Accessibility: Keyboard Navigation Enhancement =====
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }

    // Press 'Home' to scroll to top
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===== Initialize all tooltips =====
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// ===== Add smooth reveal animation to sections =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate', 'active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        sectionObserver.observe(section);
    });
});
