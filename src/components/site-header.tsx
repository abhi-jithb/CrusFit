import Link from "next/link";

import { ButtonLink, Container } from "@/components/ui";
import { siteConfig } from "@/constants/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-black/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-10 place-items-center rounded-md border border-brand-yellow bg-brand-ink text-base font-black text-brand-yellow">
            CF
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-black text-brand-white sm:text-base">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-xs font-semibold text-neutral-400">Kollam, Kerala</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-semibold text-neutral-300">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-yellow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="#contact" size="sm">
          Enquire
        </ButtonLink>
      </Container>
    </header>
  );
}
