import type { VideoItem } from "@/types/video";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type VideoEmbedCardProps = {
  embedTitle: string;
  index: number;
  sourceLabel: string;
  video: VideoItem;
};

export function VideoEmbedCard({ embedTitle, index, sourceLabel, video }: VideoEmbedCardProps) {
  return (
    <MotionReveal className="h-full" delay={Math.min(index * 0.04, 0.16)} hoverScale>
      <article className="combat-card combat-card--interactive h-full overflow-hidden">
        <div className="aspect-video bg-brand-panel">
          <iframe
            title={`${embedTitle}: ${video.title}`}
            src={video.embedUrl}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
        <div className="p-5">
          <Badge variant="accent">YouTube</Badge>
          <h3 className="mt-4 text-xl font-black text-brand-white">{video.title}</h3>
          <p className="mt-2 leading-7 text-neutral-300">{video.summary}</p>
          <a
            href={video.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-10 items-center text-sm font-black uppercase text-brand-yellow transition hover:text-brand-white"
          >
            {sourceLabel}
          </a>
        </div>
      </article>
    </MotionReveal>
  );
}
