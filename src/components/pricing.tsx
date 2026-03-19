"use client";

import { motion } from "framer-motion";
import { Check, Zap, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for early-stage SaaS trying to find traction.",
    features: [
      "Up to 5 Integrations",
      "Monthly diagnostic reports",
      "Quarterly Action Plans",
      "2 user seats",
      "Email support",
    ],
    icon: Zap,
    popular: false,
    cta: "Start Diagnostics",
  },
  {
    name: "Growth",
    price: "$1,299",
    description: "For scaling teams that need tighter feedback loops.",
    features: [
      "Up to 15 Integrations",
      "Weekly diagnostic reports",
      "Monthly Action Plans",
      "5 user seats",
      "Priority email + chat support",
    ],
    icon: Rocket,
    popular: true,
    cta: "Scale Your ROI",
  },
  {
    name: "Scale",
    price: "$2,999",
    description: "Enterprise-grade performance monitoring and strategy.",
    features: [
      "Unlimited Integrations",
      "Daily diagnostic + alerts",
      "Live Strategy Dashboard",
      "Unlimited user seats",
      "Dedicated success manager",
    ],
    icon: ShieldCheck,
    popular: false,
    cta: "Unlock Expansion",
  },
];

export function Pricing() {
  return (
    <section className="py-12 md:py-24 px-4 bg-background relative overflow-hidden" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 py-1 px-4 text-primary bg-primary/5 uppercase tracking-wider font-bold border-primary/20">
            Investment Tiers
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
            Plans Built for <span className="text-primary">Performance Obsessives.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the diagnostic frequency that matches your growth velocity. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col border-2 border-white/5 bg-background relative overflow-hidden transition-all duration-300 ${tier.popular ? 'border-primary/50 glow-primary scale-[1.05] z-10' : 'hover:border-white/20'}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 p-4">
                    <Badge className="bg-primary text-white font-bold py-1 px-3">MOST POPULAR</Badge>
                  </div>
                )}
                
                <CardHeader className="pb-8">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-6">
                    <tier.icon className={`w-6 h-6 ${tier.popular ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <CardTitle className="text-3xl font-black mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">{tier.description}</CardDescription>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                    <span className="text-muted-foreground font-medium">/mo</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm font-medium opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-8">
                  <Button 
                    className={`w-full py-7 text-lg font-bold rounded-xl transition-all duration-300 ${tier.popular ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/80'}`}
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-sm text-muted-foreground">
          All plans include 30-day money-back guarantee. No hidden setup fees.
        </p>
      </div>
    </section>
  );
}
