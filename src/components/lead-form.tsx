"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  CheckCircle2, 
  Loader2, 
  Send, 
  ShieldCheck, 
  Globe, 
  Mail, 
  User, 
  ChevronRight 
} from "lucide-react";
import { AnalyticsEvents, captureEvent, getUTMParams } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  website: z.string().url("Please enter a valid company website URL"),
  monthlySpend: z.string().min(1, "Please select or enter your estimated monthly ad spend"),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      monthlySpend: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    captureEvent(AnalyticsEvents.FORM_START, { ...values });

    try {
      const utms = getUTMParams();
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...utms }),
      });

      if (!response.ok) throw new Error("Submission failed");

      captureEvent(AnalyticsEvents.FORM_SUBMIT_SUCCESS, { ...values });
      setIsSuccess(true);
      toast.success("Marketing stack diagnosis initiated!");
      form.reset();
    } catch (error) {
      captureEvent(AnalyticsEvents.FORM_SUBMIT_ERROR, { error: String(error) });
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 px-4 bg-muted/20 relative overflow-hidden" id="lead-form">
       {/* Background Decor */}
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
            Ready for your <span className="text-primary">Growth Audit?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect your stack and get your 7-Dimension Growth Score in under 5 minutes. No commitment required.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">SOC 2 Type II Compliant</div>
                <div className="text-sm text-muted-foreground">Your data is encrypted and never shared.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-lg">30+ Native Integrations</div>
                <div className="text-sm text-muted-foreground">HubSpot, Meta, GA4, Klaviyo, and more.</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 glass rounded-2xl border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-2">
              <Send className="w-3 h-3" />
              Real-time Analysis
            </div>
            <p className="text-sm font-bold opacity-80 leading-relaxed">
              94% of audited companies find at least one critical &quot;spend-leak&quot; in their first report.
            </p>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <Card className="border-2 border-white/10 glass shadow-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-8 sm:p-10"
                >
                  <CardHeader className="p-0 mb-8 text-center sm:text-left">
                    <CardTitle className="text-2xl font-black mb-2">Initialize Diagnosis</CardTitle>
                    <CardDescription className="text-base">Provide your details to sync your marketing stack.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3 h-3 text-primary" /> Full Name
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} className="bg-white/5 border-white/10 h-12 focus:border-primary/50 transition-all duration-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <Mail className="w-3 h-3 text-primary" /> Business Email
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="jane@company.com" {...field} className="bg-white/5 border-white/10 h-12 focus:border-primary/50 transition-all duration-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <Globe className="w-3 h-3 text-primary" /> Company Website
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="https://company.io" {...field} className="bg-white/5 border-white/10 h-12 focus:border-primary/50 transition-all duration-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="monthlySpend"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <Send className="w-3 h-3 text-primary" /> Monthly Ad Spend
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="$10,000+" {...field} className="bg-white/5 border-white/10 h-12 focus:border-primary/50 transition-all duration-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full h-14 text-lg font-bold group rounded-xl bg-primary hover:bg-primary/90 glow-primary mt-4 transition-all duration-500"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing Stack...</>
                          ) : (
                            <>Get My Growth Score <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-12 sm:p-16 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">Audit Initiated!</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                    We&apos;ve started analyzing your stack. You&apos;ll receive your Executive Summary via email in under 5 minutes.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 rounded-xl px-12 h-12 border-white/10 glass hover:bg-white/5"
                    onClick={() => setIsSuccess(false)}
                  >
                    Resubmit for another site
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
