import Image from "next/image";

import type { ChampionProfile } from "@/types/champion";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type ChampionCardProps = {
  achievementLabel: string;
  champion: ChampionProfile;
  index: number;
};

export function ChampionCard({ achievementLabel, champion, index }: ChampionCardProps) {
  const titleId = `${champion.id}-champion-title`;

  return (
    <MotionReveal className="h-full" delay={Math.min(index * 0.03, 0.18)} hoverScale>
      <article
        aria-labelledby={titleId}
        className="combat-card combat-card--interactive h-full overflow-hidden bg-[linear-gradient(145deg,rgba(245,196,0,0.08),rgba(17,17,17,0.94)_42%,rgba(5,5,5,0.98))]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-panel">
          <Image
            src={champion.image.src}
            alt={champion.image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
          <p
            aria-hidden="true"
            className="absolute left-4 top-4 text-4xl font-black leading-none text-brand-yellow/50"
          >
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <div className="p-5 sm:p-6">
          <ul className="flex flex-wrap gap-2">
            {champion.disciplines.map((discipline) => (
              <li key={discipline}>
                <Badge variant="subtle">{discipline}</Badge>
              </li>
            ))}
          </ul>

          <h3 id={titleId} className="mt-5 text-2xl font-black text-brand-white">
            {champion.name}
          </h3>

          <ul
            aria-label={`${achievementLabel} for ${champion.name}`}
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
        </div>
      </article>
    </MotionReveal>
  );
}
