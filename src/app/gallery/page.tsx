import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { buildGalleryJsonLd, buildStaticPageMetadata } from "@/lib/seo";
import { Gallery } from "@/sections/gallery";

export const dynamic = "force-static";

export const metadata: Metadata = buildStaticPageMetadata({
  path: "/gallery",
  title: "Gallery",
  description:
    "Browse CRUSTFIT INDIA training photos and official YouTube video embeds for combat sports, martial arts, events and competitions in Kollam.",
  keywords: [
    "CRUSTFIT INDIA gallery",
    "boxing training photos Kollam",
    "combat sports videos Kerala",
    "martial arts academy gallery",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={buildGalleryJsonLd()} />
      <Gallery headingLevel={1} />
    </>
  );
}
