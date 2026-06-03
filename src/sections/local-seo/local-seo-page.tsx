import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { Badge, ButtonLink, Container, MotionReveal, StatCard } from "@/components/ui";
import { siteConfig } from "@/constants/site";
import { buildLocalSeoJsonLd } from "@/lib/seo";
import type { LocalSeoPage as LocalSeoPageType } from "@/types/seo";

type LocalSeoPageProps = {
  page: LocalSeoPageType;
};

export function LocalSeoPage({ page }: LocalSeoPageProps) {
  return (
    <>
      <JsonLd data={buildLocalSeoJsonLd(page)} />
      <article>
        <section className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <Image
            src="/images/crustfit-hero.png"
            alt={`${page.discipline} training environment at ${siteConfig.name}`}
            fill
            priority
            className="-z-20 object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.9)_50%,rgba(5,5,5,0.58)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(245,196,0,0.16),transparent_26rem)]" />
          <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-neutral-400">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-brand-yellow">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-brand-yellow">
                  {page.title}
                </li>
              </ol>
            </nav>
            <MotionReveal className="max-w-4xl" variant="slide-up">
              <Badge variant="accent">{page.keyword}</Badge>
              <h1 className="mt-5 text-4xl font-black leading-tight text-brand-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#contact">Enquire about training</ButtonLink>
                <ButtonLink href="/#programs" variant="secondary">
                  View all programs
                </ButtonLink>
              </div>
              <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {page.stats.map((stat) => (
                  <StatCard
                    key={`${stat.value}-${stat.label}`}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </dl>
            </MotionReveal>
          </Container>
        </section>

        <section aria-labelledby="local-overview-title" className="bg-brand-black py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase text-brand-yellow">Local training</p>
                <h2
                  id="local-overview-title"
                  className="mt-3 text-3xl font-black text-brand-white sm:text-4xl"
                >
                  Why choose {siteConfig.name} for {page.discipline} in Kollam?
                </h2>
                <p className="mt-5 leading-7 text-neutral-300">
                  {siteConfig.name} serves athletes and beginners in {siteConfig.location.city} with
                  structured coaching, a dark combat-sports training environment and pathways across
                  Boxing, Kickboxing, MMA, Muay Thai and martial arts.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {page.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <MotionReveal className="h-full" hoverScale>
                      <article className="combat-card combat-card--interactive h-full p-6">
                        <h3 className="text-xl font-black text-brand-white">{highlight.title}</h3>
                        <p className="mt-3 leading-7 text-neutral-300">{highlight.description}</p>
                      </article>
                    </MotionReveal>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section aria-labelledby="training-focus-title" className="bg-brand-ink py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-brand-yellow">Training focus</p>
              <h2
                id="training-focus-title"
                className="mt-3 text-3xl font-black text-brand-white sm:text-4xl"
              >
                Built around technique, discipline and progression.
              </h2>
              <p className="mt-5 leading-7 text-neutral-300">
                These focus areas help members understand what each local training page is designed
                to support before they contact the academy.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {page.trainingFocus.map((focus) => (
                <li key={focus}>
                  <Badge variant="outline" className="min-h-9 px-3">
                    {focus}
                  </Badge>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="bg-brand-black py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-brand-yellow">FAQ</p>
              <h2 id="faq-title" className="mt-3 text-3xl font-black text-brand-white sm:text-4xl">
                Questions about {page.discipline} training in Kollam
              </h2>
            </div>
            <div className="mt-8 grid gap-4">
              {page.faq.map((item) => (
                <details key={item.question} className="combat-card combat-card--dark p-5">
                  <summary className="cursor-pointer text-lg font-black text-brand-white marker:text-brand-yellow">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7 text-neutral-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="contact"
          aria-labelledby="local-contact-title"
          className="bg-brand-ink py-16 sm:py-20"
        >
          <Container>
            <div className="combat-card combat-card--accent p-6 sm:p-8">
              <p className="text-sm font-black uppercase text-brand-yellow">Contact</p>
              <h2
                id="local-contact-title"
                className="mt-3 text-3xl font-black text-brand-white sm:text-4xl"
              >
                Start {page.discipline} training with {siteConfig.name}.
              </h2>
              <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
                Visit or enquire with {siteConfig.name} in {siteConfig.location.city},{" "}
                {siteConfig.location.region} to learn more about class availability, coaching
                pathways and beginner onboarding.
              </p>
              <ButtonLink
                className="mt-6"
                href="https://www.google.com/maps/search/?api=1&query=CRUSTFIT%20INDIA%20Kollam%20Kerala"
                target="_blank"
              >
                Search CRUSTFIT INDIA on maps
              </ButtonLink>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
