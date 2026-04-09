// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    serviceCards.forEach(card => {
        observer.observe(card);
    });
    
    if (aboutContent) {
        observer.observe(aboutContent);
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    if (prefersReducedMotion) return;

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
// SERVICE CARD 3D INTERACTIONS
// ============================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    const imageContainer = card.querySelector('.service-image-container');
    const image = card.querySelector('.service-image-main') || card.querySelector('.service-image');
    const overlay = card.querySelector('.service-overlay');
    const overlayText = overlay ? overlay.querySelector('p') : null;
    let altImage = null;
    let showingAlt = false;

    if (imageContainer && image && image.dataset.altSrc) {
        altImage = document.createElement('img');
        altImage.src = image.dataset.altSrc;
        altImage.alt = `${image.alt} Alternative`;
        altImage.className = 'service-image service-image-alt';
        imageContainer.appendChild(altImage);
    }

    card.style.transformStyle = 'preserve-3d';

    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = ((y / rect.height) - 0.5) * -14;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = '0 30px 60px rgba(15, 23, 42, 0.22)';
        if (image) image.style.transform = 'scale(1.05) rotate(3deg)';
        if (altImage) altImage.style.transform = 'scale(1.05) rotate(3deg)';
    });

    card.addEventListener('pointerleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        if (image) image.style.transform = 'scale(1) rotate(0deg)';
        if (altImage) altImage.style.transform = showingAlt ? 'scale(1.03) rotate(1deg)' : 'scale(1.08)';
    });

    if (imageContainer && overlayText && image) {
        const updateOverlayText = () => {
            overlayText.textContent = image.alt || 'Explore this service';
        };

        updateOverlayText();

        const revealOverlay = () => {
            showingAlt = !showingAlt;
            imageContainer.classList.toggle('swap-mode', showingAlt);
            imageContainer.classList.add('scan-active');

            imageContainer.classList.add('active');
            overlayText.textContent = showingAlt
                ? `Alternative view: ${image.alt}`
                : (image.alt || 'Exploring more details...');

            setTimeout(() => imageContainer.classList.remove('scan-active'), 680);
            setTimeout(() => imageContainer.classList.remove('active'), 1400);
        };

        imageContainer.addEventListener('click', revealOverlay);
        imageContainer.addEventListener('touchstart', revealOverlay, { passive: true });
    }
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
            submitBtn.style.background = 'linear-gradient(135deg, var(--primary-color), #7dd3fc)';
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
    if (!navbar) return;

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
        const isActive = link.getAttribute('href').slice(1) === current;
        link.classList.toggle('active', isActive);
    });
});

// ============================================
// MOUSE FOLLOW EFFECT ON HOVER
// ============================================

