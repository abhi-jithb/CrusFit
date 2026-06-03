import Image from "next/image";

import type { Coach } from "@/types/coach";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type CoachProfileCardLabels = {
  achievements: string;
  certifications: string;
  experience: string;
};

type CoachProfileCardProps = {
  coach: Coach;
  labels: CoachProfileCardLabels;
};

function getCoachTitleId(name: string) {
  return `${name.toLowerCase().replaceAll(" ", "-")}-coach-title`;
}

export function CoachProfileCard({ coach, labels }: CoachProfileCardProps) {
  const titleId = getCoachTitleId(coach.name);

  return (
    <MotionReveal className="h-full" hoverScale>
      <article
        aria-labelledby={titleId}
        className="combat-card combat-card--interactive h-full overflow-hidden"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-panel">
          <Image
            src={coach.image.src}
            alt={coach.image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="outline">{coach.specialization}</Badge>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 id={titleId} className="text-2xl font-black text-brand-white">
            {coach.name}
          </h3>

          <dl className="mt-5 grid gap-5">
            <div>
              <dt className="text-sm font-black uppercase text-brand-yellow">
                {labels.experience}
              </dt>
              <dd className="mt-2 leading-7 text-neutral-300">{coach.experience}</dd>
            </div>

            <div>
              <dt className="text-sm font-black uppercase text-brand-yellow">
                {labels.certifications}
              </dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {coach.certifications.map((certification) => (
                    <li key={certification}>
                      <Badge variant="subtle">{certification}</Badge>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-sm font-black uppercase text-brand-yellow">
                {labels.achievements}
              </dt>
              <dd className="mt-3">
                <ul className="grid gap-2">
                  {coach.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 leading-7 text-neutral-300">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-yellow"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </MotionReveal>
  );
}
