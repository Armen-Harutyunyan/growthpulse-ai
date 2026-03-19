import Link from "next/link";
import { MoveLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/brand";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 data-grid" />
      </div>

      <div className="relative z-10 max-w-xl">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="w-24 h-24 rounded-3xl glass border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-8 animate-pulse">
          <AlertTriangle className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic">
          404<span className="text-primary">:</span>Lost
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          The growth path you&apos;re looking for doesn&apos;t exist. 
          Your marketing stack might be broken, but we can help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="rounded-xl px-8 h-14 font-bold glow-primary w-full sm:w-auto">
              <MoveLeft className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
          <Link href="/#lead-form">
            <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 font-bold border-white/10 glass hover:bg-white/5 w-full sm:w-auto">
              Get Free Audit
            </Button>
          </Link>
        </div>

        <div className="mt-20 flex items-center justify-center gap-6 opacity-30">
          {["ACQUISITION", "RETENTION", "REVENUE"].map((dim) => (
             <span key={dim} className="text-[10px] font-black tracking-[0.2em]">{dim}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
