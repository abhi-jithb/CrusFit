import { JsonLd } from "@/components/json-ld";
import { buildHallOfChampionsJsonLd } from "@/lib/seo";
import { About } from "@/sections/about";
import { Coaches } from "@/sections/coaches";
import { Contact } from "@/sections/contact";
import { Gallery } from "@/sections/gallery";
import { HallOfChampions } from "@/sections/hall-of-champions";
import { Hero } from "@/sections/hero";
import { Programs } from "@/sections/programs";
import { Testimonials } from "@/sections/testimonials";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <JsonLd data={buildHallOfChampionsJsonLd()} />
      <Hero />
      <About />
      <Programs />
      <HallOfChampions />
      <Coaches />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
