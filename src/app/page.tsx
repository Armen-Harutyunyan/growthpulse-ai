import { Suspense } from "react";
import { cookies } from "next/headers";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { LeadForm } from "@/components/lead-form";
import { Toaster } from "@/components/ui/sonner";
import { SectionErrorBoundary } from "@/components/error-boundary";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/ui/brand";
import type { Metadata } from "next";

// Define the variant type
type Variant = "A" | "B";

export const metadata: Metadata = {
  metadataBase: new URL("https://growthpulse-ai.vercel.app/"),
  title: "GrowthPulse AI | Your marketing stack, diagnosed in minutes.",
  description: "GrowthPulse AI connects to your CRM, email, ad accounts, and analytics to generate an automated diagnostic report scoring performance across 7 growth dimensions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
// ... rest remains the same
    title: "GrowthPulse AI | Your marketing stack, diagnosed in minutes.",
    description: "Automated marketing diagnostic for B2B SaaS companies. Get your 7-Dimension Growth Score and a 90-day roadmap.",
    images: ["/api/og"],
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthPulse AI",
    description: "Automated marketing diagnostic for B2B SaaS.",
    images: ["/api/og"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GrowthPulse AI",
  "url": "https://growthpulse-ai.com",
  "logo": "https://growthpulse-ai.com/api/og",
  "description": "GrowthPulse AI connects to a company’s existing marketing tools and generates an automated diagnostic report scoring performance across 7 growth dimensions.",
  "sameAs": [
    "https://twitter.com/growthpulseai",
    "https://linkedin.com/company/growthpulseai"
  ]
};

function HeroSkeleton() {
  return (
    <div className="min-h-screen sm:min-h-[90vh] flex flex-col items-center justify-center py-24 px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-20 w-3/4 opacity-60" />
          <div className="flex gap-4">
            <Skeleton className="h-16 w-48 rounded-xl" />
            <Skeleton className="h-16 w-32 rounded-xl" />
          </div>
        </div>
        <Skeleton className="h-[500px] w-full rounded-3xl opacity-20" />
      </div>
    </div>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const variant = (cookieStore.get('gp_hero_variant')?.value as Variant) || 'A';

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Features</a>
            <a href="#pricing" className="text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#lead-form" className="text-sm font-bold px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all">Get Diagnosis</a>
          </div>
        </div>
      </nav>

      {/* Page Sections wrapped in Boundaries to ensure resilience */}
      <SectionErrorBoundary sectionName="Hero">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero variant={variant} />
        </Suspense>
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="SocialProof">
        <SocialProof />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Features">
        <Features />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Pricing">
        <Pricing />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="LeadForm">
        <LeadForm />
      </SectionErrorBoundary>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
               <Logo className="mb-6" />
              <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed">
                The honest friend who reads your dashboards and tells you exactly where you&apos;re losing money.
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-widest text-xs mb-6 opacity-40">Product</h3>
              <ul className="space-y-4 font-bold opacity-80">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-widest text-xs mb-6 opacity-40">Security</h3>
              <ul className="space-y-4 font-bold opacity-80 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security Overview</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <span>© 2026 GrowthPulse AI. No humans were harmed in the making of this diagnostic.</span>
            <span>Proudly built by Azarian Growth Agency Candidate.</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Toaster position="bottom-right" theme="dark" richColors />
    </main>
  );
}
