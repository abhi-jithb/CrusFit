import type { Program } from "@/types/content";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <MotionReveal className="h-full" hoverScale>
      <article className="combat-card combat-card--dark flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-brand-white">{program.title}</h3>
          <Badge variant="accent" className="shrink-0">
            {program.level}
          </Badge>
        </div>
        <p className="mt-4 leading-7 text-neutral-300">{program.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {program.focus.map((focus) => (
            <li key={focus}>
              <Badge variant="subtle">{focus}</Badge>
            </li>
          ))}
        </ul>
      </article>
    </MotionReveal>
  );
}
