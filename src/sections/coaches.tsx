import { SectionWrapper } from "@/components/section-wrapper";
import { coachRoles } from "@/data/home";

export function Coaches() {
  return (
    <SectionWrapper
      id="coaches"
      eyebrow="Coaching team"
      title="Specialist coaching roles for every training path."
      description="The coach directory is structured for verified profiles, credentials and class ownership as the academy content is finalized."
      className="bg-brand-black"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {coachRoles.map((coach) => (
          <li key={coach.role}>
            <article className="h-full rounded-lg border border-white/10 bg-brand-ink p-6">
              <h3 className="text-xl font-black text-brand-white">{coach.role}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{coach.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
