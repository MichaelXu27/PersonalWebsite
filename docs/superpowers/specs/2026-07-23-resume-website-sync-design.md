# Resume → Website Sync — Design

**Date:** 2026-07-23
**Source:** `Michael_Xu_s_Resume(6:22:26).pdf`
**Goal:** Reconcile the portfolio site's content with the current resume. Additive: refresh resume-backed entries, keep personal/extra content the resume omits (coaching, TA, CUDA/crypto/FP8 side projects, other projects).

## Scope

Content-only. No architecture, routing, or component changes. Three files edited:

- `personal_website/src/data/experiences.js`
- `personal_website/src/data/projects.js`
- `personal_website/src/pages/About.jsx`

## Decisions (from brainstorming)

- **Non-resume content:** keep it; this is an additive reconcile, not a replace.
- **Degree:** Michael is a rising senior in a **3+1 accelerated program** (undergrad in 3 years + master's in 1), on track for an **M.S. in CS by May 2027**, minors in HCI & EE. Replaces the "junior" framing.
- **UrsaWorks:** stays under "Clubs and other interests"; update in place with resume metrics while keeping existing CV depth (DeepStream, Jetson, Co-DETR).
- **Skills section:** skipped (not adding a skills block to the site).
- **Workout Coach link:** `https://github.com/MichaelXu27/WorkoutCoach` (GitHub only; no separate demo URL).

## Changes

### `data/experiences.js`

**Work** (order newest-first: Zocdoc, then NISC):

- **NEW — Zocdoc, Software Engineer Intern**, period "Summer 2026".
  Description: shipped a React payment-recovery module unifying failed-payment status, balance, spend-lock state, and retry timing on the billing page (replacing a manual flow behind ~20% of billing support tickets); built a C# endpoint charging outstanding balances on demand outside the daily billing queue, cutting balance resolution from 24h to ~5 min with locking to prevent double-charges; extended a C# read endpoint to power decline reasons and per-account restriction state.
  Tags: `React, TypeScript, C#, Payments`

- **UPDATE — NISC**: title → "Software Engineer Intern", company "NISC", period → "May 2025 – Sept 2025".
  Description: re-architected legacy billing hooks into modular Spring Boot services with structured Java DAO/BO layers, delivering a 40% runtime speedup on 100M+ statement batches; established a repeatable PL/SQL-to-Java modernization pipeline and migration playbook across 100+ legacy hooks.
  Tags: `Java, Spring Boot, SQL, Backend, Performance`

**Leadership & Teaching** — unchanged (Head Coach, Assistant Coach, TA).

**Clubs and other interests**:

- **UPDATE — UrsaWorks Robotics** (keep "Computer Vision Team Lead" framing + existing CV depth): fold in resume metrics — sole frontend maintainer of a React platform supporting 100+ active members, ~40% page-load reduction via refactoring/asset optimization, and a YOLO-based real-time detection pipeline on NVIDIA Jetson contributing to a top-8 of 24 finish at RoboMaster Nationals. Keep DeepStream/Jetson/Co-DETR detail. Update tags to include RoboMaster/frontend as appropriate.
- CUDA Kernels / Secure Socket Encryption / FP8 Research — unchanged.

### `data/projects.js`

- **NEW — Workout Coach** (id `07`, category `webdev`):
  preview: "Real-time AI workout form coach — HackWashU 2026 finalist."
  details: real-time rep counting and live form feedback by integrating a YOLOv8 pose-estimation model into a Next.js frontend (frame-by-frame analysis, no backend roundtrips); multi-persona LLM routing with configurable prompt tuning to reduce irrelevant suggestions; normalized Supabase schema for user history/session state; deployed end-to-end on Vercel. Finalist at HackWashU 2026 and Mayfield AI Garage Pitch (selected from 50+ teams).
  tech: `React, Next.js, TypeScript, Supabase, YOLOv8, Vercel`
  links: GitHub → `https://github.com/MichaelXu27/WorkoutCoach`

- **UPDATE — Musical Collaboration Network Analysis** (id `03`): sharpen details with resume numbers — parsed a 10GB+ Discogs XML dump via memory-efficient iterative parsing to build a graph of 1,000+ artists and 10,000+ edges over 130 years (1897–2025), enriched with Spotify API genre data; predicted collaborations via graph link-prediction (CN, Jaccard, AA, Louvain) in NetworkX reaching 0.85 AUC with a grid-search-optimized hybrid model; era-based temporal framework over 5 musical periods beating a single global model by 5–10% AUC. Keep existing links (GitHub + Research Report).

### `pages/About.jsx`

- Replace "junior pursuing a degree" wording with the 3+1 framing: rising senior in a 3+1 accelerated program (BS + master's), on track for an M.S. in Computer Science by May 2027, minors in HCI & EE.
- Update the stale Zocdoc paragraph from future tense ("This upcoming summer you can find me at Zocdoc") to present tense reflecting the summer 2026 internship in Soho, NY.

## Out of scope

- Skills block on the site.
- Links page / contact info changes.
- Any layout, styling, or component structure changes.

## Verification

- `npm run build` succeeds.
- Manual: Experiences page shows Zocdoc + updated NISC under Work, updated UrsaWorks under Clubs; Projects page shows Workout Coach + updated Musical Network; About reflects 3+1 program and present-tense Zocdoc.
