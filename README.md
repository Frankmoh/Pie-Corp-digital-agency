# PIE CORP DIGITAL AGENCY - Professional Website

## 📋 Project Overview

A modern, fully responsive website for PIE CORP DIGITAL AGENCY featuring:
- **6-Second Animated Loading Screen** with fade-out effect
- **Service Cards** with beautiful hover animations and zoom effects
- **Smooth Scroll Animations** throughout the page
- **Responsive Design** optimized for all devices
- **Interactive Elements** including parallax effects and button animations
- **Contact Form** with validation
- **DONA Chat Assistant** with service and contact guidance
- **High-Quality Images** that animate on interaction

## 📁 File Structure

```
PIE CORP FILES/
├── index.html          # Main HTML file with structure
├── style.css          # Complete styling with animations
├── script.js          # JavaScript for interactivity and scroll effects
└── README.md          # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Navigate to the project folder: `c:\Users\franc\Desktop\PIE CORP FILES`
2. Open `index.html` in your web browser
3. The 6-second animated loading screen will appear
4. After loading, browse the website

### Option 2: Live Server (Recommended)
1. Install VS Code Live Server extension (if not installed)
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will open in your default browser with auto-reload on saves

## ✨ Features

### 1. **6-Second Animated Loading Screen**
- Custom gradient background (Purple to Pink)
- Rotating logo with pulsing animation
- Loading progress bar
- Fade-out transition after 5 seconds
- All animations are smooth and professional

### 2. **Navigation Bar**
- Fixed position with blur effect
- Smooth scroll links to sections
- Hover effects with underline animation
- Responsive hamburger menu

### 3. **Hero Section**
- Full-screen landing area
- Animated shapes with parallax effect
- Call-to-action button with ripple effect
- Staggered text animations

### 4. **Service Cards**
Each service includes:
- **Web Development**
- **Application Development**
- **Cybersecurity**
- **Hardware Installation (POS, CCTV, Computers)**

Features per card:
- High-quality images (from professional sources)
- Hover zoom and rotation effects
- Service overlay on hover
- Feature checklist
- Smooth elevation on hover

### 5. **About Section**
- Statistics with counter animation
- Company information
- Gradient background with overlay

### 6. **Contact Section**
- Contact information with icons
- Functional contact form
- Form validation
- Success message animation

### 7. **Footer**
- Company information
- Social media links with hover effects

## 🎨 Customization Guide

### Change Company Contact Information
Edit these lines in `index.html`:

```html
<!-- Line ~240: Address -->
<p>Your Address Here</p>

<!-- Line ~246: Phone -->
<p>+1 (555) 000-0000</p>

<!-- Line ~252: Email -->
<p>hello@piecorp.com</p>
```

### Update Images with Your Own
Replace image URLs in `index.html` (around line 85-95):

```html
<!-- Find this section and replace src URLs -->
<img src="YOUR_IMAGE_URL" alt="Web Development" class="service-image">
```

**Recommended Image Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://www.pexels.com
- Pixabay: https://pixabay.com
- Shutterstock: https://www.shutterstock.com

**Image Specifications:**
- Recommended size: 500x400 pixels
- Format: JPG or PNG
- Use descriptive alt text for accessibility

### Change Colors
Edit the CSS variables in `style.css` (lines 1-10):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;     /* Accent color */
    --dark-color: #1f2937;          /* Dark elements */
    --light-color: #f9fafb;         /* Light background */
    --text-color: #374151;          /* Text color */
}
```

### Adjust Animation Speeds
- **Loading Screen Duration**: Edit `animation: fadeOutScreen 0.8s ease-in-out 4.2s` in `style.css`
- **Scroll Animations**: Modify animation duration in keyframe definitions
- **Hover Effects**: Adjust `transition: var(--transition)` values

### Add/Remove Service Cards
Duplicate or remove service card blocks in `index.html` (around line 85-130)

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

All animations and hover effects are disabled on touch devices for better performance.

## 🔄 Animation Details

### Loading Screen Animations
- **Duration**: 6 seconds total
- **Logo**: Rotating circle with pulsing text
- **Progress Bar**: Smooth linear animation
- **Fade Out**: Smooth transition after completion

### Scroll Animations
- Service cards fade in with upward movement
- Parallax effect on background shapes
- Counter animation on stats section
- Staggered animations for multiple elements

### Hover Effects
- **Images**: Scale up (1.1x) and rotate (2deg)
- **Cards**: Elevation and downward movement
- **Icons**: Scale and rotate with color change
- **Buttons**: Translate up with enhanced shadow
- **Links**: Underline animation

## 🛠️ Browser Support

Tested and optimized for:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Image Optimization**: Compress images before uploading
2. **Lazy Loading**: Images load as you scroll
3. **CSS Animations**: GPU-accelerated for smooth performance
4. **Minimal JavaScript**: Efficient code with no dependencies

## 🔒 Contact Form Setup

The contact form is currently demo-only. To make it functional:

### Option 1: Use FormSubmit (Free)
1. Add this line to `script.js`:
```javascript
contactForm.action = "https://formspree.io/f/YOUR_FORM_ID";
contactForm.method = "POST";
```

2. Visit https://formspree.io and create a form to get your form ID

### Option 2: Use Netlify Forms (If hosting on Netlify)
1. Add to form in HTML: `netlify`
2. Deploy to Netlify

### Option 3: Backend Integration
Connect to your own backend API for form submission

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload files
3. Enable Pages from settings
4. Visit `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Connect GitHub repository
2. Deploy with one click
3. Custom domain support

### Netlify Quick Deploy (Current Project Ready)
1. Go to Netlify and choose Add new site > Deploy manually.
2. Drag and drop the full PIE CORP project folder.
3. Netlify will publish immediately (no build step required).
4. Contact form submissions are enabled through Netlify Forms using the existing contact form markup.
5. Optional: connect a custom domain from Site settings > Domain management.

### Netlify via Git (Recommended for Updates)
1. Push this project to GitHub.
2. In Netlify, choose Import from Git.
3. Select the repository and keep defaults.
4. Build command: leave empty.
5. Publish directory: .

### Option 3: Traditional Hosting
1. Upload files via FTP
2. Point domain to server
3. Enjoy your live website!

## 📝 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags in header
- Alt text on all images
- Proper heading hierarchy
- Mobile-responsive design
- Fast loading times

## 🎯 Next Steps

1. **Replace Placeholder Images**: Update all image URLs with your actual service images
2. **Update Contact Information**: Add your real phone, email, and address
3. **Customize Colors**: Match your brand colors
4. **Connect Contact Form**: Set up form backend integration
5. **Add Custom Domain**: Purchase domain and configure DNS
6. **Deploy**: Upload to hosting provider or use Netlify/GitHub Pages

## 📞 Support & Customization

For advanced customizations or questions:
- Review HTML structure carefully before making changes
- Test all changes in browser before deployment
- Keep backups of working versions
- Use browser DevTools (F12) for debugging

## 📄 License

This template is provided as-is for PIE CORP DIGITAL AGENCY. Feel free to modify and deploy as needed.

---

**Website Version**: 1.0
**Created**: 2026
**Last Updated**: April 2026

Made with ❤️ for PIE CORP DIGITAL AGENCY
