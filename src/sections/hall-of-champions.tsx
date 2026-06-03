import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, ChampionCard, LeadershipCard, MotionReveal, StatCard } from "@/components/ui";
import { championPerformerGroups, champions, leadershipProfiles } from "@/data/champions";
import { homePageContent } from "@/data/site-content";

type HallOfChampionsProps = {
  headingLevel?: 1 | 2;
  preview?: boolean;
  sectionId?: string;
  showLeadership?: boolean;
};

export function HallOfChampions({
  headingLevel,
  preview = false,
  sectionId = "hall-of-champions",
  showLeadership = true,
}: HallOfChampionsProps) {
  const content = homePageContent.champions;
  const visibleChampions = preview ? champions.slice(0, 4) : champions;

  return (
    <SectionWrapper
      id={sectionId}
      eyebrow={content.eyebrow}
      headingLevel={headingLevel}
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
        {visibleChampions.map((champion, index) => (
          <li key={champion.id}>
            <ChampionCard
              achievementLabel={content.cardAchievementLabel}
              champion={champion}
              index={index}
            />
          </li>
        ))}
      </ul>

      {preview ? (
        <div className="mt-8">
          <ButtonLink href={content.viewAllCta.href} variant="secondary">
            {content.viewAllCta.label}
          </ButtonLink>
        </div>
      ) : (
        <>
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

          {showLeadership ? (
            <section aria-labelledby="leadership-title" className="mt-12">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase text-brand-yellow">
                  {content.leadership.eyebrow}
                </p>
                <h3
                  id="leadership-title"
                  className="mt-3 text-3xl font-black text-brand-white sm:text-4xl"
                >
                  {content.leadership.title}
                </h3>
                <p className="mt-5 leading-7 text-neutral-300">
                  {content.leadership.description}
                </p>
              </div>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {leadershipProfiles.map((leader) => (
                  <li key={leader.id}>
                    <LeadershipCard leader={leader} rolesLabel={content.leadership.rolesLabel} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </>
      )}
    </SectionWrapper>
  );
}
