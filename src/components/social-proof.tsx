"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award, Quote } from "lucide-react";
import Image from "next/image";

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-muted/30 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted by Growth Teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700 max-w-4xl">
            <div className="h-16 relative w-[400px]">
              <Image 
                src="/images/fictional_logos.png" 
                alt="Fictional customer logos" 
                fill 
                className="object-contain"
              />
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
