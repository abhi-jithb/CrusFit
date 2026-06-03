import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { buildHallOfChampionsJsonLd, buildStaticPageMetadata } from "@/lib/seo";
import { HallOfChampions } from "@/sections/hall-of-champions";

export const dynamic = "force-static";

export const metadata: Metadata = buildStaticPageMetadata({
  path: "/champions",
  title: "Hall of Champions",
  description:
    "Explore CRUSTFIT INDIA champion profiles, best performers and leadership for a professional combat sports academy in Kollam, Kerala.",
  keywords: [
    "CRUSTFIT INDIA champions",
    "boxing champions Kollam",
    "combat sports academy Kollam",
    "martial arts achievements Kerala",
  ],
});

export default function ChampionsPage() {
  return (
    <>
      <JsonLd data={buildHallOfChampionsJsonLd("/champions", "champions")} />
      <HallOfChampions headingLevel={1} sectionId="champions" />
    </>
  );
}
