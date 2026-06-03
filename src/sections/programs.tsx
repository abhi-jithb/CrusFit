import { SectionWrapper } from "@/components/section-wrapper";
import { programs } from "@/data/home";

export function Programs() {
  return (
    <SectionWrapper
      id="programs"
      eyebrow="Programs"
      title="Striking, grappling, martial arts and performance fitness."
      description="The program foundation keeps every discipline visible from day one, while leaving room for dedicated class pages, schedules and coach assignments later."
      className="bg-brand-ink"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <li key={program.title}>
            <article className="flex h-full flex-col rounded-lg border border-white/10 bg-brand-black p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-brand-white">{program.title}</h3>
                <p className="text-right text-sm font-bold text-brand-yellow">{program.level}</p>
              </div>
              <p className="mt-4 leading-7 text-neutral-300">{program.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-neutral-400">
                {program.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
