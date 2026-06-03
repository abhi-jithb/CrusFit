import Image from "next/image";

import type { GalleryPhoto } from "@/types/gallery";

import { Badge } from "./badge";
import { MotionReveal } from "./motion-reveal";

type GalleryPhotoCardProps = {
  index: number;
  photo: GalleryPhoto;
};

export function GalleryPhotoCard({ index, photo }: GalleryPhotoCardProps) {
  return (
    <MotionReveal className="h-full" delay={Math.min(index * 0.04, 0.16)} hoverScale>
      <article className="combat-card combat-card--interactive h-full overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-panel">
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-300 hover:scale-105"
            style={{ objectPosition: photo.objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="outline">{photo.title}</Badge>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-black text-brand-white">{photo.title}</h3>
          <p className="mt-2 leading-7 text-neutral-300">{photo.summary}</p>
        </div>
      </article>
    </MotionReveal>
  );
}
