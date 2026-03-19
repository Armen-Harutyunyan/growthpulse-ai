"use client";

import { motion } from "framer-motion";
import { 
  Link2, 
  BarChart3, 
  Sparkles, 
  FileText, 
  LayoutDashboard,
  
  TrendingUp,
  
  
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "One-Click Stack Integration",
    description: "Connect HubSpot, GA4, Meta Ads, and 30+ tools via API in under 5 minutes. No dev required.",
    icon: Link2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    tag: "Integrations"
  },
  {
    title: "7-Dimension Growth Score",
    description: "Proprietary algorithm rates acquisition, retention, and 5 other growth dimensions with industry benchmarks.",
    icon: BarChart3,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    tag: "Analysis"
  },
  {
    title: "AI-Generated Action Plan",
    description: "Prioritized 90-day roadmap with specific recommendations ranked by expected impact and effort.",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    tag: "Strategy"
  },
  {
    title: "Executive Summary Report",
    description: "Auto-generates a board-ready PDF with key findings, visualized scores, and strategic recommendations.",
    icon: FileText,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    tag: "Reporting"
  },
  {
    title: "Live Dashboard",
    description: "Real-time monitoring of all 7 dimensions with alerts when performance dips below benchmarks.",
    icon: LayoutDashboard,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    tag: "Monitoring"
  }
];

import { SectionBadge } from "@/components/ui/brand";

export function Features() {
  return (
    <section className="py-12 md:py-24 px-4 bg-background relative overflow-hidden" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionBadge className="uppercase tracking-wider font-bold">
            Platform Capabilities
          </SectionBadge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
            Stop Guessing. Start Growing with <span className="text-primary">Data-Driven Precision.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don&apos;t just show you data. We show you exactly where you&apos;re losing money and how to fix it in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={i === 2 || i === 3 ? "lg:col-span-1" : ""}
            >
              <Card className={`h-full border-2 border-white/5 glass hover:bg-white/5 transition-all duration-300 group ${feature.borderColor} hover:scale-[1.02]`}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-4 font-bold text-[10px] uppercase tracking-widest">{feature.tag}</Badge>
                  <CardTitle className="text-2xl font-bold tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Growth Dimension Badge Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full border-2 border-primary/20 bg-primary/5 flex flex-col justify-center p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-32 h-32 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight relative z-10">The 7 Growth Pulse Dimensions</h3>
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {["Acquisition", "Activation", "Retention", "Revenue", "Referral", "SEO Health", "Paid Media Efficiency"].map((dim) => (
                  <div key={dim} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-bold text-sm uppercase tracking-wide opacity-80">{dim}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
