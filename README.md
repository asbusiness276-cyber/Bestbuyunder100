# BestBuyUnder100 - Affiliate Product Recommendation Platform

A premium affiliate website for discovering the best affordable products under $100. Built with React, TypeScript, Tailwind CSS, and powered by Amazon affiliate links.

## Overview

BestBuyUnder100 is a modern, high-performance affiliate site focused on helping budget-conscious shoppers find quality products. The initial launch features **16 window air conditioner models** with in-depth comparisons, pros/cons analysis, and direct affiliate CTAs.

### Features

- **Smart Product Filtering** - Filter by cooling power, energy savings, or quiet mode
- **Advanced Sorting** - Sort by price, rating, or BTU performance
- **Expandable Comparison Table** - 8-product quick comparison view
- **Interactive Product Cards** - Star ratings, feature tags, expandable pros/cons, animated CTAs
- **FAQ Section** - 8 comprehensive Q&As about window ACs
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO-Optimized** - Breadcrumbs, structured data ready, fast load times
- **Affiliate Trust** - Clear disclosure badges and affiliate transparency

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **UI Icons**: Lucide React
- **Database Ready**: Supabase integration (@supabase/supabase-js)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation + brand header with scroll detection
│   ├── Hero.tsx            # Full-bleed hero with filters and CTAs
│   ├── ProductCard.tsx     # Main product card with pros/cons expand
│   ├── ComparisonTable.tsx # Quick 8-product comparison table
│   ├── FAQ.tsx             # Accordion FAQ section
│   └── Footer.tsx          # Footer with newsletter + links
├── data/
│   └── products.ts         # 16 window AC products with full specs
├── App.tsx                 # Main layout with filter/sort logic
├── main.tsx                # React entry point
└── index.css               # Tailwind + custom utilities
```

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:5173

### Production Build

```bash
npm run build
npm run preview
```

## Current Product Lineup

### 5000 BTU Units (150 sq ft)
- **ROVSUN** - $139 (Cheapest Pick)
- **Senville** - $143
- **Antarctic Star** - $159 (Quietest at 49dB)
- **Midea EasyCool** - $159 (Best Value)
- **TCL** - $162
- **Frigidaire** - $169 (Top Rated)
- **GE** - $164 (Editor's Choice)
- **LG** - $189 (50dB Ultra Quiet)

### 6000 BTU Units (250 sq ft)
- **ACHAZEL WiFi** - $179 (Best Value, WiFi capable)
- **ZAFRO 3-in-1** - $189 (Dehumidifier + AC)
- **Window AC 6000** - $180 (375 sq ft coverage)
- **Electactic 6000** - $189 (Top Rated)

### Alternative (Evaporative)
- **MEPTY Evaporative Cooler** - $129 (Windowless, 3-in-1)

## Performance

- **Vite Optimized** - Fast hot module replacement in dev
- **Code Splitting** - Automatic route-based chunks
- **Image Lazy Loading** - Built-in lazy loading on product cards
- **CSS Optimization** - Tailwind purges unused styles
- **Production Build**: ~185KB JavaScript (gzipped: 57.58KB)

## Monetization

- **Amazon Associates**: All product links are affiliate-eligible
- **Affiliate Disclosure**: Transparent disclosure on every page
- **Trust Badges**: Editorial standards & review methodology visible

## License

MIT License

---

**Built with ❤️ for smart budget shoppers**