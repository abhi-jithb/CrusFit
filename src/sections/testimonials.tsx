import { SectionWrapper } from "@/components/section-wrapper";
import { MotionReveal } from "@/components/ui";
import { testimonialThemes } from "@/data/home";

export function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Testimonials"
      title="Built for verified member stories."
      description="This section is ready for real testimonials without using fabricated quotes. The current content defines the kinds of outcomes the academy can document after launch."
      className="bg-brand-ink"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonialThemes.map((item) => (
          <li key={item.title}>
            <MotionReveal className="h-full" hoverScale>
              <article className="combat-card combat-card--dark combat-card--interactive h-full p-6">
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
