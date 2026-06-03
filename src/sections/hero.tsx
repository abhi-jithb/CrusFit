import Image from "next/image";

import { Badge, ButtonLink, Container, MotionReveal, StatCard } from "@/components/ui";
import { homePageContent, siteAssets } from "@/data/site-content";

export function Hero() {
  const content = homePageContent.hero;

  return (
    <section className="relative isolate min-h-svh overflow-hidden border-b border-white/10">
      <Image
        src={siteAssets.heroImage}
        alt={content.imageAlt}
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
            {content.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] text-brand-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
            {content.description}
          </p>
          <ul aria-label={content.trustIndicatorsLabel} className="mt-7 flex flex-wrap gap-2">
            {content.trustIndicators.map((indicator) => (
              <li key={indicator.label}>
                <Badge variant={indicator.variant}>{indicator.label}</Badge>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={content.primaryCta.href}>{content.primaryCta.label}</ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <StatCard key={`${stat.value}-${stat.label}`} label={stat.label} value={stat.value} />
            ))}
          </dl>
        </MotionReveal>
      </Container>
    </section>
  );
}
