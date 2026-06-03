import Image from "next/image";

import { SectionWrapper } from "@/components/section-wrapper";
import { galleryItems } from "@/data/home";

export function Gallery() {
  return (
    <SectionWrapper
      id="gallery"
      eyebrow="Gallery"
      title="A visual direction for a premium fight academy."
      description="The initial gallery establishes the dark, sharp and energetic visual language for the brand. Real training photography can replace these assets as content becomes available."
      className="bg-brand-black"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <li key={item.title}>
            <article className="overflow-hidden rounded-lg border border-white/10 bg-brand-ink">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`${item.title} at CRUSTFIT INDIA`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{
                    objectPosition:
                      index === 1 ? "center" : index === 2 ? "right center" : "left center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/25 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-brand-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-neutral-300">{item.summary}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
