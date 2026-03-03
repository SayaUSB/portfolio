# CV Portfolio - Vanilla JS

A dark-themed, neon teal-accented CV portfolio website built with vanilla JavaScript, HTML5, and CSS3. No frameworks, no build step required.

![Theme](https://img.shields.io/badge/Theme-Dark%20%2B%20Neon%20Teal-00e6d6)
![Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%2F%20HTML%20%2F%20CSS-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

---

## 📁 File Structure

```
cv-portfolio-vanilla/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles with CSS variables
├── js/
│   └── main.js             # All JavaScript functionality
├── assets/
│   ├── images/             # Image assets
│   │   ├── avatar-small.jpg
│   │   ├── profile-photo.jpg
│   │   └── favicon.ico
│   └── CV-Ustu-Bina-Syahdiba.pdf
└── README.md               # This file
```

---

## 🎨 Kimi K2 Template Integration

### Slot Mapping

The HTML file contains clear markers showing where each section should be pasted into Kimi K2 template slots:

| Slot | HTML Marker | Content |
|------|-------------|---------|
| `HEADER_SLOT` | `<!-- KIMI-K2: HEADER_SLOT -->` | Sticky navigation with avatar |
| `HERO_SLOT` | `<!-- KIMI-K2: HERO_SLOT -->` | Hero section with name, subtitle, CTAs |
| `MAIN_CONTENT_SLOT` | `<!-- KIMI-K2: MAIN_CONTENT_SLOT -->` | About, Projects, Achievements, Skills, Experience, Contact |
| `FOOTER_SLOT` | `<!-- KIMI-K2: FOOTER_SLOT -->` | Footer with social links |

### Integration Steps

1. **Copy the CSS file**
   - Upload `css/style.css` to your Kimi K2 template's CSS folder
   - Link it in the template's `<head>`:
   ```html
   <link rel="stylesheet" href="css/style.css">
   ```

2. **Copy the JavaScript file**
   - Upload `js/main.js` to your Kimi K2 template's JS folder
   - Link it before closing `</body>`:
   ```html
   <script src="js/main.js"></script>
   ```

3. **Copy HTML sections to corresponding slots**
   - Open `index.html` and locate the slot markers
   - Copy content between `<!-- KIMI-K2: SLOT_NAME START -->` and `<!-- KIMI-K2: SLOT_NAME END -->`
   - Paste into the corresponding Kimi K2 template slot

4. **Upload assets**
   - Upload all images to `assets/images/`
   - Upload your CV PDF to `assets/`

---

## 📝 Customizing Content

All content is stored in the `siteData` object at the top of `js/main.js`. Edit this object to customize:

### Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  email: "your@email.com",
  avatar: "assets/images/your-avatar.jpg",
  profilePhoto: "assets/images/your-photo.jpg",
  cvFile: "assets/Your-CV.pdf"
}
```

### About Section
```javascript
about: {
  text: `Your about text here...`
}
```

### Projects
```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    icon: "🚀",
    tags: ["Tag1", "Tag2"],
    featured: true,  // Adds glow effect on hover
    link: "#"
  }
]
```

### Achievements
```javascript
achievements: [
  {
    id: 1,
    title: "Achievement Title",
    description: "Achievement description...",
    icon: "🏆"
  }
]
```

### Skills
```javascript
skills: [
  {
    category: "Category Name",
    icon: "💻",
    items: [
      { name: "Skill Name", icon: "🔧" }
    ]
  }
]
```

### Experience
```javascript
experience: [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    date: "Jan 2024 - Present",
    type: "work",  // or "education"
    bullets: [
      "Responsibility or achievement..."
    ]
  }
]
```

### Social Links
```javascript
social: [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }
]
```

---

## 🖼️ Required Image Assets

Upload these images to `assets/images/`:

| Filename | Size | Description |
|----------|------|-------------|
| `avatar-small.jpg` | 80x80px | Small circular avatar for navigation |
| `profile-photo.jpg` | 400x400px | Large profile photo for hero section |
| `favicon.ico` | 32x32px | Site favicon (optional) |

**Note:** Images should be square for best results with the circular cropping.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | > 1024px | Full layout, 3-column projects |
| Tablet | ≤ 1024px | 2-column projects, stacked hero |
| Mobile | ≤ 768px | 1-column layout, hamburger menu |
| Small Mobile | ≤ 480px | Full-width buttons, smaller text |

---

## ♿ Accessibility Checklist

- ✅ Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ✅ ARIA labels and roles for navigation and interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible styles
- ✅ Skip links (can be added if needed)
- ✅ Alt text for all images
- ✅ Color contrast ratios meet WCAG AA standards
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ High contrast mode support (`prefers-contrast`)

---

## 🔍 SEO Checklist

- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Semantic heading hierarchy (h1 → h2 → h3)
- ✅ Canonical URL (add if deploying to custom domain)
- ✅ Structured data (can be added via JSON-LD if needed)

---

## 🎯 Features Implemented

### Visual
- Dark theme with neon teal (#00e6d6) accent
- Subtle glow effects and animations
- Gradient backgrounds and decorative elements
- Smooth hover transitions

### Interactions
- Smooth scroll for anchor links
- Mobile hamburger menu with animation
- Project modal for detailed views
- Scroll-to-top button
- Sticky header with scroll effect
- Typewriter cursor effect (optional)

### Performance
- Lazy loading for images
- Intersection Observer for scroll animations
- Minimal DOM nodes
- No external dependencies

---

## 🚀 Deployment

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)
1. Upload all files to your hosting platform
2. Ensure file paths are correct
3. Done!

### Option 2: Kimi K2 Template
1. Follow the [Kimi K2 Integration](#-kimi-k2-template-integration) steps above
2. Upload assets to the template's asset manager
3. Publish your site

---

## 🛠️ Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## 📄 License

This template is free to use for personal and commercial projects.

---

## 🆘 Troubleshooting

### Images not showing?
- Check that image paths match exactly (case-sensitive)
- Ensure images are uploaded to the correct folder
- Verify image file extensions (.jpg vs .jpeg)

### CSS not loading?
- Check the CSS file path in the HTML `<link>` tag
- Ensure the CSS file is uploaded to the correct location

### JavaScript not working?
- Check browser console for errors
- Ensure the JS file path is correct
- Verify the `siteData` object syntax is valid

### Mobile menu not working?
- Check that `js/main.js` is loaded
- Ensure no other scripts are conflicting

---

## 📧 Contact

For questions or issues, please reach out via the contact form on the site or email directly.

---

**Built with ❤️ using Vanilla JS, HTML5, and CSS3**
