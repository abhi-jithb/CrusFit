import { SectionWrapper } from "@/components/section-wrapper";

const academyPillars = [
  {
    title: "Combat-first coaching",
    summary:
      "Training is organized around useful technique, safe intensity and measurable progress.",
  },
  {
    title: "Beginner-aware pathways",
    summary:
      "New athletes can start with foundations before moving toward sparring or advanced classes.",
  },
  {
    title: "Fitness with purpose",
    summary:
      "Strength, conditioning, mobility and rhythm-based sessions support the combat programs.",
  },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About the academy"
      title="A professional combat sports base in Kollam."
      description="CRUSTFIT INDIA brings striking, grappling, martial arts and performance fitness into one disciplined academy environment for athletes, beginners and fitness-focused members."
      className="bg-brand-black"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {academyPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-lg border border-white/10 bg-brand-ink p-6"
          >
            <h3 className="text-xl font-black text-brand-white">{pillar.title}</h3>
            <p className="mt-3 leading-7 text-neutral-300">{pillar.summary}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
