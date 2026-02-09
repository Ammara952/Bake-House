# 🍰 Bake House Website

A modern, responsive, and beautiful bakery website built with HTML5, CSS3, Bootstrap 5, and JavaScript.

## ✨ Features

### 🎨 Design Features
- **Premium UI/UX**: Soft pastel theme (Pink, Cream, Brown)
- **Smooth Animations**: Fade-in effects, hover animations, scroll animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Toggle between themes with localStorage support
- **Modern Typography**: Google Fonts (Playfair Display & Poppins)

### 🚀 Functional Features
- **Sticky Navigation**: Active link highlighting based on scroll position
- **Product Filtering**: Filter products by category (All, Cakes, Cupcakes, Cookies, Bread, Pastries)
- **Add to Cart**: Toast notifications when items are added
- **Order Form**: Complete validation with date picker and form submission
- **Animated Counters**: Count-up animation for statistics
- **Image Carousel**: Auto-playing featured cakes slider
- **Newsletter Subscription**: Email subscription form
- **Contact Section**: Google Maps integration and social links
- **Scroll to Top**: Smooth scroll button appears on scroll
- **Loading Animation**: Beautiful loading screen on page load

### 📱 Sections Included
1. **Hero Section**: Full-screen banner with CTA buttons
2. **About Section**: Bakery story with animated counters
3. **Products Section**: Filterable product grid with 12 items
4. **Featured Slider**: Bootstrap carousel with 3 featured cakes
5. **Special Offers**: BOGO and discount promotions
6. **Customer Reviews**: Testimonial cards with ratings
7. **Order Form**: Complete online ordering system
8. **Newsletter**: Email subscription
9. **Contact**: Map, contact info, and social links
10. **Footer**: Quick links, products, and opening hours

## 📁 Project Structure

```
bake-house-website/
│
├── index.html              # Main HTML file
│
├── css/
│   └── style.css          # Custom CSS styling
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── assets/
│   ├── banner/            # Hero and banner images
│   │   ├── hero-bg.jpg
│   │   ├── about-bakery.jpg
│   │   ├── cupcake-offer.jpg
│   │   ├── birthday-offer.jpg
│   │   ├── chocolate-featured.jpg
│   │   ├── strawberry-featured.jpg
│   │   ├── wedding-featured.jpg
│   │   ├── customer1.jpg
│   │   ├── customer2.jpg
│   │   └── customer3.jpg
│   │
│   ├── cakes/             # Cake product images
│   │   ├── chocolate-cake.jpg
│   │   ├── strawberry-cake.jpg
│   │   ├── wedding-cake.jpg
│   │   ├── vanilla-cupcake.jpg
│   │   └── red-velvet-cupcake.jpg
│   │
│   └── cookies/           # Cookies, bread, and pastries
│       ├── chocolate-chip.jpg
│       ├── oatmeal-cookies.jpg
│       ├── french-bread.jpg
│       ├── whole-wheat.jpg
│       ├── croissant.jpg
│       ├── danish.jpg
│       └── eclair.jpg
│
└── README.md              # This file
```

## 🖼️ Image Requirements

Since the image generation quota was exhausted, you'll need to add your own images. Here's what you need:

### Banner Images (assets/banner/)
- **hero-bg.jpg** (1920x1080): Bakery background for hero section
- **about-bakery.jpg** (800x600): Bakery interior or baker at work
- **cupcake-offer.jpg** (600x400): Cupcakes for BOGO offer
- **birthday-offer.jpg** (600x400): Birthday cake for discount offer
- **chocolate-featured.jpg** (1200x500): Featured chocolate cake
- **strawberry-featured.jpg** (1200x500): Featured strawberry cake
- **wedding-featured.jpg** (1200x500): Featured wedding cake
- **customer1.jpg** (200x200): Customer photo (circular)
- **customer2.jpg** (200x200): Customer photo (circular)
- **customer3.jpg** (200x200): Customer photo (circular)

