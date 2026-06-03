import Image from "next/image";

import type { LeadershipProfile } from "@/types/champion";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type LeadershipCardProps = {
  leader: LeadershipProfile;
  rolesLabel: string;
};

export function LeadershipCard({ leader, rolesLabel }: LeadershipCardProps) {
  const titleId = `${leader.id}-leadership-title`;

  return (
    <MotionReveal className="h-full" hoverScale variant="fade-in">
      <article
        aria-labelledby={titleId}
        className="combat-card combat-card--accent h-full overflow-hidden"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-panel">
          <Image
            src={leader.image.src}
            alt={leader.image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <Badge variant="accent">{rolesLabel}</Badge>
          <h3 id={titleId} className="mt-4 text-2xl font-black text-brand-white">
            {leader.name}
          </h3>
          <ul className="mt-5 grid gap-3">
            {leader.roles.map((role) => (
              <li key={role} className="flex gap-3 leading-7 text-neutral-200">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-yellow"
                />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </MotionReveal>
  );
}
