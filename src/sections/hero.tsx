import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { siteConfig } from "@/constants/site";
import { programs } from "@/data/home";

export function Hero() {
  return (
    <section className="relative isolate min-h-[82svh] overflow-hidden border-b border-white/10">
      <Image
        src="/images/crustfit-hero.png"
        alt="CRUSTFIT INDIA training floor with boxing and MMA equipment"
        fill
        priority
        className="-z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.95)_0%,rgba(5,5,5,0.82)_42%,rgba(5,5,5,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-black to-transparent" />

      <Container className="flex min-h-[82svh] items-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black text-brand-yellow sm:text-base">
            Combat Sports & Martial Arts Academy
          </p>
          <h1 className="mt-5 text-5xl font-black text-brand-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
            Professional training in Boxing, Kickboxing, MMA, Muay Thai and martial arts for Kollam,
            Kerala.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#programs"
              className="rounded-md bg-brand-yellow px-6 py-3 text-center text-sm font-black text-brand-black transition hover:bg-white"
            >
              Explore programs
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-black text-brand-white transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              Visit in Kollam
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-3xl font-black text-brand-yellow">{programs.length}</dt>
              <dd className="mt-1 text-sm font-semibold text-neutral-300">Disciplines</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-brand-yellow">Kollam</dt>
              <dd className="mt-1 text-sm font-semibold text-neutral-300">Kerala base</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-brand-yellow">All levels</dt>
              <dd className="mt-1 text-sm font-semibold text-neutral-300">Structured pathways</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
