# Shipped Studio Landing Page

A modern, responsive landing page built with Next.js 15 and Tailwind CSS 4, designed to showcase Shipped Studio's development services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS 4
- **Custom Fonts**: DM Sans for headings, Inter for body text
- **Interactive Components**: FAQ accordion, mobile navigation, hover effects
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🎨 Design Sections

1. **Hero Section**: Gradient background with main heading, CTA buttons, and mockup placeholders
2. **Stats Section**: Key metrics display (100+ projects, 14 days, $28M+)
3. **Why We're Different**: Comparison table with check/cross features
4. **Built to Build**: Grid of use cases with placeholder icons
5. **Our Process**: 4-step vertical layout with illustrations
6. **Pricing Packages**: Three pricing tiers with highlighted middle plan
7. **Testimonials**: Customer reviews with ratings and avatars
8. **Team Section**: Team member cards with roles
9. **FAQ Section**: Expandable accordion with common questions
10. **Call to Action**: Gradient background with conversion focus
11. **Footer**: Company info, navigation, and contact details

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **UI Components**: Headless UI (Accordion)
- **Icons**: React Icons
- **Fonts**: Google Fonts (DM Sans, Inter)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── WhyDifferentSection.tsx
│   │   ├── BuiltToBuildSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI components
│       └── MobileNav.tsx
└── lib/                    # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shipped-studio-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* Custom primary colors */ },
  secondary: { /* Custom secondary colors */ }
}
```

### Fonts
Modify font imports in `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');
```

### Content
Update section content in respective component files under `src/components/sections/`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌟 Key Features

- **Mobile-First Design**: Responsive across all devices
- **Performance Optimized**: Fast loading and smooth interactions
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO Ready**: Meta tags, structured data, and semantic markup
- **Modern Animations**: Smooth transitions and hover effects
- **Component-Based**: Modular architecture for easy maintenance

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
