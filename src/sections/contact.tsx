import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, MotionReveal } from "@/components/ui";
import { siteConfig } from "@/constants/site";

const contactDetails = [
  {
    label: "Location",
    value: `${siteConfig.location.city}, ${siteConfig.location.region}, ${siteConfig.location.country}`,
  },
  {
    label: "Training enquiries",
    value:
      "Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba.",
  },
  {
    label: "Launch content",
    value:
      "Verified batch timings, contact channels and map details can be connected before launch.",
  },
];

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Start training with CRUSTFIT INDIA."
      description="Use this foundation to connect official enquiry channels, verified location links and class schedules when the academy operations content is ready."
      className="bg-brand-ink"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <MotionReveal className="combat-card combat-card--accent p-6 sm:p-8" variant="fade-in">
          <h3 className="text-2xl font-black text-brand-white">Kollam combat sports academy</h3>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
            CRUSTFIT INDIA is positioned for athletes who want structured combat sports training and
            for members who want purposeful fitness through martial arts, Yoga and Zumba.
          </p>
          <ButtonLink
            className="mt-6"
            href="https://www.google.com/maps/search/?api=1&query=CRUSTFIT%20INDIA%20Kollam%20Kerala"
            target="_blank"
          >
            Search location
          </ButtonLink>
        </MotionReveal>
        <dl className="grid gap-4">
          {contactDetails.map((item) => (
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
