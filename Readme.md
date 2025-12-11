# 💖 Premiere Proposal Generator

A premium, feature-rich web application for creating personalized romantic or friendship proposals with beautiful themes, photo integration, and intelligent context adaptation.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Live Demo

**Live URL:** [https://tanzeel804.github.io/purposal-generator/](https://tanzeel804.github.io/purposal-generator/)  
**GitHub Repository:** [https://github.com/Tanzeel804/purposal-generator](https://github.com/Tanzeel804/purposal-generator)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🖥️ Project Structure](#️-project-structure)
- [🎨 Themes & Customization](#-themes--customization)
- [📸 Photo Upload Features](#-photo-upload-features)
- [💝 Proposal Styles](#-proposal-styles)
- [⚙️ Advanced Configuration](#️-advanced-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🎯 **Core Features**

- **Dual Theme System**: Smooth animated light/dark modes with localStorage persistence
- **Intelligent Context Switching**: Adapts interface between romantic and friendship contexts
- **Advanced Photo Upload**: Drag & drop, filters, cropping, and beautiful integration
- **10+ Proposal Styles**: From sweet romantic to funny friendship approaches
- **Live Preview**: Real-time proposal card generation

### 🖼️ **Visual Excellence**

- **Glassmorphism Design**: Modern frosted glass effect cards
- **Smooth Animations**: Page load, hover effects, and theme transitions
- **Particle Effects**: Floating hearts and sparkles (extendable)
- **Custom Cursor**: Heart trail in romantic mode
- **Gradient Backgrounds**: Dynamic color schemes per context

### 📱 **User Experience**

- **Mobile-First Responsive**: Perfect on all device sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Accessibility**: ARIA labels, keyboard navigation
- **Offline Support**: LocalStorage for drafts and preferences

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation Steps

1. **Clone or Download**

   ```bash
   git clone https://github.com/Tanzeel804/purposal-generator.git
   cd purposal-generator
   ```

2. **File Structure Setup**

   ```
   purposal-generator/
   ├── index.html          # Main application
   ├── styles.css         # All styling and themes
   ├── script.js          # All functionality
   ├── assets/            # Images, fonts, icons
   └── README.md          # This file
   ```

3. **Run Locally**

   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Visit http://localhost:8000
     ```

4. **Deploy to GitHub Pages**
   - Push to your GitHub repository
   - Go to Settings → Pages
   - Select branch: `main` and folder: `/root`
   - Your site will be live at `https://[username].github.io/purposal-generator/`

## 🖥️ Project Structure

```plaintext
purposal-generator/
│
├── index.html                    # Main HTML structure
│   ├── Header with navigation
│   ├── Context selector
│   ├── Input panel (names, styles, photo upload)
│   ├── Live preview panel
│   └── Footer
│
├── styles.css                    # Complete styling
│   ├── CSS Variables (themes)
│   ├── Light/Dark mode definitions
│   ├── Romantic/Friendship contexts
│   ├── Animations and transitions
│   └── Responsive breakpoints
│
├── script.js                     # All functionality
│   ├── Theme management
│   ├── Context switching
│   ├── Photo upload handling
│   ├── Proposal generation
│   └── Export/share features
│
└── assets/                       # Optional assets
    ├── images/                  # Backgrounds, icons
    ├── fonts/                   # Custom fonts
    └── favicon.ico             # Site icon
```

## 🎨 Themes & Customization

### Light Mode (Romantic)

- **Primary Colors**: Soft pinks, lavender, peach
- **Background**: White and pastel gradients
- **Accents**: Rose gold, gentle shadows
- **Best for**: Daytime use, cheerful proposals

### Dark Mode (Romantic)

- **Primary Colors**: Deep purple, magenta, pink neon
- **Background**: Dark navy and rich gradients
- **Accents**: Neon glow, elegant contrasts
- **Best for**: Nighttime, sophisticated proposals

### Friendship Context Colors

- **Light Mode**: Sky blue, sunshine yellow, mint green
- **Dark Mode**: Teal, amber, cool grays
- **Imagery**: Stars, handshakes, friendly symbols

### Customizing Themes

Edit the CSS variables in `styles.css`:

```css
:root {
  --bg-primary: #fff9fb;
  --bg-secondary: #ffffff;
  --accent-primary: #ff6b9d;
  /* Add your custom colors */
}

body.dark-mode {
  --bg-primary: #1a0b1a;
  --accent-primary: #ff4d94;
}
```

## 📸 Photo Upload Features

### Supported Features

- **Drag & Drop**: Intuitive file uploading
- **Multiple Formats**: JPG, PNG, WEBP support
- **Auto Compression**: Large images optimized
- **Live Preview**: Instant visual feedback
- **Filters**: Sepia, vintage, soft glow effects
- **Basic Editing**: Crop and resize functionality

### Implementation Details

```javascript
// Photo handling includes:
- File validation (size, type)
- Image preview generation
- Filter application with CSS
- Local storage for temporary saves
- Error handling for failed uploads
```

### Adding More Filters

Extend the filter options in `script.js`:

```javascript
const filters = {
  none: "",
  sepia: "sepia(0.6)",
  vintage: "sepia(0.4) contrast(1.2)",
  soft: "contrast(1.1) brightness(1.1)",
  "your-filter": "your-css-filter-values",
};
```

## 💝 Proposal Styles

### Romantic Category (5 Styles)

1. **Sweet & Romantic** - Classic love language
2. **Passionate & Bold** - Strong, confident expressions
3. **Poetic & Artistic** - Literary, beautiful metaphors
4. **Movie-Inspired** - Cinematic, dramatic
5. **Adventure-Themed** - For adventurous couples

### Friendship Category (5 Styles)

6. **Friendship First** - Emphasizing existing bond
7. **Funny & Playful** - Humor-based approach
8. **Honest & Sincere** - Straightforward and genuine
9. **Nostalgic** - Based on shared memories
10. **Supportive** - Emphasizing emotional support

### Adding New Templates

Extend the `proposalTemplates` object in `script.js`:

```javascript
proposalTemplates: {
    // Add your custom template
    'custom-style': 'Your template text with [name] placeholder',

    // Romantic examples
    'sweet': 'From the moment I met you...',

    // Friendship examples
    'funny': 'We\'re already an amazing team...'
}
```

## ⚙️ Advanced Configuration

### Environment Variables

No backend required! All data stored in:

- **localStorage**: User preferences, drafts
- **Session**: Temporary image data
- **Browser cache**: Assets and fonts

### Performance Optimizations

- **Lazy Loading**: Images load on demand
- **CSS Optimization**: Minimal reflows and repaints
- **JS Debouncing**: Efficient event handling
- **Asset Compression**: Recommended for production

### Browser Compatibility

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile (Default) */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop enhancements */
}
```

### Touch Optimization

- Larger tap targets for mobile
- Swipe gestures for carousels (extendable)
- Touch-friendly form elements
- Mobile-first navigation

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Commit all files to your repository
2. Navigate to Settings → Pages
3. Configure:
   - Source: Deploy from a branch
   - Branch: `main` (or your branch)
   - Folder: `/` (root)
4. Save and wait for deployment
5. Access at: `https://[username].github.io/purposal-generator/`

### Netlify/Vercel (Alternative)

1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployment on push
4. Custom domain support

### Custom Domain

1. Purchase domain from registrar
2. Add CNAME record pointing to GitHub
3. Configure in GitHub Pages settings
4. Enable HTTPS automatically

## 🛠️ Development

### Extending Features

#### Adding More Pages

Create additional HTML files following the same structure:

```html
<!-- new-page.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Same head as index.html -->
  </head>
  <body>
    <!-- Reuse header/footer from main page -->
    <!-- Add your custom content -->
  </body>
</html>
```

#### Integrating External Libraries

Enhance functionality with:

1. **Image Editing**: [Cropper.js](https://github.com/fengyuanchen/cropperjs)

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js"></script>
   ```

2. **Export as Image**: [html2canvas](https://html2canvas.hertzen.com/)

   ```javascript
   // Convert proposal card to image
   html2canvas(document.querySelector(".proposal-card")).then((canvas) => {
     // Download canvas as image
   });
   ```

3. **Animations**: [Animate.css](https://animate.style/)
   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
   />
   ```

### Build Process

No build process required! However, for production:

1. **Minify CSS/JS** (optional):

   ```bash
   # Using online tools or local minifiers
   ```

2. **Optimize Images**:

   ```bash
   # Compress assets/images/*.jpg
   ```

3. **Add Analytics** (optional):
   ```html
   <!-- Google Analytics -->
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"
   ></script>
   ```

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Test on multiple devices
- Update documentation accordingly
- Ensure accessibility compliance

### Reporting Issues

1. Check existing issues
2. Use issue templates if available
3. Include:
   - Browser and OS version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Tanzeel Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **Font Awesome** for beautiful icons
- **Google Fonts** for elegant typography
- **Unsplash** for sample imagery (in examples)
- **All contributors** who help improve this project

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/Tanzeel804/purposal-generator/wiki)
- **Issues**: [GitHub Issues](https://github.com/Tanzeel804/purposal-generator/issues)
- **Email**: tanzeel.ahmed.se@gmail.com
- **Twitter**: [@TanzeelOnX](https://twitter.com/TanzeelOnX)

---

<div align="center">

### Made with ❤️ for heartfelt moments everywhere

**If this project helped you, please give it a ⭐ on GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/Tanzeel804/purposal-generator?style=social)](https://github.com/Tanzeel804/purposal-generator/stargazers)

</div>
