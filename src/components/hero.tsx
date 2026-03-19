"use client";

import { useABTest, HeroVariants } from "@/lib/ab-testing";
import { AnalyticsEvents, captureEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, ArrowRight, BarChart3, Cpu } from "lucide-react";

import { SectionBadge } from "@/components/ui/brand";

export function Hero() {
  const variant = useABTest();
  const content = HeroVariants[variant];

  const handleCtaClick = () => {
    captureEvent(AnalyticsEvents.CTA_CLICK, {
      variant,
      section: "hero",
      cta_text: content.cta,
    });
    // Smooth scroll to lead form
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen sm:min-h-[90vh] flex flex-col items-center justify-center py-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 data-grid" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SectionBadge>
              <Zap className="w-4 h-4" />
              <span>AI-Powered Marketing Diagnostic</span>
            </SectionBadge>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60">
            {content.headline}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            {content.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="px-8 py-7 text-lg font-bold glow-primary rounded-xl"
              onClick={handleCtaClick}
            >
              {content.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-7 text-lg font-semibold rounded-xl border-white/10 glass hover:bg-white/5"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 sm:max-w-md">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Companies Audited</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">32%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Avg ROI Boost</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">4.8/5</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Customer Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative z-10 w-full aspect-square max-w-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl glass">
            <Image 
              src="/images/hero_dataviz.png" 
              alt="GrowthPulse AI Data Visualization" 
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Data Points */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-8 left-8 p-4 glass rounded-2xl flex items-center gap-3 border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase font-bold">Growth Score</span>
                <span className="text-xl font-black text-secondary">87/100</span>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-8 right-8 p-4 glass rounded-2xl flex items-center gap-3 border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase font-bold">AI Diagnostics</span>
                <span className="text-md font-bold text-accent">Active...</span>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background shape */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
