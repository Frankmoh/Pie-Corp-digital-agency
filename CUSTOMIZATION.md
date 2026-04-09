# 🎨 PIE CORP Website - Quick Customization Guide

## Quick Navigation
- [Change Contact Info](#change-contact-info)
- [Update Images](#update-images)
- [Change Colors](#change-colors)
- [Adjust Animations](#adjust-animations)
- [Add Social Links](#add-social-links)
- [Modify Text Content](#modify-text-content)

---

## Change Contact Info

### 📍 Edit Phone, Email & Address

**File**: `index.html` - Find the Contact Section (~line 230-260)

```html
<!-- FIND THIS SECTION -->
<div class="contact-info">
    <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <div>
            <h4>Address</h4>
            <p>Your Address Here</p>  <!-- ← CHANGE THIS -->
        </div>
    </div>
    <div class="info-item">
        <i class="fas fa-phone"></i>
        <div>
            <h4>Phone</h4>
            <p>+1 (555) 000-0000</p>  <!-- ← CHANGE THIS -->
        </div>
    </div>
    <div class="info-item">
        <i class="fas fa-envelope"></i>
        <div>
            <h4>Email</h4>
            <p>hello@piecorp.com</p>  <!-- ← CHANGE THIS -->
        </div>
    </div>
</div>
```

**Replace with your actual details:**
```html
<p>123 Tech Street, City, State 12345</p>
<p>+1 (555) 123-4567</p>
<p>contact@piecorp.com</p>
```

---

## Update Images

### 🖼️ Replace Service Images

**Where**: `index.html` - Lines 85-120 (Service Cards)

**Current:**
```html
<img src="https://images.unsplash.com/photo-..." alt="Web Development">
```

**Best Image Sources:**
- **Unsplash**: [unsplash.com](https://unsplash.com)
- **Pexels**: [pexels.com](https://pexels.com)
- **Pixabay**: [pixabay.com](https://pixabay.com)

### 📋 Service-Specific Image Keywords:

**Web Development Card:**
- Search: "web development", "programming", "coding", "responsive design"
- Example URL: `https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop`

**Application Development:**
- Search: "mobile app", "app development", "smartphone", "cross-platform"
- Example URL: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop`

**Cybersecurity:**
- Search: "cybersecurity", "data protection", "security", "hacking protection"
- Example URL: `https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=500&h=400&fit=crop`

**Hardware Installation:**
- Search: "hardware", "computer installation", "POS system", "CCTV"
- Example URL: `https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop`

### How to Get Image URLs from Pinterest:

1. Find image on Pinterest
2. Right-click → "Open image in new tab"
3. Copy the URL from browser address bar
4. Paste into your HTML

### 🎯 Image Specifications:
- **Size**: 500x400 pixels (or any 5:4 ratio)
- **Format**: JPG or PNG
- **Quality**: High-quality, professional images
- **Loading**: Images load from URL directly (no upload needed)

---

## Change Colors

### 🎨 Update Brand Colors

**File**: `style.css` - Lines 1-10

```css
:root {
    --primary-color: #6366f1;       /* Main brand color (currently: Indigo) */
    --secondary-color: #ec4899;     /* Accent color (currently: Pink) */
    --dark-color: #1f2937;          /* Dark elements (currently: Dark Gray) */
    --light-color: #f9fafb;         /* Light background (currently: Off-White) */
    --text-color: #374151;          /* Default text (currently: Medium Gray) */
    --border-color: #e5e7eb;        /* Borders (currently: Light Gray) */
    --success-color: #10b981;       /* Success elements (currently: Green) */
}
```

### 📊 Color Palette Ideas:

**Professional Blue Theme:**
```css
--primary-color: #0066cc;       /* Blue */
--secondary-color: #ff6b35;     /* Orange */
--dark-color: #1a1a1a;          /* Black */
```

**Modern Purple Theme:**
```css
--primary-color: #7c3aed;       /* Purple */
--secondary-color: #06b6d4;     /* Cyan */
--dark-color: #1f1f1f;          /* Dark Black */
```

**Corporate Green Theme:**
```css
--primary-color: #059669;       /* Green */
--secondary-color: #f59e0b;     /* Amber */
--dark-color: #111827;          /* Dark Gray */
```

### 🔍 Find Hex Colors:
- [Colorpicker.com](https://www.colorpicker.com)
- [Coolors.co](https://coolors.co)
- [Adobe Color Wheel](https://color.adobe.com)

---

## Adjust Animations

### ⚡ Change Loading Screen Duration

**File**: `style.css` - Find animation settings

**Default (5 seconds):**
```css
animation: fadeOutScreen 0.8s ease-in-out 4.2s forwards;
```

**Change to 3 seconds:**
```css
animation: fadeOutScreen 0.8s ease-in-out 2.2s forwards;
```

**Change to 10 seconds:**
```css
animation: fadeOutScreen 0.8s ease-in-out 9.2s forwards;
```

### 🎬 Scroll Animation Speed

**Current Animation Speed**: 0.8s

To make faster (0.5s):
```css
animation: slideInCard 0.5s ease-out both;  /* Reduced from 0.8s */
```

To make slower (1.2s):
```css
animation: slideInCard 1.2s ease-out both;  /* Increased from 0.8s */
```

### 🔄 Disable All Animations

Add to `style.css`:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

---

## Add Social Links

### 📱 Update Social Media Links

**File**: `index.html` - Around line 275-285

```html
<div class="social-links">
    <a href="https://facebook.com/piecorp"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/piecorp"><i class="fab fa-twitter"></i></a>
    <a href="https://linkedin.com/company/piecorp"><i class="fab fa-linkedin"></i></a>
    <a href="https://instagram.com/piecorp"><i class="fab fa-instagram"></i></a>
</div>
```

### 🔗 Replace URLs:

```html
<!-- Facebook -->
<a href="https://www.facebook.com/YOUR_PAGE_NAME">
<i class="fab fa-facebook"></i></a>

<!-- Twitter/X -->
<a href="https://twitter.com/YOUR_HANDLE">
<i class="fab fa-twitter"></i></a>

<!-- LinkedIn -->
<a href="https://linkedin.com/company/YOUR_COMPANY_NAME">
<i class="fab fa-linkedin"></i></a>

<!-- Instagram -->
<a href="https://instagram.com/YOUR_USERNAME">
<i class="fab fa-instagram"></i></a>

<!-- YouTube -->
<a href="https://youtube.com/@YOUR_CHANNEL">
<i class="fab fa-youtube"></i></a>

<!-- WhatsApp -->
<a href="https://wa.me/1234567890">
<i class="fab fa-whatsapp"></i></a>
```

---

## Modify Text Content

### 📝 Change Section Titles

**File**: `index.html`

**About Section (~line 155):**
```html
<!-- FIND THIS -->
<h2>About PIE CORP</h2>

<!-- REPLACE WITH -->
<h2>Why Choose PIE CORP?</h2>
```

**Services Section (~line 70):**
```html
<!-- FIND THIS -->
<h2>Our Services</h2>
<p>Comprehensive digital solutions tailored to your needs</p>

<!-- REPLACE WITH -->
<h2>What We Deliver</h2>
<p>Industry-leading technology solutions for your business</p>
```

### 📄 Edit Service Descriptions

**File**: `index.html` - Service Cards (Lines 85-130)

Example - Web Development Card:

```html
<!-- CURRENT -->
<h3>Web Development</h3>
<p>We create stunning, responsive websites that drive results. 
   From simple websites to complex web applications.</p>

<!-- CUSTOM -->
<h3>Custom Web Development</h3>
<p>Award-winning web solutions tailored to your business goals. 
   From e-commerce to enterprise applications.</p>
```

### 📊 Edit About Statistics

**File**: `index.html` - Lines 195-210

```html
<!-- CHANGE THESE NUMBERS -->
<div class="stat">
    <h3>500+</h3>
    <p>Projects Completed</p>
</div>

<div class="stat">
    <h3>50+</h3>
    <p>Happy Clients</p>
</div>

<div class="stat">
    <h3>10+</h3>
    <p>Years Experience</p>
</div>

<!-- TO YOUR ACTUAL NUMBERS -->
```

---

## 🔧 Advanced Customizations

### Add New Service Card

**File**: `index.html` - After line 130

```html
<!-- COPY ONE COMPLETE SERVICE CARD AND MODIFY -->
<div class="service-card">
    <div class="service-image-container">
        <img src="https://your-image-url.jpg" alt="Your Service">
        <div class="service-overlay">
            <p>Your Service Description</p>
        </div>
    </div>
    <div class="service-content">
        <i class="fas fa-icon-name service-icon"></i>
        <h3>Your Service Name</h3>
        <p>Description of your service here.</p>
        <ul class="service-features">
            <li><i class="fas fa-check"></i> Feature 1</li>
            <li><i class="fas fa-check"></i> Feature 2</li>
            <li><i class="fas fa-check"></i> Feature 3</li>
        </ul>
    </div>
</div>
```

### Change Font Family

**File**: `style.css` - Line 18

```css
/* CURRENT */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* TO GOOGLE FONTS */
font-family: 'Poppins', sans-serif;  /* Add link in HTML <head> */
```

Add to HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
```

---

## 🎯 Common Customization Checklist

- [ ] Change company address, phone, email
- [ ] Update service images with high-quality photos
- [ ] Modify brand colors to match your logo
- [ ] Update project/client statistics
- [ ] Add actual social media links
- [ ] Test on mobile device
- [ ] Deploy to web server
- [ ] Set up contact form backend

---

## 💡 Tips & Tricks

✅ **Always keep backups** of working versions
✅ **Test changes** in browser before deployment
✅ **Use browser DevTools** (F12) to debug
✅ **Compress images** to improve loadtime
✅ **Use professional images** for better impression
✅ **Keep text concise** and compelling
✅ **Mobile-first testing** is essential

---

**Need more help?** Check the main README.md file for detailed documentation!
