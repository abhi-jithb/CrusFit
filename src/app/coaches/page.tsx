import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { buildCoachesJsonLd, buildStaticPageMetadata } from "@/lib/seo";
import { Coaches } from "@/sections/coaches";

export const dynamic = "force-static";

export const metadata: Metadata = buildStaticPageMetadata({
  path: "/coaches",
  title: "Coaches",
  description:
    "Meet the scalable CRUSTFIT INDIA coaching profile directory for Boxing, Kickboxing, MMA, Jiu Jitsu, Sambo, Yoga and performance training in Kollam.",
  keywords: [
    "CRUSTFIT INDIA coaches",
    "boxing coach Kollam",
    "MMA coach Kollam",
    "martial arts coach Kerala",
  ],
});

export default function CoachesPage() {
  return (
    <>
      <JsonLd data={buildCoachesJsonLd()} />
      <Coaches headingLevel={1} />
    </>
  );
}
