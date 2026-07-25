# Resume → Website Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio site's Experiences, Projects, and About content to match Michael's current resume, additively (keep non-resume content).

**Architecture:** Content-only edits to three files — two static data modules (`data/experiences.js`, `data/projects.js`) that pages map over, and one prose page component (`pages/About.jsx`). No routing, component, or styling changes.

**Tech Stack:** React 19, Vite 7, Tailwind v4. Commands run from `personal_website/`.

## Global Constraints

- All commands run from `/Users/mxu/Developer/PersonalWebsite/personal_website`.
- **No test framework exists** in this repo (no `test` script/runner). The verification gate for every task is `npm run build` completing without error, plus the manual check named in the task.
- Additive reconcile: do not remove existing entries the resume omits (coaching, TA, CUDA/crypto/FP8 side projects, other projects).
- Preserve existing data-object shapes exactly:
  - experiences item: `{ title, company?, period?, description, tags: [] }`
  - project: `{ id, category, title, preview, details, image, tech: [], links: [{label,url}] }`
- Match existing code style: 2-space indent, single quotes, trailing comma on project objects as in the current file.
- Work on branch `resume-website-sync` (already checked out). Do not touch `.DS_Store`.

---

### Task 1: Update Experiences data (Zocdoc + NISC + UrsaWorks)

**Files:**
- Modify: `personal_website/src/data/experiences.js`

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces: nothing other tasks depend on (consumed only by `pages/Experiences.jsx`, unchanged).

- [ ] **Step 1: Replace the entire `Work` category block.** Find the current `Work` block:

```javascript
  {
    category: 'Work',
    items: [
      {
        title: 'Backend Software Engineer',
        company: 'NISC',
        period: 'Current',
        description: 'Modernizing enterprise billing systems by converting legacy PL/SQL scripts into modular Java hooks. Reduced batch runtime on a platform processing 90M+ statements per cycle.',
        tags: ['Java', 'PL/SQL', 'Backend', 'Performance']
      }
    ]
  },
```

Replace it with (Zocdoc first, newest to oldest):

```javascript
  {
    category: 'Work',
    items: [
      {
        title: 'Software Engineer Intern',
        company: 'Zocdoc',
        period: 'Summer 2026',
        description: 'Shipped a React payment-recovery module unifying failed-payment status, balance, spend-lock state, and retry timing on the billing page, replacing a manual flow behind ~20% of billing support tickets. Built a C# endpoint that charges outstanding balances on demand outside the daily billing queue, cutting balance resolution from 24h to ~5 min with locking to prevent double-charges. Extended a C# read endpoint to power decline reasons and per-account restriction state.',
        tags: ['React', 'TypeScript', 'C#', 'Payments']
      },
      {
        title: 'Software Engineer Intern',
        company: 'NISC',
        period: 'May 2025 – Sept 2025',
        description: 'Re-architected legacy billing hooks into modular Spring Boot services with structured Java DAO/BO layers, delivering a 40% runtime speedup on 100M+ statement batches. Established a repeatable PL/SQL-to-Java modernization pipeline and migration playbook across 100+ legacy billing hooks.',
        tags: ['Java', 'Spring Boot', 'SQL', 'Backend', 'Performance']
      }
    ]
  },
```

- [ ] **Step 2: Update the UrsaWorks item in the `Clubs and other interests` category.** Find:

```javascript
      {
        title: 'UrsaWorks Robotics — Computer Vision Team Lead',
        description: 'Led perception pipeline development for autonomous robotics systems, owning end-to-end computer vision from data labeling through production deployment. Implemented YOLO-based real-time object detection with Co-DETR auto-labeling to reduce annotation overhead. Optimized inference latency and throughput-accuracy tradeoffs on NVIDIA Jetson Orin Nano using DeepStream for GPU-accelerated pipelines. Focused on embedded GPU constraints including memory bandwidth, batching, and power efficiency.',
        tags: ['YOLO', 'Computer Vision', 'DeepStream', 'Jetson Orin Nano', 'Object Detection', 'Edge ML', 'GPU Optimization', 'Team Leadership']
      },
```

Replace with:

