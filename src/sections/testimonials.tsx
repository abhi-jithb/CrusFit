import { SectionWrapper } from "@/components/section-wrapper";
import { MotionReveal } from "@/components/ui";
import { homePageContent } from "@/data/site-content";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const content = homePageContent.testimonials;

  return (
    <SectionWrapper
      id="testimonials"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-ink"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <li key={item.title}>
            <MotionReveal className="h-full" hoverScale>
              <article className="combat-card combat-card--dark combat-card--interactive h-full p-6">
                <p className="text-sm font-bold text-brand-yellow">{item.sourceLabel}</p>
                <h3 className="text-xl font-black text-brand-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{item.summary}</p>
              </article>
            </MotionReveal>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
