# Easy Employ — IT Jobs Platform

A modern IT job board application built with React, TypeScript, Redux Toolkit, and Styled Components. Inspired by Pracuj.pl / Nimbly Easy Employ.

🔗 **Live Demo:** [mizdebski77.github.io/Easy-Employ](https://mizdebski77.github.io/Easy-Employ/)

---

## Features

- 💼 **Job Offers** — Browse IT listings with real-time search, multi-filter sidebar, and sort options
- 🧮 **Salary Calculator** — Full UoP / UoZ / UoD / B2B net salary calculation (2024 Polish rates)
- 👤 **Career Profile** — Work experience, education, skills, languages, courses, hobbies
- 📄 **Apply Form** — Per-offer application with validation and CV upload
- 🔐 **Auth Pages** — Login, Register, Password Reset with form validation
- 🌐 **Language Switcher** — UI for 6 languages (EN, PL, DE, IT, FR, ES)
- 📱 **Fully Responsive** — Mobile nav with Framer Motion animations
- 🎨 **Dark Theme** — Consistent dark palette with Syne + DM Sans typography

---

## Tech Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Framework   | React 18 + TypeScript                   |
| Routing     | React Router v6                         |
| State       | Redux Toolkit                           |
| Server state| React Query v5                          |
| Styling     | Styled Components v6                    |
| Animation   | Framer Motion                           |
| UI          | React Icons, React Toastify             |
| File upload | react-drag-drop-files                   |
| Backend     | Node.js / Express on Render.com         |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> **Note:** The backend is hosted on Render.com free tier. The first request may take ~30 seconds to wake up.

---

## Project Structure

```
src/
├── common/          # Shared components (Nav, Footer, Loader, Error)
├── core/            # Redux store, theme, global styles, interfaces
└── features/
    ├── Home/        # Landing page with hero, offers preview, feature tiles
    ├── JobOffers/   # Offers list + filters + offer detail + apply form
    ├── Calculator/  # Gross/net salary calculator (UoP, UoZ, UoD, B2B)
    ├── Carrer/      # Career profile page
    ├── Creator/     # CV Creator (forms + preview)
    ├── LogIn/       # Login + password reset
    └── Register/    # Registration form
```

---

## Portfolio Highlights

- **Feature-based architecture** — each feature is self-contained with component + styled + slice
- **Redux Toolkit + React Query** — UI state vs server state properly separated
- **Full TypeScript** — interfaces for all data shapes, typed Redux selectors
- **Working salary calculator** — real Polish 2024 tax formulas for all 4 contract types
- **Responsive design** — 3 breakpoints, animated mobile navigation

---

*Built by Marek Zdebski*
