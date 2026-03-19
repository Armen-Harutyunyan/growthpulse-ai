# AI Orchestration & Developer Guidelines

This document defines the "Autonomous Developer Interface" for GrowthPulse AI. It ensures that any AI agent (Cursor, Claude, GPT-4) or human developer maintains the same level of speed and architectural integrity.

## AI Personas & Modes
- **Architect Mode**: Focus on system design, `.cursorrules` enforcement, and data modeling (Supabase).
- **Vibe Mode**: Focus on motion design (Framer Motion), UI/UX "wow" factor, and conversion optimizations.
- **Analyst Mode**: Focus on PostHog event instrumentation and A/B test reporting logic.

## The Vibe Coding Workflow
1. **Instruction First**: Define the outcome in `CLAUDE.md` before writing code.
2. **Resilient UI**: Always wrap new sections in `SectionErrorBoundary`.
3. **Analytics-Driven**: Every CTA must trigger a `captureEvent` from `src/lib/analytics.ts`.
4. **Consistency**: Use the "Midnight Data" theme tokens defined in `globals.css`.

## Automation Workflows
Workflow-specific instructions are located in `.agents/workflows/`. Use these to guide the AI during common tasks:
- `add-feature.md`: Standardized way to inject a section into `Home`.
- `ab-test-setup.md`: How to legally fork a component for experimentation.

## Security & Ethics for AI
- **Environment Safety**: Never commit `.env`. Always update `.env.example`.
- **Zod Enforcement**: No API route (server action) should process data without a Zod schema validation.
- **Accessibility**: Use semantic HTML (`section`, `header`, `footer`) to ensure AI read-speed is maximized (SEO benefit).
