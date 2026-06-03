import { cn } from "@/lib/utils";

import { MotionReveal } from "./motion-reveal";

type StatCardProps = {
  className?: string;
  label: string;
  value: string | number;
};

export function StatCard({ className, label, value }: StatCardProps) {
  return (
    <MotionReveal className="h-full" hoverScale variant="fade-in">
      <div className={cn("combat-card combat-card--glass h-full p-5", className)}>
        <dt className="text-3xl font-black text-brand-yellow">{value}</dt>
        <dd className="mt-1 text-sm font-semibold text-neutral-300">{label}</dd>
      </div>
    </MotionReveal>
  );
}
