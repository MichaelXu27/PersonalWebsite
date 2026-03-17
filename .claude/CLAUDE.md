# PersonalWebsite — Claude Context

## Project Overview

A personal portfolio SPA for Michael Xu, a CS student at Washington University in St. Louis. Deployed to GitHub Pages at `https://mxu27.github.io/PersonalWebsite/`.

## Tech Stack

- **React 19** with React Router v7 (SPA, no SSR)
- **Vite 7** — build tool and dev server
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **p5.js** — particle background animation
- **gh-pages** — deployment to GitHub Pages

## Repository Structure

```
personal_website/          # Main project root (run all commands here)
├── src/
│   ├── App.jsx            # Root layout + routing
│   ├── main.jsx           # React entrypoint; sets BrowserRouter basename
│   ├── style.css          # Global styles + Tailwind layers (.project_card)
│   ├── api.js             # API helpers (unused, stub for future backend)
│   ├── components/
│   │   ├── Modal.jsx              # Portal-based modal with Escape key support
│   │   ├── StarfieldBackground.jsx # Canvas starfield (currently in use)
│   │   └── ParticleBackground.jsx  # p5.js alternative background
│   ├── pages/
│   │   ├── About.jsx, Projects.jsx, ProjectDetail.jsx
│   │   ├── Experiences.jsx        # WIP
│   │   ├── Hobbies.jsx            # Opens badminton modal
│   │   └── Links.jsx
│   ├── portals/
│   │   └── badmintonPortal.jsx    # Modal content for hobbies
│   ├── data/
│   │   └── projects.js            # Static project data (3 projects)
│   └── assets/                    # Images, PDFs, logo
├── index.html
├── vite.config.js                 # base: '/PersonalWebsite/'
└── package.json
```

## Common Commands

All commands run from `personal_website/`:

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build to /dist
npm run preview   # Preview production build locally
npm run deploy    # Build + push to gh-pages branch
```

## Key Conventions

- **Dark theme**: black background, `text-slate-400/300` hierarchy, `sky-400` for accent links
- **Layout**: sidebar nav on desktop (`md:` breakpoint), top bar on mobile
- **Routing**: dynamic project pages at `/projects/:projectId`; `NavLink` with active-state styling
- **Background**: `StarfieldBackground` is mounted in `App.jsx` at `z-0`; all content sits at `z-10`
- **Modals**: use `Modal.jsx` (React Portal) — supports Escape key dismissal
- **Static data**: project content lives in `data/projects.js`, not fetched from an API
- **No backend**: Spring Boot backend was removed; `api.js` is a stub only

## Deployment Notes

- GitHub Pages base path is `/PersonalWebsite/` — configured in both `vite.config.js` and `main.jsx` BrowserRouter `basename`
- Deploy with `npm run deploy` from `personal_website/`; the `predeploy` script auto-runs the build
- Do not change the `base` config or `basename` without updating both files
