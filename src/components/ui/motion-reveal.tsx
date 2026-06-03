"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
  variant?: "fade-in" | "slide-up";
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  hoverScale = false,
  variant = "slide-up",
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = variant === "fade-in" ? { opacity: 0 } : { opacity: 0, y: 18 };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : initial}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      whileHover={shouldReduceMotion || !hoverScale ? undefined : { scale: 1.02 }}
      className={cn(hoverScale ? "origin-center" : undefined, className)}
    >
      {children}
    </motion.div>
  );
}
