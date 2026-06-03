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
import { Videos } from "@/sections/videos";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildHallOfChampionsJsonLd("/", "hall-of-champions", {
          includeGroups: false,
          includeLeadership: false,
          limit: 4,
        })}
      />
      <Hero />
      <About />
      <Programs />
      <HallOfChampions preview showLeadership={false} />
      <Coaches preview />
      <Testimonials />
      <Gallery preview />
      <Videos preview />
      <Contact />
    </>
  );
}
