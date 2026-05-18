# TechUse - AI-Powered Tech Accessories E-Commerce Platform

A modern, fully-featured e-commerce website for custom tech accessories with AI-powered personalization tools. Browse, customize, and purchase phone cases, grips, protectors, and tech accessories across multiple device categories.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-Supported-orange)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

---

## 🌟 Features

### E-Commerce Core
- **Product Catalog**: 111+ carefully curated tech accessories across 6+ categories
- **Advanced Filtering**: Filter by category (cases, grips, protectors, bundles, etc.) and price range
- **Full-Text Search**: Quick product discovery with real-time search results
- **Shopping Cart**: Add/remove items, manage quantities, persistent cart storage
- **Checkout System**: Multi-step checkout with order validation and processing
- **User Authentication**: Email/password login with auto-account creation

### AI-Powered Customization
- **Image Upload**: Add custom images to your accessories
- **Custom Text**: Personalize with your own text
- **Font Styling**: Choose from multiple font styles for custom text
- **Color Picker**: Select any color for your design
- **Live Preview**: Real-time preview of your customized product

### User Experience
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme Aesthetic**: Modern, eye-friendly design with tech-forward color scheme
- **Persistent Storage**: User sessions, cart, and preferences saved locally
- **Interactive UI**: Smooth animations, dropdown menus, and modal notifications
- **Product Badges**: BESTSELLER and NEW item indicators

### Product Categories
1. **Mobile** - Phone cases and protection
2. **Laptop** - Laptop accessories and cases
3. **PC** - PC components and peripherals
4. **TV** - TV stands and accessories
5. **Smartwatch** - Smartwatch bands and cases
6. **General Accessories** - Universal tech accessories

---

## 📁 Project Structure

```
Tech Website/
├── index.html              # Landing page with hero section and featured products
├── shop.html               # Product listing with filters
├── product.html            # Product customization page with AI tools
├── categories.html         # Category browsing interface
├── cart.html               # Shopping cart management
├── checkout.html           # Multi-step checkout form
├── login.html              # User authentication
├── custom-build.html       # Custom PC/device builder
├── search.html             # Product search results
├── about-us.html           # Company information
├── script.js               # Core application logic
├── style.css               # Styling and theme configuration
└── README.md               # This file
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Modern styling with custom properties, Flexbox, Grid, and animations |
| **Vanilla JavaScript** | Client-side logic, no external frameworks required |
| **localStorage API** | Persistent data storage (users, cart, sessions) |
| **No Build Process** | Direct static file serving, zero dependencies |

### Design Highlights
- **Color Scheme**: Dark tech aesthetic with cyan, purple, and pink accents
- **Primary Color**: `#0f1419`
- **Card Background**: `#1a1f2e`
- **Accent Colors**: Cyan (`#00d4ff`), Purple (`#a855f7`), Pink (`#ec4899`)
- **Typography**: Clean, modern sans-serif fonts
- **Layouts**: Flexbox and CSS Grid for responsive design

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Running Locally

#### Option 1: Direct File Opening
1. Navigate to the project directory
2. Double-click `index.html` to open in your default browser
3. Start exploring!

#### Option 2: Local Server (Recommended)
Using Python 3:
```bash
cd "c:\Users\AVISHKAR\Documents\projects\websites\Tech Website"
python -m http.server 8000
```

Using Node.js:
```bash
cd "c:\Users\AVISHKAR\Documents\projects\websites\Tech Website"
npx http-server
```

