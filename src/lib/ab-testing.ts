"use client";

import { useEffect, useState } from "react";

export type Variant = "A" | "B";

const AB_TEST_KEY = "growthpulse_hero_variant";

interface AnalyticsWindow extends Window {
  posthog?: {
    set_person_properties: (props: Record<string, string | number | boolean>) => void;
    capture: (eventName: string, props?: Record<string, unknown>) => void;
  };
}

export function useABTest(initialVariant?: Variant): Variant {
  const [variant, setVariant] = useState<Variant>(initialVariant || "A");

  useEffect(() => {
    // If a server variant is provided, we don't need random assignment
    if (initialVariant) return;

    if (typeof window === "undefined") return;
    
    const saved = localStorage.getItem(AB_TEST_KEY);
    let selected: Variant;
    
    if (saved === "A" || saved === "B") {
      selected = saved;
    } else {
      selected = Math.random() > 0.5 ? "B" : "A";
      localStorage.setItem(AB_TEST_KEY, selected);
    }
    
    // Defer state update to next tick to avoid cascading render warning
    const timeout = setTimeout(() => {
      setVariant(selected);
    }, 0);
    
    // Track segment assignment
    const win = window as unknown as AnalyticsWindow;
    if (win.posthog) {
      win.posthog.set_person_properties({ ab_test_variant: selected });
    }

    return () => clearTimeout(timeout);
  }, [initialVariant]);

  return variant;
}

type HeroContent = {
  headline: string;
  subheadline: string;
  cta: string;
};

export const HeroVariants = {
  A: {
    headline: "Your marketing stack, diagnosed in minutes.",
    subheadline: "GrowthPulse AI connects to your existing tools and generates a diagnostic report scoring performance across 7 growth dimensions.",
    cta: "Start My Free Diagnosis",
  },
  B: {
    headline: "Stop guessing. Start growing. The data-driven diagnostic for B2B SaaS.",
    subheadline: "Get a board-ready 90-day roadmap with specific recommendations ranked by expected impact and effort. All in under 5 minutes.",
    cta: "Diagnose My Growth Score",
  },
} as const satisfies Record<Variant, HeroContent>;
