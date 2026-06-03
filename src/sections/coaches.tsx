import { SectionWrapper } from "@/components/section-wrapper";
import { CoachProfileCard } from "@/components/ui";
import { coaches } from "@/data/coaches";
import { homePageContent } from "@/data/site-content";

export function Coaches() {
  const content = homePageContent.coaches;

  return (
    <SectionWrapper
      id="coaches"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {coaches.map((coach) => (
          <li key={coach.name}>
            <CoachProfileCard coach={coach} labels={content.cardLabels} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