Using PHP:
```bash
cd "c:\Users\AVISHKAR\Documents\projects\websites\Tech Website"
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### First Time Users
1. Click **Login** in the header
2. Enter any email and password to create an account
3. Explore products via **Shop** or **Categories**
4. Add items to cart and proceed to **Checkout**
5. Customize products with AI tools on the **Product** page

---

## 📚 Detailed Features

### 1. User Authentication (`login.html`, `script.js`)
- Simple email/password authentication
- Auto-account creation on first login
- User sessions persisted to localStorage
- Logout functionality with session clearing

```javascript
// Example: Login flow
loginBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  handleLogin(email, password); // Auto-creates account if new user
});
```

### 2. Shopping Cart (`cart.html`, `script.js`)
- Add/remove items with single click
- Update quantities with increment/decrement
- Real-time price calculation
- Persistent cart across sessions
- **Requires**: User must be logged in to add items

```javascript
// Example: Add to cart
addToCart(productId, quantity) {
  if (!currentUser) {
    showNotification('Please login first');
    return;
  }
  // Add to cart logic...
}
```

### 3. Product Filtering (`shop.html`, `script.js`)
- Filter by category: Case, Grip, Protector, Bundle, Laptop, PC, TV, Smartwatch
- Filter by price: Under $15, $15-$50, $50+, Custom range
- Combine multiple filters simultaneously
- Live product count updates

### 4. Product Search (`search.html`, `script.js`)
- Full-text search across product names and descriptions
- Keyword highlighting in results
- Instant result updates as you type
- No results handling with suggestions

### 5. AI Customization (`product.html`, `script.js`)
- **Image Upload**: Add your own design/photo to the product
- **Custom Text**: Write personalized text on the product
- **Font Styles**: Choose from multiple font options
- **Color Picker**: Select any color from the spectrum
- **Phone Models**: Select specific device models for cases
- **Live Preview**: Real-time 3D preview of customizations

```javascript
// Example: Update customization preview
updatePreview() {
  const customImage = document.getElementById('customImage').files[0];
  const customText = document.getElementById('customText').value;
  const selectedColor = document.getElementById('colorPicker').value;
  // Apply to preview...
}
```

### 6. Checkout Process (`checkout.html`, `script.js`)
**Multi-Step Form:**
1. **Personal Information**: Name, email, phone
2. **Delivery Address**: Street, city, state, zip
3. **Payment Details**: Card info (mock processing)
4. **Order Review**: Confirm items and total

Features:
- Form validation with error messages
- Order total calculation with tax estimation
- Mock payment processing
- Order confirmation modal
- Cart cleared after successful checkout

```javascript
// Example: Checkout flow
handleCheckout() {
  if (!validateCheckoutForm()) return;
  const orderTotal = calculateTotal(cart);
  // Process mock payment...
  clearCart();
  showSuccessModal();
}
```

### 7. Product Catalog (`script.js`)
**111 Products Organized by:**
- Category (6+ types)
- Price Range ($5–$299)
- Availability status
- Product badges (BESTSELLER, NEW)

```javascript
// Product structure
const products = [
  {
    id: 1,
    name: "Premium iPhone Case",
    category: "case",
    price: 29.99,
    rating: 4.8,
    badge: "BESTSELLER",
    // ... more properties
  }
  // ... 110 more products
];
```

### 8. Responsive Design
- **Mobile-First**: Optimized for phones (320px+)
- **Tablet**: Adapted layouts for 768px+
- **Desktop**: Full experience on 1024px+
- **Touch-Friendly**: Large tap targets for mobile
- **Performance**: Fast load times and smooth scrolling

---

## 🌐 Deployment

### Static Hosting Options

#### GitHub Pages
```bash
# Push to GitHub repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Enable Pages in repo settings → Pages → Source: main branch
```
**URL**: `https://your-username.github.io/your-repo`

#### Netlify
1. Connect GitHub repo to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `.` (current directory)
4. Deploy

**URL**: `https://your-site-name.netlify.app`

#### Vercel
1. Import project from GitHub
2. Framework: Other (static)
3. Deploy

**URL**: `https://your-project.vercel.app`

#### Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Access via your domain

### Pre-Deployment Checklist
- [ ] Test all pages and features locally
- [ ] Verify cart and checkout workflow
- [ ] Test login/logout functionality
- [ ] Check responsive design on multiple devices
- [ ] Test search and filtering
- [ ] Verify product customization tools work
- [ ] Check that localStorage works correctly
- [ ] Test on multiple browsers

---

## ⚠️ Known Limitations & Future Improvements

