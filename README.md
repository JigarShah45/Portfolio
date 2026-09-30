# Jigar Shah Portfolio

A modern, dynamic portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [LINK](https://i-am-jigarshah.netlify.app/) to view the portfolio.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion), GSAP
- **3D:** React Three Fiber, Three.js
- **Smooth Scroll:** Lenis
- **Theme:** next-themes
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable components
│   ├── layout/    # Navbar, Footer, MobileMenu
│   ├── providers/ # ThemeProvider, SmoothScrollProvider
│   ├── three/     # 3D scene components
│   └── ui/        # Button, Badge, TiltCard, etc.
├── data/          # Editable data files
├── lib/           # Utilities and constants
└── sections/      # Page sections
```

## Editing Content

All content is data-driven. Edit the files in `src/data/`:

- **projects.ts** — Add/remove/edit projects
- **skills.ts** — Manage skills and categories
- **experience.ts** — Update work experience
- **services.ts** — Modify services offered
- **social.ts** — Update social links and navigation

## Customization

- **Colors:** Edit `globals.css` CSS variables and `tailwind.config.ts`
- **Fonts:** Modify font imports in `layout.tsx`
- **3D Scene:** Edit `components/three/HeroScene.tsx`

## Build

```bash
npm run build
npm start
```
