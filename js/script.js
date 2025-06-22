// Balaji Pest Control Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navList.contains(event.target)) {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(59, 38, 148, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#3b2694';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate Elements on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Phone Number Click Tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone clicks (can be integrated with analytics)
            console.log('Phone number clicked:', this.href);
            
            // Optional: Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'event_category': 'contact',
                    'event_label': this.href.replace('tel:', '')
                });
            }
        });
    });
    
    // WhatsApp Click Tracking
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track WhatsApp clicks
            console.log('WhatsApp clicked:', this.href);
            
            // Optional: Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'contact',
                    'event_label': 'whatsapp_chat'
                });
            }
        });
    });
    
    // Form Validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !phone || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidPhone(phone)) {
                showNotification('Please enter a valid phone number.', 'error');
                return;
            }
            
            // Submit form (implement your form submission logic here)
            submitContactForm(formData);
        });
    }
    
    // Utility Functions
    function isValidPhone(phone) {
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
        return phoneRegex.test(phone.replace(/\D/g, ''));
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#dc3545' : type === 'success' ? '#28a745' : '#3b2694'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: 500;
            max-width: 300px;
            word-wrap: break-word;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    function submitContactForm(formData) {
        // Show loading state
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual implementation)
        setTimeout(() => {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showNotification('Thank you! We will contact you soon.', 'success');
            
            // Reset form
            document.querySelector('#contact-form').reset();
            
            // Optional: Redirect to WhatsApp with pre-filled message
            const name = formData.get('name');
            const phone = formData.get('phone');
            const message = formData.get('message');
            const whatsappMessage = `Hi, I'm ${name}. Phone: ${phone}. Message: ${message}`;
            const whatsappUrl = `https://wa.me/918839893211?text=${encodeURIComponent(whatsappMessage)}`;
            
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1000);
            
        }, 2000);
    }
    
    // Lazy Loading for Images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Service Card Click to Call
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Optional: Open call or WhatsApp
            // window.open('tel:8839893211', '_self');
        });
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .service-card {
            cursor: pointer;
        }
        
        .service-card:active {
            transform: scale(0.98) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Preload critical resources
    const preloadLinks = [
        'css/style.css',
        'css/responsive.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
    
    // Add structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Balaji Pest Control",
        "description": "Professional pest control services in Raipur, Chhattisgarh",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prem Nagar, Mowa",
            "addressLocality": "Raipur",
            "addressRegion": "Chhattisgarh",
            "postalCode": "492001",
            "addressCountry": "IN"
        },
        "telephone": "+91-88398-93211",
        "url": window.location.origin,
        "openingHours": "Mo-Su 09:00-20:00",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "21.2514",
                "longitude": "81.6296"
            },
            "geoRadius": "50000"
        },
        "services": [
            "Termite Control",
            "Cockroach Control", 
            "Rat Control",
            "Ant Control",
            "Mosquito Control",
            "Sanitization Services"
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