document.addEventListener('mousemove', (e) => {
    if (prefersReducedMotion) return;

    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 22;
    const moveY = (y - 0.5) * 18;
    heroBackground.style.transform = `translate(${moveX}px, ${moveY}px)`;
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

let bootSoundPlayed = false;
const BOOT_SOUND_VOLUME = 0.8;

function playDigitalBootSound() {
    if (bootSoundPlayed) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();

    const startBootTone = () => {
        const now = ctx.currentTime;
        const limiter = ctx.createDynamicsCompressor();
        limiter.threshold.setValueAtTime(-14, now);
        limiter.knee.setValueAtTime(18, now);
        limiter.ratio.setValueAtTime(10, now);
        limiter.attack.setValueAtTime(0.003, now);
        limiter.release.setValueAtTime(0.25, now);

        const master = ctx.createGain();
        master.gain.setValueAtTime(0.0001, now);
        master.connect(limiter);
        limiter.connect(ctx.destination);

        // Galaxy-unfolding envelope: bloom then soft tail
        master.gain.exponentialRampToValueAtTime(0.18 * BOOT_SOUND_VOLUME, now + 0.6);
        master.gain.exponentialRampToValueAtTime(0.62 * BOOT_SOUND_VOLUME, now + 2.4);
        master.gain.exponentialRampToValueAtTime(0.0001, now + 6.0);

        // Deep atmospheric bed
        const pad1 = ctx.createOscillator();
        const pad2 = ctx.createOscillator();
        const padGain = ctx.createGain();
        const padFilter = ctx.createBiquadFilter();

        pad1.type = 'sine';
        pad2.type = 'sine';
        pad1.frequency.setValueAtTime(82, now);
        pad1.frequency.exponentialRampToValueAtTime(123, now + 3.0);
        pad2.frequency.setValueAtTime(123, now);
        pad2.frequency.exponentialRampToValueAtTime(164, now + 3.4);

        padFilter.type = 'lowpass';
        padFilter.frequency.setValueAtTime(380, now);
        padFilter.frequency.exponentialRampToValueAtTime(2200, now + 4.2);
        padFilter.Q.setValueAtTime(0.85, now);

        padGain.gain.setValueAtTime(0.0001, now);
        padGain.gain.exponentialRampToValueAtTime(0.34, now + 1.8);
        padGain.gain.exponentialRampToValueAtTime(0.12, now + 5.8);

        pad1.connect(padGain);
        pad2.connect(padGain);
        padGain.connect(padFilter);
        padFilter.connect(master);

        // Galaxy shimmer layer
        const shimmer = ctx.createOscillator();
        const shimmerGain = ctx.createGain();
        const shimmerFilter = ctx.createBiquadFilter();

        shimmer.type = 'triangle';
        shimmer.frequency.setValueAtTime(410, now + 0.5);
        shimmer.frequency.exponentialRampToValueAtTime(930, now + 3.2);
        shimmer.frequency.exponentialRampToValueAtTime(720, now + 5.6);

        shimmerFilter.type = 'highpass';
        shimmerFilter.frequency.setValueAtTime(350, now);
        shimmerGain.gain.setValueAtTime(0.0001, now);
        shimmerGain.gain.exponentialRampToValueAtTime(0.16, now + 2.0);
        shimmerGain.gain.exponentialRampToValueAtTime(0.035, now + 5.4);

        shimmer.connect(shimmerGain);
        shimmerGain.connect(shimmerFilter);
        shimmerFilter.connect(master);

        // Space dust noise bloom
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 5, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseData.length; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * 0.35;
        }

        const noise = ctx.createBufferSource();
        const noiseFilter = ctx.createBiquadFilter();
        const noiseGain = ctx.createGain();
        noise.buffer = noiseBuffer;

        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(500, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(1600, now + 4.4);
        noiseFilter.Q.setValueAtTime(0.65, now);

        noiseGain.gain.setValueAtTime(0.0001, now + 0.7);
        noiseGain.gain.exponentialRampToValueAtTime(0.07, now + 2.6);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.9);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(master);

        // Slow orbital motion modulation
        const lfo = ctx.createOscillator();
        const lfoGain1 = ctx.createGain();
        const lfoGain2 = ctx.createGain();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.09, now);
        lfoGain1.gain.setValueAtTime(1.8, now);
        lfoGain2.gain.setValueAtTime(1.2, now);

        lfo.connect(lfoGain1);
        lfo.connect(lfoGain2);
        lfoGain1.connect(pad1.frequency);
        lfoGain2.connect(pad2.frequency);

        // Soft whoosh entry
        const whooshBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
        const whooshData = whooshBuffer.getChannelData(0);
        for (let i = 0; i < whooshData.length; i++) {
            whooshData[i] = (Math.random() * 2 - 1) * (1 - i / whooshData.length);
        }
        const whoosh = ctx.createBufferSource();
        const whooshFilter = ctx.createBiquadFilter();
        const whooshGain = ctx.createGain();
        whoosh.buffer = whooshBuffer;
        whooshFilter.type = 'highpass';
        whooshFilter.frequency.setValueAtTime(240, now);
        whooshGain.gain.setValueAtTime(0.0001, now);
        whooshGain.gain.exponentialRampToValueAtTime(0.2, now + 0.35);
        whooshGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.25);
        whoosh.connect(whooshFilter);
        whooshFilter.connect(whooshGain);
        whooshGain.connect(master);

        pad1.start(now);
        pad2.start(now);
        shimmer.start(now + 0.4);
        noise.start(now + 0.7);
        whoosh.start(now);
        lfo.start(now);

        pad1.stop(now + 6.1);
        pad2.stop(now + 6.1);
        shimmer.stop(now + 6.0);
        noise.stop(now + 6.0);
        whoosh.stop(now + 1.25);
        lfo.stop(now + 6.0);

        bootSoundPlayed = true;
    };

    if (ctx.state === 'suspended') {
        ctx.resume().then(startBootTone).catch(() => {
            // Browser policy may block audio until explicit user interaction.
        });
    } else {
        startBootTone();
    }
}

