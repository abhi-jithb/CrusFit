import { SectionWrapper } from "@/components/section-wrapper";
import { Badge, MotionReveal } from "@/components/ui";
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
            <MotionReveal className="h-full" hoverScale>
              <article className="combat-card combat-card--interactive h-full p-6">
                <p className="text-sm font-bold text-brand-yellow">{coach.role}</p>
                <h3 className="mt-2 text-xl font-black text-brand-white">{coach.name}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{coach.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {coach.disciplines.map((discipline) => (
                    <li key={discipline}>
                      <Badge variant="subtle">{discipline}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
