---
description: Workflow for adding a new feature section to the GrowthPulse AI landing page
---

# Feature Injection Workflow

Follow these steps to ensure any new section maintains the "Midnight Data" aesthetic and technical resilience.

## 1. Requirement Definition
- Specify the section name and core value proposition.
- Choose a vibrant accent color from the theme: `primary` (indigo), `secondary` (emerald), or `accent` (violet).

## 2. Component Creation
- Create the file in `src/components/[name].tsx`.
- // turbo
- Must export a functional component named `[Name]`.
- Must use `motion` from `framer-motion` for entry animations.

## 3. Analytics Integration
- Add a new constant to `AnalyticsEvents` in `src/lib/analytics.ts`.
- Ensure all major buttons in the new section call `captureEvent`.

## 4. Resilience
- Wrap the component in `SectionErrorBoundary` within `src/app/page.tsx`.
- Provide a `Suspense` boundary if fetching external data.

## 5. Verification
- Run `npm run lint` to ensure no Type Safety regressions.
- Verify mobile responsiveness with `py-12 md:py-24` pattern.
