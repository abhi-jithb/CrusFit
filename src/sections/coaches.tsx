import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, CoachProfileCard } from "@/components/ui";
import { coaches } from "@/data/coaches";
import { homePageContent } from "@/data/site-content";

type CoachesProps = {
  headingLevel?: 1 | 2;
  preview?: boolean;
  sectionId?: string;
};

export function Coaches({ headingLevel, preview = false, sectionId = "coaches" }: CoachesProps) {
  const content = homePageContent.coaches;
  const visibleCoaches = preview ? coaches.slice(0, 3) : coaches;

  return (
    <SectionWrapper
      id={sectionId}
      eyebrow={content.eyebrow}
      headingLevel={headingLevel}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {visibleCoaches.map((coach) => (
          <li key={coach.id}>
            <CoachProfileCard coach={coach} labels={content.cardLabels} />
          </li>
        ))}
      </ul>
      {preview ? (
        <div className="mt-8">
          <ButtonLink href={content.viewAllCta.href} variant="secondary">
            {content.viewAllCta.label}
          </ButtonLink>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
