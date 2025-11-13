# VyomGarud — UAV Systems Landing Page

Modern, responsive landing page with a military-grade, professional identity. Built with React, Vite, Tailwind CSS, and Framer Motion. Includes a lightweight Express API for a full‑stack feel.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (subtle animations)

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (e.g. `http://localhost:5173/`).

Backend API (optional, for live data):

```bash
npm run server
```

This serves `/api/metrics`, `/api/news`, `/api/careers` at `http://localhost:5000` and is proxied by Vite.

## Project Structure
- `src/components/` reusable sections: Navbar, Hero, About, Capabilities, Highlights, Contact, Footer
- `src/App.jsx` page composition
- `src/index.css` Tailwind and global theme styles
- `tailwind.config.js` theme (colors, fonts)
 - `server/index.js` Express API for metrics/news/careers/contact
 - `scripts/capture.js` automated screenshots (requires dev server running)

## Design
- Dark aesthetic: charcoal background, orange accent `#ff7b00`
- Fonts: Poppins / Inter
- Reusable cards and headers
- Responsive layout and subtle motion

## Deployment
1. Build: `npm run build`
2. Preview: `npm run preview`
3. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages).

## Screenshots
Automated screenshots are generated into `screenshots/`.

Run:

```bash
npm run dev
node scripts/capture.js
```

Images produced:

- `screenshots/hero.png`
- `screenshots/about.png`
- `screenshots/capabilities.png`
- `screenshots/metrics.png`
- `screenshots/contact.png`

## Progressive Commits
Suggested commit flow to keep history clean:

1. `feat: scaffold React + Vite + Tailwind base`
2. `feat(ui): add Navbar, Hero, About sections`
3. `feat(ui): add Capabilities, Highlights; theme and utilities`
4. `feat(api): add Express endpoints (metrics, news, careers, contact)`
5. `chore(vite): proxy /api to backend`
6. `feat(ui): add TechStack, Metrics (API), Partners, News (API), Careers (API), FAQ`
7. `feat(dev): add Puppeteer screenshot script and docs`
8. `docs: expand README with screenshots and run instructions`

Use:

```bash
git init
git add -A
git commit -m "feat: scaffold React + Vite + Tailwind base"
# ... repeat add/commit for each step above
git remote add origin <your-repo-url>
git push -u origin main
```