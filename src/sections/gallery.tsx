import Image from "next/image";

import { SectionWrapper } from "@/components/section-wrapper";
import { MotionReveal } from "@/components/ui";
import { galleryItems } from "@/data/gallery";
import { homePageContent } from "@/data/site-content";

export function Gallery() {
  const content = homePageContent.gallery;

  return (
    <SectionWrapper
      id="gallery"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {galleryItems.map((item) => (
          <li key={item.title}>
            <MotionReveal className="h-full" hoverScale>
              <article className="combat-card combat-card--interactive h-full overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/25 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-brand-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-neutral-300">{item.summary}</p>
                </div>
              </article>
            </MotionReveal>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
