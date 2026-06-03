import Image from "next/image";

import { Badge, ButtonLink, Container, MotionReveal, StatCard } from "@/components/ui";
import { siteConfig } from "@/constants/site";
import { programs } from "@/data/home";

const trustIndicators = ["5.0 Rating", "100+ Reviews", "Multiple Combat Disciplines"];

export function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden border-b border-white/10">
      <Image
        src="/images/crustfit-hero.png"
        alt="CRUSTFIT INDIA training floor with boxing and MMA equipment"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.88)_48%,rgba(5,5,5,0.48)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(245,196,0,0.18),transparent_26rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-brand-black to-transparent" />

      <Container className="flex min-h-svh items-center py-20 sm:py-24">
        <MotionReveal className="w-full max-w-4xl" variant="slide-up">
          <p className="text-sm font-black uppercase tracking-normal text-brand-yellow sm:text-base">
            {siteConfig.name}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] text-brand-white sm:text-6xl lg:text-7xl">
            Kollam&apos;s Premier Boxing & Martial Arts Academy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
            Train with a combat-sports academy built for serious striking, disciplined martial arts,
            strength, mobility and community in Kollam, Kerala.
          </p>
          <ul aria-label="CRUSTFIT trust indicators" className="mt-7 flex flex-wrap gap-2">
            {trustIndicators.map((indicator) => (
              <li key={indicator}>
                <Badge variant={indicator === "5.0 Rating" ? "accent" : "outline"}>
                  {indicator}
                </Badge>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#programs">Explore programs</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Book a visit
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="Rating" value="5.0" />
            <StatCard label="Reviews" value="100+" />
            <StatCard label="Combat Disciplines" value={programs.length} />
          </dl>
        </MotionReveal>
      </Container>
    </section>
  );
}
