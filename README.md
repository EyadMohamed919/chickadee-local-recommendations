# chickadee-local-recommendations

A Next.js app that displays nearby points of interest (POIs) based on the user's location, with category filters for Restaurants, Cafes, Shops, and Parks.

## Features

- **Location-based POI display** — shows nearby recommendations using a distance calculation utility
- **Category filters** — toggle between Restaurants, Cafes, Shops, and Parks
- **Responsive navbar** — Home and About navigation with branded styling
- **Tailwind CSS v4** — utility-first styling with custom color theme

## Tech Stack

- **Framework:** Next.js 15.3.0 (App Router)
- **Language:** TypeScript 5
- **UI:** React 19, Tailwind CSS 4
- **Fonts:** Geist via `next/font`
- **Linting:** ESLint 9 (flat config)

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edit `src/app/page.tsx` to modify the home page; changes hot-reload automatically.

## Configuration

- **Path aliases:** `@/*` maps to `./src/*` (see `tsconfig.json`)
- **ESLint:** flat config in `eslint.config.mjs`, extends `next/core-web-vitals` and `next/typescript`
- **PostCSS:** configured in `postcss.config.mjs`

## Project Structure

```text
src/app/
├── layout.tsx           # Root layout with Geist fonts
├── page.tsx             # Home page with filters and Recommendation
├── globals.css          # Global styles
├── components/
│   ├── navbar.tsx       # Navigation bar
│   └── Recommendation.tsx  # POI recommendation display
└── functions/
    └── calculateDistance.tsx  # Distance utility
```

## Contributing

Contributions and feedback are welcome. Please open an issue or submit a pull request with a clear description of the change.
