# game-hub-store

A modern game marketplace landing page built with Next.js, TypeScript, Tailwind CSS & shadcn/ui. Dark-themed design with responsive layout and smooth animations.

## Features

- 🎮 Featured games showcase with tags and pricing
- 💬 Player reviews section with ratings
- 🎨 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🧩 Built with Shadcn/ui components

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nhat-Huy-05/game-hub-store.git
cd game-hub-store

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Shadcn UI components
│   ├── game-card.tsx      # Game card component
│   ├── featured-games.tsx # Featured games section
│   ├── player-reviews.tsx # Reviews section
│   └── ...
├── lib/                   # Utility functions
└── public/                # Static assets
    └── images/            # Game images
```

## Components Overview

### Game Card

- Displays game information with image
- Shows genre and tags
- Includes price and discount badges
- Hover effects for interactivity

### Featured Games

- Grid layout with responsive columns
- 6 featured games with real images
- Genre and feature tags
- Price tracking with discounts

### Player Reviews

- 9 player reviews with ratings
- Mix of positive reviews
- Constructive feedback
- Avatar badges with gradients

## License

This project is open source and available under the MIT License.

## Author

Created by Nhat-Huy-05
