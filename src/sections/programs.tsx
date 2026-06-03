import { SectionWrapper } from "@/components/section-wrapper";
import { ProgramCard } from "@/components/ui";
import { programs } from "@/data/programs";
import { homePageContent } from "@/data/site-content";

export function Programs() {
  const content = homePageContent.programs;

  return (
    <SectionWrapper
      id="programs"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
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
