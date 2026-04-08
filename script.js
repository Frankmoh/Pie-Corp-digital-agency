// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and about section on scroll
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const aboutContent = document.querySelector('.about-content');
    
    serviceCards.forEach(card => {
        observer.observe(card);
    });
    
    if (aboutContent) {
        observer.observe(aboutContent);
    }
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.animated-shape');
    const scrollPosition = window.scrollY;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// IMAGE HOVER ZOOM EFFECT
// ============================================

const serviceImages = document.querySelectorAll('.service-image');
serviceImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(3deg)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ============================================
// SERVICE CARD HOVER EFFECTS
// ============================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
        this.style.transform = 'translateY(-15px) rotateZ(-2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        this.style.transform = 'translateY(0) rotateZ(0deg)';
    });
});

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #6366f1, #ec4899)';
        }, 3000);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', Object.fromEntries(formData));
    });
}

// ============================================
// NAV BAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// SECTION HIGHLIGHT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-color)';
        }
    });
});

// ============================================
// MOUSE FOLLOW EFFECT ON HOVER
// ============================================

document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.animated-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const depth = (index + 1) * 10;
        shape.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

const buttons = document.querySelectorAll('.hero-btn, .submit-btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.position = 'absolute';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect animation
if (!document.querySelector('style[data-ripple]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ripple', 'true');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

const stats = document.querySelectorAll('.stat h3');
let counterStarted = false;

const startCounter = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
};

const statSection = document.querySelector('.about-stats');
if (statSection) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterStarted) {
                startCounter();
                counterStarted = true;
            }
        });
    }, { threshold: 0.5 });
    
    observer2.observe(statSection);
}

// ============================================
// HERO BUTTON SCROLL TO SERVICES
// ============================================

const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
    heroBtn.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================
// LOADING SCREEN AUTO HIDE
// ============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 5000);
});

// ============================================
// SCROLL REVEAL EFFECT FOR CARDS
// ============================================

const revealOnScroll = () => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.animation = 'slideInCard 0.6s ease-out forwards';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

console.log('✓ PIE CORP DIGITAL AGENCY - Website loaded successfully!');

// ============================================
// CHATBOT - CHLOE
// ============================================

const chatbotResponses = {
    greetings: ['Hi! Welcome to PIE CORP! 👋', 'Hello! How can I assist you today?', 'Hey there! 😊 What can I help with?'],
    webdev: 'Our Web Development service includes: Responsive Design, SEO Optimization, Fast Performance, and Custom Web Applications. We create stunning websites that drive results!',
    appdev: 'We offer Application Development for iOS, Android, and Cross-Platform solutions. Our team builds user-centric, high-performance applications.',
    cybersecurity: 'Our Cybersecurity services include Security Audits, Threat Detection, and 24/7 Monitoring to keep your business protected.',
    hardware: 'We provide professional Hardware Installation services including POS Systems, CCTV & Surveillance, and complete IT Solutions.',
    services: 'We offer 4 main services: 1) Web Development 2) Application Development 3) Cybersecurity 4) Hardware Installation (POS, CCTV, Computers)',
    contact: 'You can reach us at: 📞 +254 707 427 230 or 📸 @frankie_4real on Instagram',
    price: 'For pricing information, please contact us directly at +254 707 427 230 or DM us on Instagram @frankie_4real',
    team: 'PIE CORP is a forward-thinking digital agency committed to delivering exceptional solutions for businesses of all sizes.',
    default: 'That\'s a great question! Feel free to ask me about our services, contact information, or anything else about PIE CORP!'
};

function getChloeResponse(message) {
    const msg = message.toLowerCase().trim();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
    }
    if (msg.includes('web') && msg.includes('develop')) {
        return chatbotResponses.webdev;
    }
    if (msg.includes('app') && msg.includes('develop')) {
        return chatbotResponses.appdev;
    }
    if (msg.includes('cyber') || msg.includes('security')) {
        return chatbotResponses.cybersecurity;
    }
    if (msg.includes('hardware') || msg.includes('pos') || msg.includes('cctv') || msg.includes('computer')) {
        return chatbotResponses.hardware;
    }
    if (msg.includes('service')) {
        return chatbotResponses.services;
    }
    if (msg.includes('contact') || msg.includes('call') || msg.includes('phone') || msg.includes('email')) {
        return chatbotResponses.contact;
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
        return chatbotResponses.price;
    }
    if (msg.includes('team') || msg.includes('about') || msg.includes('company')) {
        return chatbotResponses.team;
    }
    
    return chatbotResponses.default;
}

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot window
chatbotToggle.addEventListener('click', function() {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) {
        setTimeout(() => chatbotInput.focus(), 300);
    }
});

// Close chatbot
chatbotClose.addEventListener('click', function() {
    chatbotWindow.classList.remove('active');
});

// Add message function
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const messagePara = document.createElement('p');
    messagePara.textContent = text;
    
    messageDiv.appendChild(messagePara);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send message function
function sendMessage() {
    const message = chatbotInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, true);
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('chat-message', 'bot-message');
    typingDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Simulate response delay
    setTimeout(() => {
        typingDiv.remove();
        const response = getChloeResponse(message);
        addMessage(response, false);
    }, 800 + Math.random() * 700);
}

// Send button click
chatbotSend.addEventListener('click', sendMessage);

// Enter key in input
chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