function attachBootSoundFallback() {
    const trigger = () => {
        playDigitalBootSound();
        window.removeEventListener('pointerdown', trigger);
        window.removeEventListener('keydown', trigger);
    };

    window.addEventListener('pointerdown', trigger, { once: true });
    window.addEventListener('keydown', trigger, { once: true });
}

window.addEventListener('load', () => {
    playDigitalBootSound();
    attachBootSoundFallback();

    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 6000);
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
// CHATBOT - DONA
// ============================================

const donaProfile = {
    name: 'DONA',
    role: 'PIE CORP Lady Assistant',
    toneOpeners: [
        'Of course, I\'d love to help with that.',
        'Absolutely, here\'s what you need.',
        'Sure thing, let\'s sort that out quickly.'
    ],
    toneClosers: [
        'I can also break this down step-by-step if you want.',
        'If you\'d like, I can guide you to the best option for your budget.',
        'Tell me if you want me to connect this with a specific service package.'
    ]
};

const donaKnowledge = {
    webdev: '🌐 Web Development at PIE CORP covers landing pages to full web apps with responsive design, SEO optimization, speed tuning, CMS integration, and e-commerce support built to convert visitors into customers.',
    appdev: '📱 Application Development includes native iOS/Android, cross-platform apps, desktop tools, API integration, and clean UI/UX focused on retention and growth.',
    cybersecurity: '🔒 Cybersecurity covers audits, vulnerability assessment, threat detection, incident response, network hardening, and continuous monitoring to reduce business risk.',
    hardware: '🖥️ Hardware solutions include POS setup, CCTV/IP surveillance, networking, server setup, and complete on-site IT installations for reliable operations.',
    services: '🚀 We offer 4 core services: Web Development, Application Development, Cybersecurity, and Hardware Installation.',
    contact: '📬 Reach us via Phone/WhatsApp: +254 707 427 230, Instagram: @i.tsfrankie_4real, Facebook: Frank Mogonchi KE, Email: contact@piecorp.com.',
    whatsapp: '💬 WhatsApp support is available at +254 707 427 230.',
    instagram: '📸 Instagram: @i.tsfrankie_4real.',
    facebook: '👤 Facebook: Frank Mogonchi KE.',
    price: '💰 Pricing depends on scope and timeline. Typical starts: websites from KES 15,000, web apps from KES 50,000+, mobile apps from KES 80,000+, and cybersecurity audits from KES 30,000. Share your requirements and we will provide a clear quote.',
    team: '👩‍💼 PIE CORP is a Kenya-based digital agency delivering web, mobile, security, and hardware solutions for startups and established businesses.',
    stats: '📊 Current stats: 75+ projects completed, 100+ happy clients, and 5+ years experience.',
    location: '📍 PIE CORP is based in Kenya and serves East Africa and remote international clients.',
    support: '🛠️ We provide ongoing maintenance and support plans for websites, systems, and security infrastructure.',
    dona: 'I\'m DONA 👩‍💻, your PIE CORP lady assistant. I can guide you on services, pricing, contacts, and project planning.',
    default: '🤝 I can help with services, pricing, contacts, team details, and support options. Ask me anything about PIE CORP.'
};

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function buildDonaReply(topicKey) {
    if (topicKey === 'greeting') {
        return `Hi! I'm ${donaProfile.name} 👩‍💻, your ${donaProfile.role}. How may I assist you today?`;
    }

    const knowledge = donaKnowledge[topicKey] || donaKnowledge.default;
    const opener = getRandomItem(donaProfile.toneOpeners);
    const closer = getRandomItem(donaProfile.toneClosers);
    return `${opener}\n\n${knowledge}\n\n${closer}`;
}

function getDonaResponse(message) {
    const msg = message.toLowerCase().trim();

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('hola') || msg.includes('howdy')) {
        return buildDonaReply('greeting');
    }
    if (msg.includes('dona') || msg.includes('who are you') || msg.includes('your name')) {
        return buildDonaReply('dona');
    }
    if ((msg.includes('web') && (msg.includes('dev') || msg.includes('site') || msg.includes('page') || msg.includes('design'))) || msg.includes('website')) {
        return buildDonaReply('webdev');
    }
    if (msg.includes('app') && (msg.includes('dev') || msg.includes('build') || msg.includes('mobile') || msg.includes('android') || msg.includes('ios'))) {
        return buildDonaReply('appdev');
    }
    if (msg.includes('cyber') || msg.includes('security') || msg.includes('hack') || msg.includes('protect') || msg.includes('audit') || msg.includes('firewall')) {
        return buildDonaReply('cybersecurity');
    }
    if (msg.includes('hardware') || msg.includes('pos') || msg.includes('cctv') || msg.includes('camera') || msg.includes('computer') || msg.includes('network') || msg.includes('server') || msg.includes('install')) {
        return buildDonaReply('hardware');
    }
    if (msg.includes('service') || msg.includes('what do you') || msg.includes('offer')) {
        return buildDonaReply('services');
    }
    if (msg.includes('whatsapp') || msg.includes('wa ')) {
        return buildDonaReply('whatsapp');
    }
    if (msg.includes('instagram') || msg.includes('insta') || msg.includes('@')) {
        return buildDonaReply('instagram');
    }
    if (msg.includes('facebook') || msg.includes('fb')) {
        return buildDonaReply('facebook');
    }
    if (msg.includes('contact') || msg.includes('call') || msg.includes('phone') || msg.includes('reach') || msg.includes('email') || msg.includes('social')) {
        return buildDonaReply('contact');
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('fee') || msg.includes('charge') || msg.includes('quote') || msg.includes('how much')) {
        return buildDonaReply('price');
    }
    if (msg.includes('team') || msg.includes('about') || msg.includes('company') || msg.includes('frank') || msg.includes('who') || msg.includes('pie corp')) {
        return buildDonaReply('team');
    }
    if (msg.includes('stat') || msg.includes('number') || msg.includes('client') || msg.includes('project') || msg.includes('experience')) {
        return buildDonaReply('stats');
    }
    if (msg.includes('location') || msg.includes('where') || msg.includes('kenya') || msg.includes('nairobi')) {
        return buildDonaReply('location');
    }
    if (msg.includes('support') || msg.includes('maintain') || msg.includes('help') || msg.includes('after')) {
        return buildDonaReply('support');
    }

    return buildDonaReply('default');
}

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot window
if (chatbotToggle && chatbotWindow && chatbotClose && chatbotInput && chatbotSend && chatbotMessages) {
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

        if (isUser) {
            messageDiv.appendChild(messagePara);
        } else {
            const avatar = document.createElement('span');
            avatar.className = 'bot-avatar';
            avatar.setAttribute('aria-hidden', 'true');
            avatar.innerHTML = '<i class="fas fa-user"></i>';

            const bubble = document.createElement('div');
            bubble.className = 'bot-bubble';
            bubble.appendChild(messagePara);

            messageDiv.appendChild(avatar);
            messageDiv.appendChild(bubble);
        }

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
            const response = getDonaResponse(message);
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
}
