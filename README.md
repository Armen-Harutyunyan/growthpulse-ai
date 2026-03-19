# GrowthPulse AI — Marketing Diagnostic System

Built for the Azarian Growth Agency Candidate Assessment.

**Live URL**: [Pending Deployment]  
**Repository**: [Pending Access]

## 🚀 Overview

GrowthPulse AI is a high-performance marketing diagnostic platform built with a "Vibe Coding" approach—leveraging modern AI assistants to rapidly translate strategic growth principles into technical reality. 

The system connects to a company’s marketing stack, analyzes data across 7 growth dimensions, and generates a prioritized AI-driven roadmap.

## 🛠 Tech Stack

- **Framework**: [Next.js 15/16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: [PostHog](https://posthog.com/) & Local Event Tracking
- **Persistence**: Local JSON Storage (Mock) / Scalable to Supabase
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features Implemented

### 1. High-Converting Landing Page
- **Midnight Data Theme**: A premium, data-driven aesthetic using deep charcoal (#09090B) and vibrant indigo/emerald accents.
- **Micro-animations**: Subtle entrance animations and interactive data visualization overlays using Framer Motion.
- **Mobile Responsive**: Fully optimized for all device sizes.

### 2. Marketing Systems Architecture
- **A/B Testing Capability**: Built-in client-side variant assignment (Variant A vs. Variant B) for the Hero headline, with persistence via `localStorage`.
- **UTM Tracking**: Automatic capturing and persistence of UTM parameters (`source`, `medium`, `campaign`, etc.) for lead attribution.
- **Custom Event Tracking**: Tracking for CTA clicks, form starts, and submission success/errors.

### 3. Lead Capture & Data Storage
- **Validated Form**: Client-side validation using Zod and React Hook Form.
- **Serverless API**: Lead data is processed and stored in `data/leads.json` (simulating a production database).
- **Post-Submission Flow**: Animated success states and instant feedback via Sonner toasts.

## 🧪 A/B Testing Strategy

| Variant | Headline | Primary CTA |
|---------|----------|-------------|
| **A (Control)** | Your marketing stack, diagnosed in minutes. | Start My Free Diagnosis |
| **B (Provocative)** | Stop guessing. Start growing. | Diagnose My Growth Score |

## 📦 Setup & Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Check Captured Leads**:
   Leads are saved locally to `./data/leads.json`.

## 🧠 Architectural Decisions & Trade-offs

- **Tailwind 4 & Next.js 16**: Opted for the absolute cutting edge to demonstrate forward-compatibility and speed, despite minor linting irregularities with new CSS-in-JS rules.
- **Local Persistence**: Used a local JSON file to ensure the prototype is "zero-config" for reviewers, while the API is architected to switch to Supabase or Airtable with one line of code.
- **Abstract Visuals**: Eschewed stock photography in favor of high-tech abstract data visualizations to align with the "data-driven" brand positioning.

---
Built with ⚡️ by Google Senior Frontend Specialist / Antigravity AI.