```javascript
      {
        title: 'UrsaWorks Robotics — Computer Vision Team Lead',
        description: 'Sole frontend maintainer of a React platform supporting 100+ active members, shipping features and fixes across all engineering teams and cutting page-load time ~40% through component refactoring and asset optimization. Led perception pipeline development for autonomous robotics: end-to-end computer vision from data labeling through production deployment, with YOLO-based real-time object detection and Co-DETR auto-labeling on NVIDIA Jetson Orin Nano via DeepStream — contributing to a top-8 of 24 finish at RoboMaster Nationals.',
        tags: ['React', 'YOLO', 'Computer Vision', 'DeepStream', 'Jetson Orin Nano', 'Edge ML', 'RoboMaster', 'Team Leadership']
      },
```

- [ ] **Step 3: Verify the build succeeds.**

Run: `npm run build`
Expected: build completes, ending with `✓ built in ...` and no errors.

- [ ] **Step 4: Visual check.**

Run: `npm run dev`, open the Experiences page. Expected: Work shows **Zocdoc (Summer 2026)** then **NISC (May 2025 – Sept 2025)**; Clubs shows the updated UrsaWorks entry mentioning RoboMaster top-8. Stop the dev server.

- [ ] **Step 5: Commit.**

```bash
git add personal_website/src/data/experiences.js
git commit -m "Sync Experiences with resume: add Zocdoc, update NISC + UrsaWorks"
```

---

### Task 2: Update Projects data (add Workout Coach, refresh Musical Network)

**Files:**
- Modify: `personal_website/src/data/projects.js`

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces: nothing other tasks depend on (consumed only by `pages/Projects.jsx` / `ProjectDetail.jsx`, unchanged).

- [ ] **Step 1: Add the Workout Coach project.** Insert this object as the first element of the `projects` array, immediately after `const projects = [` and before the `id: '06'` (Job Application Tracker) object:

```javascript
  {
    id: '07',
    category: 'webdev',
    title: 'Workout Coach',
    preview: 'Real-time AI workout form coach — HackWashU 2026 finalist.',
    details: 'A real-time AI workout coach that delivers rep counting and live form feedback by integrating a YOLOv8 pose-estimation model directly into a Next.js frontend, enabling frame-by-frame quality analysis with no backend roundtrips. Uses multi-persona LLM routing with configurable prompt tuning to reduce irrelevant suggestions and personalize sessions, and persists workout history and session state in a normalized Supabase schema, deployed end-to-end on Vercel. Finalist at HackWashU 2026 and the Mayfield AI Garage Pitch, selected from 50+ competing teams.',
    image: null,
    tech: ['React', 'Next.js', 'TypeScript', 'Supabase', 'YOLOv8', 'Vercel'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MichaelXu27/WorkoutCoach'
      }
    ],
  },
```

- [ ] **Step 2: Refresh the Musical Collaboration Network Analysis `details`.** Find the `id: '03'` object's `details` string:

```javascript
    details: 'This project performs large-scale link prediction on a Discogs music collaboration network spanning more than 130 years of music history (1897–2025). It analyzes collaboration patterns among over 1,000 artists connected by more than 10,000 edges, using multiple machine learning and graph-based approaches to predict future collaborations. A central focus of the work is era-specific modeling, which accounts for major shifts in music culture, technology, and artist ecosystems across five distinct musical periods. Feel free to check out the project repository below for a more detailed description.',
```

Replace that one line with:

```javascript
    details: 'Large-scale link prediction on a Discogs music collaboration network spanning 130 years (1897–2025). I parsed a 10GB+ Discogs XML dump via memory-efficient iterative parsing to build a graph of 1,000+ artists and 10,000+ edges, enriched with Spotify API genre data. Future collaborations are predicted using graph link-prediction methods (Common Neighbors, Jaccard, Adamic-Adar, Louvain) in NetworkX, reaching 0.85 AUC with a grid-search-optimized hybrid model combining structural and community features. An era-based temporal framework splits the network into 5 musical periods with chronological train/test splits, outperforming a single global model by 5–10% AUC. Feel free to check out the project repository below for a more detailed description.',
```

Leave that project's `tech` and `links` unchanged.

- [ ] **Step 3: Verify the build succeeds.**