### Current Limitations
1. **No Backend API**: All data is stored client-side only
2. **localStorage Limits**: Maximum ~5-10MB per domain (sufficient for current data)
3. **No Real Payment Processing**: Checkout uses mock payment system
4. **No User Data Encryption**: User credentials stored in plain localStorage
5. **No Order History**: Orders not persisted after checkout
6. **No Admin Panel**: Product management requires manual code editing
7. **Placeholder Images**: Products use via.placeholder.com for demo images
8. **No Notifications**: Email confirmations not implemented
9. **No Product Reviews**: Ratings are hardcoded
10. **No Wishlist**: Can't save favorite items for later

### Planned Improvements
- [ ] **Backend API**: Node.js/Express server with MongoDB
- [ ] **Real Payment Gateway**: Stripe or PayPal integration
- [ ] **User Dashboard**: Order history, wishlist, saved addresses
- [ ] **Admin Panel**: Manage products, categories, and orders
- [ ] **Email Notifications**: Order confirmations and updates
- [ ] **Product Reviews**: User ratings and reviews with moderation
- [ ] **Advanced Search**: Filters, sorting, and faceted search
- [ ] **Mobile App**: React Native or Flutter companion app
- [ ] **Analytics**: Track user behavior and sales metrics
- [ ] **SEO Optimization**: Meta tags, sitemaps, and structured data

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Products** | 111 |
| **Product Categories** | 6+ |
| **Pages** | 10 |
| **Price Range** | $5–$299 |
| **File Size** | ~50KB (combined) |
| **Load Time** | <1s (local), ~2-3s (CDN) |
| **Browser Support** | All modern browsers |

---

## 🎨 Customization Guide

### Changing Colors
Edit `style.css` root variables:
```css
:root {
  --primary-bg: #0f1419;      /* Main background */
  --card-bg: #1a1f2e;         /* Card backgrounds */
  --accent-cyan: #00d4ff;     /* Primary accent */
  --accent-purple: #a855f7;   /* Secondary accent */
  --accent-pink: #ec4899;     /* Tertiary accent */
  --text-primary: #ffffff;    /* Main text */
  --text-secondary: #b0b0b0;  /* Secondary text */
}
```

### Adding New Products
Edit `script.js` and add to the `products` array:
```javascript
{
  id: 112,
  name: "Your Product Name",
  category: "case",  // or grip, protector, bundle, etc.
  price: 29.99,
  description: "Product description",
  rating: 4.5,
  badge: "NEW",  // or "BESTSELLER" or null
  image: "https://via.placeholder.com/300x300"
}
```

### Adding New Categories
1. Update `script.js`: Add category to filter options
2. Update `categories.html`: Add new category section
3. Update `style.css`: Add styling for new category

---

## 🔗 Quick Links

- **Homepage**: `index.html`
- **Shop**: `shop.html`
- **Product Customization**: `product.html`
- **Categories**: `categories.html`
- **Cart**: `cart.html`
- **Checkout**: `checkout.html`
- **Login**: `login.html`
- **Search**: `search.html`
- **About Us**: `about-us.html`

---

## 💡 Development Tips

### Debugging
1. Open **Developer Tools** (F12)
2. Check **Console** for errors and logs
3. Use **Application** tab to inspect localStorage
4. Use **Network** tab to monitor requests

### Testing Workflow
1. Create test account: `test@example.com` / `password123`
2. Add multiple products to cart
3. Test customization features
4. Complete checkout process
5. Verify data in localStorage

### Performance Optimization
- Minimize CSS and JavaScript
- Optimize images (use WebP format)
- Implement lazy loading for images
- Add service workers for offline support
- Use CSS sprites for icons

---


## 📧 Support & Contact

For questions, suggestions, or bug reports, please reach out or open an issue on GitHub.

---

**Last Updated**: May 18, 2026  
**Maintained by**: Tech Website Team  
**Version**: 1.0.0

---

## 🎯 Getting Help

### Common Issues

**Q: Cart items disappearing after refresh?**  
A: Ensure cookies/localStorage is enabled in your browser settings.

**Q: Login not working?**  
A: Check browser console (F12) for errors. Verify localStorage is accessible.

**Q: Images not loading?**  
A: placeholder images require internet connection. For offline use, replace with local image paths.

**Q: Checkout not processing?**  
A: This is a demo with mock payment. Complete the form and click confirm to proceed.

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

For older browsers, some features may not work correctly.

---

**Happy Shopping! 🛍️**
