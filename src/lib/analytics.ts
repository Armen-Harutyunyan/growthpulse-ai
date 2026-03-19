"use client";

export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

interface AnalyticsWindow extends Window {
  posthog?: {
    capture: (eventName: string, props?: Record<string, unknown>) => void;
  };
}

export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};
  const searchParams = new URL(window.location.toString()).searchParams;
  return {
    utm_source: searchParams.get("utm_source") || undefined,
    utm_medium: searchParams.get("utm_medium") || undefined,
    utm_campaign: searchParams.get("utm_campaign") || undefined,
    utm_term: searchParams.get("utm_term") || undefined,
    utm_content: searchParams.get("utm_content") || undefined,
  };
}

export function captureEvent(eventName: string, properties: Record<string, unknown> = {}) {
  const win = typeof window !== "undefined" ? (window as unknown as AnalyticsWindow) : null;
  
  // 1. PostHog (if integrated via env or SDK)
  if (win?.posthog) {
    win.posthog.capture(eventName, properties);
  }

  // Debugging log for development
  if (process.env.NODE_ENV === "development") {
    console.info(`[Analytics] ${eventName}:`, properties);
  }
}

export const AnalyticsEvents = {
  CTA_CLICK: "cta_click",
  FORM_START: "lead_form_start",
  FORM_SUBMIT_SUCCESS: "lead_form_submit_success",
  FORM_SUBMIT_ERROR: "lead_form_submit_error",
  SCROLL_DEPTH: "page_scroll_depth",
} as const;
