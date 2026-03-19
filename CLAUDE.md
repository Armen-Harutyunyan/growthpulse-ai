# GrowthPulse AI — Project Guidelines

Project focusing on high-conversion marketing diagnostics for B2B SaaS.

## Core Commands
- **Dev**: `npm run dev` (Local development)
- **Build**: `npm run build` (Production build/Lint/Type-check)
- **Lint**: `npm run lint` (ESLint check)

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Analytics**: PostHog (Session replay + behavioral tracking)
- **DB/Auth**: Supabase (Lead storage via service role)
- **Emails**: Resend API

## Engineering Standards
- **Strict Typing**: Zero `any` types allowed. Use Zod for API validation.
- **Aesthetics**: Follow the "Midnight Data" theme (glassmorphism, charcoal backgrounds, precision borders).
- **Responsive**: Mobile-first paddings (`py-12`) vs Desktop (`md:py-24`).
- **SEO**: Unified metadata per page, schema.org JSON-LD snippets.

## Lead Capture Flow
1. Validation via `Zod` in `/api/leads`.
2. Storage in Supabase table `leads`.
3. Notification triggered via Resend to configured `NOTIFICATION_EMAIL`.
4. Event capture in PostHog (`lead_form_submit_success`).
