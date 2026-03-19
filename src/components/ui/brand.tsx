import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-black text-white italic">GP</div>
      <span className="text-xl font-black tracking-tighter uppercase italic">
        GrowthPulse <span className="text-primary italic">AI</span>
      </span>
    </div>
  );
}

export function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6",
      className
    )}>
      {children}
    </div>
  );
}
