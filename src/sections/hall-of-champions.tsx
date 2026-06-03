import { SectionWrapper } from "@/components/section-wrapper";
import { Badge, MotionReveal, StatCard } from "@/components/ui";
import { championAchievements, championPerformerGroups } from "@/data/achievements";
import { homePageContent } from "@/data/site-content";

export function HallOfChampions() {
  const content = homePageContent.champions;

  return (
    <SectionWrapper
      id="hall-of-champions"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-ink"
    >
      <dl aria-label={content.statsAriaLabel} className="grid gap-4 sm:grid-cols-3 lg:max-w-4xl">
        {content.stats.map((stat) => (
          <StatCard key={`${stat.value}-${stat.label}`} label={stat.label} value={stat.value} />
        ))}
      </dl>

      <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {championAchievements.map((champion, index) => (
          <li key={champion.id}>
            <MotionReveal className="h-full" delay={Math.min(index * 0.03, 0.18)} hoverScale>
              <article
                aria-labelledby={`${champion.id}-title`}
                className="combat-card combat-card--interactive h-full overflow-hidden bg-[linear-gradient(145deg,rgba(245,196,0,0.08),rgba(17,17,17,0.92)_42%,rgba(5,5,5,0.98))] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p
                    aria-hidden="true"
                    className="text-4xl font-black leading-none text-brand-yellow/25"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <ul className="flex flex-wrap justify-end gap-2">
                    {champion.disciplines.map((discipline) => (
                      <li key={discipline}>
                        <Badge variant="subtle">{discipline}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3
                  id={`${champion.id}-title`}
                  className="mt-6 text-2xl font-black text-brand-white"
                >
                  {champion.name}
                </h3>

                <ul
                  aria-label={`${content.cardAchievementLabel} for ${champion.name}`}
                  className="mt-5 grid gap-3"
                >
                  {champion.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 leading-7 text-neutral-200">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-yellow"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-4">
        {championPerformerGroups.map((group) => (
          <MotionReveal key={group.id} hoverScale variant="fade-in">
            <article className="combat-card combat-card--accent overflow-hidden p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase text-brand-yellow">
                    {content.performerEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-brand-white sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-300">{group.summary}</p>
                </div>
                <ul
                  aria-label={`${content.performerRosterLabel}: ${group.title}`}
                  className="grid gap-3 sm:grid-cols-3"
                >
                  {group.performers.map((performer) => (
                    <li
                      key={performer}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-black text-brand-white"
                    >
                      {performer}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
