import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container, SectionHeading } from "./ui";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  headingLevel?: 1 | 2;
  id: string;
  title: string;
};

export function SectionWrapper({
  children,
  className,
  description,
  eyebrow,
  headingLevel,
  id,
  title,
}: SectionWrapperProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-16 sm:py-20", className)}>
      <Container>
        <SectionHeading
          description={description}
          eyebrow={eyebrow}
          headingLevel={headingLevel}
          title={title}
          titleId={`${id}-title`}
        />
        {children}
      </Container>
    </section>
  );
}
