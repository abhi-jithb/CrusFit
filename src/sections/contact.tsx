import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, MotionReveal } from "@/components/ui";
import { homePageContent, siteAssets } from "@/data/site-content";

export function Contact() {
  const content = homePageContent.contact;

  return (
    <SectionWrapper
      id="contact"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-ink"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <MotionReveal className="combat-card combat-card--accent p-6 sm:p-8" variant="fade-in">
          <h3 className="text-2xl font-black text-brand-white">{content.cardTitle}</h3>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">{content.cardDescription}</p>
          <ButtonLink className="mt-6" href={siteAssets.mapSearchUrl} target="_blank">
            {content.ctaLabel}
          </ButtonLink>
        </MotionReveal>
        <dl className="grid gap-4">
          {content.details.map((item) => (
            <MotionReveal key={item.label} className="h-full" hoverScale>
              <div className="combat-card combat-card--dark combat-card--interactive h-full p-5">
                <dt className="text-sm font-bold text-brand-yellow">{item.label}</dt>
                <dd className="mt-2 leading-7 text-neutral-300">{item.value}</dd>
              </div>
            </MotionReveal>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
