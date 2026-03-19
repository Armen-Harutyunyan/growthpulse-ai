"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award, Quote } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-muted/30 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-12">Trusted by fast-growing SaaS teams</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-blue-400" />
              </div>
              <span className="text-xl font-black tracking-tighter">NEXUS</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-black tracking-tighter italic">VANTAGE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 border-2 border-purple-500 rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full bg-purple-500 rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight">ORBIT.AI</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-black tracking-tighter">SYNTH</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-orange-500/30 rounded-full flex items-center px-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight">PULSE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-primary/10 -z-10" />
            <div className="glass p-10 rounded-3xl border-white/10 relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-2xl font-bold leading-snug mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
                “GrowthPulse found $140K in wasted ad spend we didn’t know about. It’s like having a fractional CMO reading your dashboards 24/7.”
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">VP</div>
                <div>
                  <div className="font-bold">VP Marketing</div>
                  <div className="text-sm text-muted-foreground">Fictional B2B SaaS Company</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-white/5 flex flex-col gap-3"
            >
              <Users className="w-8 h-8 text-primary" />
              <div className="text-4xl font-black">500+</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Companies Audited</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-white/5 flex flex-col gap-3"
            >
              <TrendingUp className="w-8 h-8 text-secondary" />
              <div className="text-4xl font-black">32%</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Avg ROI Improvement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-white/5 flex flex-col gap-3"
            >
              <Award className="w-8 h-8 text-accent" />
              <div className="text-4xl font-black">90 Days</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Fastest Result Time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-white/5 flex flex-col gap-3"
            >
              <Star className="w-8 h-8 text-yellow-500" />
              <div className="text-4xl font-black">4.8/5</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Customer Rating</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
