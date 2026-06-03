import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id: string;
  title: string;
};

export function SectionWrapper({
  children,
  className,
  description,
  eyebrow,
  id,
  title,
}: SectionWrapperProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-16 sm:py-20", className)}>
      <Container>
        <div className="mb-10 max-w-3xl sm:mb-12">
          {eyebrow ? <p className="mb-3 text-sm font-bold text-brand-yellow">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="text-3xl font-black text-brand-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
