import { SectionWrapper } from "@/components/section-wrapper";
import { ProgramCard } from "@/components/ui";
import { programs } from "@/data/home";

export function Programs() {
  return (
    <SectionWrapper
      id="programs"
      eyebrow="Programs"
      title="Striking, grappling, martial arts and performance fitness."
      description="The program foundation keeps every discipline visible from day one, while leaving room for dedicated class pages, schedules and coach assignments later."
      className="bg-brand-ink"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <li key={program.title}>
            <ProgramCard program={program} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
