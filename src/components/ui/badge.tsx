import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: "accent" | "outline" | "subtle";
};

const badgeVariants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent: "border-brand-yellow bg-brand-yellow text-brand-black",
  outline: "border-brand-yellow/45 bg-brand-yellow/10 text-brand-yellow",
  subtle: "border-white/10 bg-white/5 text-neutral-300",
};

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md border px-2.5 py-1 text-xs font-black uppercase tracking-normal",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
