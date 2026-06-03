import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { MotionReveal } from "./motion-reveal";

type SectionHeadingProps = ComponentPropsWithoutRef<"div"> & {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
  titleId?: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  title,
  titleId,
  ...props
}: SectionHeadingProps) {
  return (
    <MotionReveal
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" ? "mx-auto text-center" : undefined,
        className,
      )}
      variant="slide-up"
    >
      <div {...props}>
        {eyebrow ? (
          <p className="mb-3 text-sm font-black uppercase tracking-normal text-brand-yellow">
            {eyebrow}
          </p>
        ) : null}
        <h2 id={titleId} className="text-3xl font-black text-brand-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </MotionReveal>
  );
}