Run: `npm run build`
Expected: build completes with `✓ built in ...` and no errors.

- [ ] **Step 4: Visual check.**

Run: `npm run dev`, open the Projects page and the Workout Coach detail page (`/projects/07`). Expected: Workout Coach card appears with the HackWashU tagline and its GitHub link works; Musical Network detail shows the updated 0.85 AUC text. Stop the dev server.

- [ ] **Step 5: Commit.**

```bash
git add personal_website/src/data/projects.js
git commit -m "Add Workout Coach project; refresh Musical Network details from resume"
```

---

### Task 3: Update About page (3+1 program + Zocdoc tense)

**Files:**
- Modify: `personal_website/src/pages/About.jsx`

**Interfaces:**
- Consumes: nothing.
- Produces: nothing other tasks depend on.

- [ ] **Step 1: Fix the degree wording.** Find this paragraph:

```jsx
          Hello! My name is Michael, and I'm currently a junior at Washington University in St. Louis, pursuing a degree in Computer Science with minors in Human-Computer Interaction and Electrical Engineering. I enjoy working on scalable backend systems as well as hands-on projects in game development and web applications. I am particularly interested in AI and how it is being used both in the workforce and in daily life, from optimizing business processes to enhancing the way people interact with technology. I'm excited to continue exploring opportunities where I can apply these interests to create meaningful and impactful solutions.
```

Replace only the first sentence, so the paragraph begins:

```jsx
          Hello! My name is Michael, and I'm a rising senior at Washington University in St. Louis, where I'm in a 3+1 accelerated program — finishing my undergrad in three years and a master's in one — putting me on track for an M.S. in Computer Science by May 2027, with minors in Human-Computer Interaction and Electrical Engineering. I enjoy working on scalable backend systems as well as hands-on projects in game development and web applications. I am particularly interested in AI and how it is being used both in the workforce and in daily life, from optimizing business processes to enhancing the way people interact with technology. I'm excited to continue exploring opportunities where I can apply these interests to create meaningful and impactful solutions.
```

- [ ] **Step 2: Update the Zocdoc paragraph to present tense.** Find:

```jsx
          This upcoming summer you can find me at Zocdoc in Soho, NY!. I'm looking forward to the fast-paced startup environment and diving into the world of health tech! I'm going to continue grinding leetcode and building cool projects on the side. Stay tuned for more updates! I'll also be applying to Fall and Spring Coop roles.
```

Replace with:

```jsx
          This summer you can find me at Zocdoc in Soho, NY! I'm loving the fast-paced environment and diving into the world of health tech. I'm going to continue grinding leetcode and building cool projects on the side. Stay tuned for more updates! I'll also be applying to Fall and Spring Co-op roles.
```

- [ ] **Step 3: Verify the build succeeds.**

Run: `npm run build`
Expected: build completes with `✓ built in ...` and no errors.

- [ ] **Step 4: Visual check.**

Run: `npm run dev`, open the About page (`/`). Expected: bio reads "rising senior … 3+1 accelerated program … M.S. in Computer Science by May 2027"; Zocdoc paragraph reads in present tense. Stop the dev server.

- [ ] **Step 5: Commit.**

```bash
git add personal_website/src/pages/About.jsx
git commit -m "Update About: 3+1 program framing and present-tense Zocdoc"
```

---

## Self-Review

**Spec coverage:**
- experiences.js Work (Zocdoc add + NISC update) → Task 1 ✓
- experiences.js Clubs (UrsaWorks update, kept in place) → Task 1 ✓
- Leadership & Teaching unchanged → no task needed (additive) ✓
- projects.js Workout Coach add → Task 2 ✓
- projects.js Musical Network refresh → Task 2 ✓
- About.jsx degree (3+1) → Task 3 ✓
- About.jsx Zocdoc tense → Task 3 ✓
- Skills section skipped (out of scope) → correctly absent ✓

**Placeholder scan:** No TBD/TODO; every edit shows exact before/after content. ✓

**Type consistency:** All experiences items keep `{title, company?, period?, description, tags}`; the new project keeps `{id, category, title, preview, details, image, tech, links}` with `id: '07'` (unused id, no collision with existing 01–06). ✓