### Product Images (assets/cakes/)
- **chocolate-cake.jpg** (400x400): Chocolate cake
- **strawberry-cake.jpg** (400x400): Strawberry cake
- **wedding-cake.jpg** (400x400): Wedding cake
- **vanilla-cupcake.jpg** (400x400): Vanilla cupcakes
- **red-velvet-cupcake.jpg** (400x400): Red velvet cupcakes

### Product Images (assets/cookies/)
- **chocolate-chip.jpg** (400x400): Chocolate chip cookies
- **oatmeal-cookies.jpg** (400x400): Oatmeal cookies
- **french-bread.jpg** (400x400): French bread
- **whole-wheat.jpg** (400x400): Whole wheat bread
- **croissant.jpg** (400x400): Butter croissant
- **danish.jpg** (400x400): Fruit danish
- **eclair.jpg** (400x400): Chocolate eclair

### 📸 Where to Get Images

1. **Free Stock Photos**:
   - [Unsplash](https://unsplash.com/) - Search for "bakery", "cake", "pastry"
   - [Pexels](https://www.pexels.com/) - High-quality free images
   - [Pixabay](https://pixabay.com/) - Free images and videos

2. **AI Image Generators** (if available):
   - Use the prompts provided in the code comments
   - Generate images matching the descriptions above

3. **Placeholder Images** (for testing):
   - The website includes error handling that shows placeholders if images fail to load
   - You can test the website without images initially

## 🚀 How to Run

1. **Extract/Open the project folder**
2. **Add images** to the `assets` folder (see structure above)
3. **Open `index.html`** in your web browser
4. **That's it!** No server or build process required

## 🎯 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **Bootstrap 5.3**: Responsive grid, components, utilities
- **JavaScript (ES6+)**: Modern JavaScript features
- **Font Awesome 6.4**: Icons
- **Google Fonts**: Playfair Display & Poppins

## ⚙️ Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffa07a;
    /* ... more colors */
}
```

### Add More Products
1. Copy a product card in `index.html`
2. Update the image, name, price, and category
3. Add the image to the appropriate assets folder

### Modify Contact Information
Update the contact section in `index.html`:
- Address
- Phone numbers
- Email addresses
- Google Maps embed URL
- Social media links

## 🎨 Color Scheme

- **Primary**: #ff6b9d (Pink)
- **Secondary**: #c44569 (Dark Pink)
- **Accent**: #ffa07a (Peach)
- **Background**: #fff5f7 (Light Pink)
- **Text**: #2c3e50 (Dark Gray)

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## 🔧 JavaScript Features

- Smooth scrolling navigation
- Active link highlighting
- Product category filtering
- Form validation
- Animated counters
- Dark/Light mode toggle
- Add to cart notifications
- Scroll to top button
- Loading animation
- Parallax effects
- Ripple button effects

## 📝 Form Validation

The order form includes:
- Required field validation
- Phone number format validation (11 digits)
- Future date validation for delivery
- Success message on submission
- Auto-reset after submission

## 🌙 Dark Mode

- Toggle button in navigation
- Saves preference to localStorage
- Smooth transition between themes
- All sections adapt to dark mode

## 💡 Tips for Best Results

1. **Use high-quality images** (at least 400x400 for products)
2. **Optimize images** before uploading (use tools like TinyPNG)
3. **Test on mobile devices** for responsive design
4. **Customize content** to match your bakery's brand
5. **Update contact information** with real details
6. **Add real Google Maps** location for your bakery

## 🎓 Perfect For

- ✅ College/University Projects
- ✅ Portfolio Showcase
- ✅ Client Bakery Websites
- ✅ Learning Web Development
- ✅ Frontend Practice

## 📄 License

Free to use for personal and commercial projects.

## 👨‍💻 Developer

Created with ❤️ for learning and demonstration purposes.

---

## 🚀 Quick Start Checklist

- [ ] Create folder structure
- [ ] Add all HTML, CSS, JS files
- [ ] Create assets folders (banner, cakes, cookies)
- [ ] Download and add images
- [ ] Update contact information
- [ ] Customize colors (optional)
- [ ] Test on different devices
- [ ] Deploy to web hosting

---

**Enjoy your beautiful Bake House website! 🍰✨**
