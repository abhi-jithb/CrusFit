import { SectionWrapper } from "@/components/section-wrapper";
import { MotionReveal } from "@/components/ui";
import { homePageContent } from "@/data/site-content";

export function About() {
  const content = homePageContent.about;

  return (
    <SectionWrapper
      id="about"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {content.pillars.map((pillar) => (
          <MotionReveal key={pillar.title} className="h-full" hoverScale>
            <article className="combat-card combat-card--interactive h-full p-6">
              <h3 className="text-xl font-black text-brand-white">{pillar.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{pillar.summary}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
