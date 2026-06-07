# PMC World - Meditation & Spiritual Awakening

A modern, high-performance website for PMC World built with Next.js, React, and Tailwind CSS. The site showcases meditation practices, spiritual teachings, and community engagement with rich media experiences.

## 🌟 Features

### Homepage
- **Hero Carousel** - 5 rotating slides with background images and meditation/spiritual content
- **Interactive Video Player** - Muted YouTube video in hero section (plays on click with audio)
- **Quality of Life Section** - 6 interactive video cards with hover-to-play functionality
- **Responsive Navigation** - Fixed top navigation with logo, nav items, social icons, and language selector
- **Golden Accent Theme** - Premium color scheme (#D4AF37) throughout

### Interactive Elements
- ✨ Smooth Framer Motion animations
- 🎬 Video backgrounds with hover controls
- 🎠 Swiper carousel with pagination and navigation
- 🌍 Language selector (English/Marathi)
- 📱 Fully responsive design (mobile, tablet, desktop)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.7 (with Turbopack)
- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Carousel**: Swiper
- **Language**: TypeScript
- **Fonts**: Open Sans (Google Fonts), Geist (Vercel)

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "16.2.7",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "framer-motion": "^12.40.0",
    "swiper": "^12.2.0",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "typescript": "^5",
    "eslint": "^9"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd C:\Users\USER\workplace\freelancing\pmcworld
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pmcworld/
├── app/
│   ├── page.tsx          # Homepage with all sections
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles & Tailwind config
├── public/
│   └── favicon.png       # PMC World logo
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Color Palette

- **Primary Gold**: `#D4AF37` - Main accent color
- **Gold Dark**: `#C49A2F` - Hover/dark variant
- **Gold Light**: `#F4DF8D` - Highlight variant
- **Background**: `#0a0a0a` - Dark theme
- **Text**: `#ffffff` - Light text on dark

## 🎬 Key Components

### Hero Carousel
- Auto-rotates every 8 seconds
- Manual navigation with arrows
- Clickable pagination dots
- Integrated YouTube video player (bottom-right)

### Quality of Life Section
- 6 interactive video cards
- Videos load on page load (paused at first frame)
- Play smoothly on hover
- Pause and reset when mouse leaves
- Responsive grid (1.5→2→3→4 slides per view)

### Navigation
- Fixed top bar
- Social media links (Facebook, Instagram, YouTube)
- Language dropdown
- Responsive hamburger menu (mobile-ready)

## 🔧 Configuration

### Environment Variables
None required for basic development.

### Tailwind CSS
Configured in `tailwind.config.ts` with custom colors and fonts.

### Next.js
- Turbopack enabled for fast builds
- TypeScript strict mode
- Image optimization
- Font optimization (Google Fonts + Vercel Geist)

## 📝 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Social Links

- 🔗 [Facebook](https://www.facebook.com/Pmcworldd)
- 📷 [Instagram](https://www.instagram.com/pmc_world)
- 🎥 [YouTube](https://www.youtube.com/@pmcworld)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Swiper Documentation](https://swiperjs.com/)

## 📄 License

This project is private and proprietary to PMC World.

## 🤝 Support

For issues or questions, refer to CLAUDE.md for development guidelines.

---

**Built with ❤️ using Next.js and Tailwind CSS**
