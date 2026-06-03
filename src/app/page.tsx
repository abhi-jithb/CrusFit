import { About } from "@/sections/about";
import { Coaches } from "@/sections/coaches";
import { Contact } from "@/sections/contact";
import { Gallery } from "@/sections/gallery";
import { Hero } from "@/sections/hero";
import { Programs } from "@/sections/programs";
import { Testimonials } from "@/sections/testimonials";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Coaches />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
