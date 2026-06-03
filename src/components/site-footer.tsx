import Link from "next/link";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui";
import { siteAssets, siteChromeContent } from "@/data/site-content";

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps) {
  const isExternal = href.startsWith("http");
  const className =
    "inline-flex min-h-8 items-center text-neutral-300 transition hover:text-brand-yellow";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function SiteFooter() {
  const content = siteChromeContent.footer;

  return (
    <footer className="border-t border-white/10 bg-brand-ink">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
          <section aria-labelledby="footer-about-title">
            <p className="text-sm font-black uppercase text-brand-yellow">{content.about.title}</p>
            <h2 id="footer-about-title" className="mt-3 text-2xl font-black text-brand-white">
              CRUSTFIT INDIA
            </h2>
            <p className="mt-4 leading-7 text-neutral-300">{content.about.description}</p>

            <div className="mt-6 rounded-md border border-brand-yellow/35 bg-brand-black p-5">
              <p className="text-sm font-black uppercase text-brand-yellow">
                {content.reviewSummary.title}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-neutral-400">{content.reviewSummary.ratingLabel}</dt>
                  <dd className="text-3xl font-black text-brand-yellow">
                    {content.reviewSummary.ratingValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-400">{content.reviewSummary.reviewLabel}</dt>
                  <dd className="text-3xl font-black text-brand-yellow">
                    {content.reviewSummary.reviewCount}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-neutral-300">
                {content.reviewSummary.summary}
              </p>
            </div>
          </section>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <section aria-labelledby="footer-programs-title">
              <h2 id="footer-programs-title" className="text-base font-black text-brand-white">
                {content.programs.title}
              </h2>
              <ul className="mt-4 grid gap-1 text-sm">
                {content.programs.links.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-quick-links-title">
              <h2 id="footer-quick-links-title" className="text-base font-black text-brand-white">
                {content.quickLinks.title}
              </h2>
              <ul className="mt-4 grid gap-1 text-sm">
                {content.quickLinks.links.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-location-title">
              <h2 id="footer-location-title" className="text-base font-black text-brand-white">
                {content.location.title}
              </h2>
              <address className="mt-4 not-italic leading-7 text-neutral-300">
                {content.location.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={siteAssets.mapSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-8 items-center text-sm font-black uppercase text-brand-yellow transition hover:text-brand-white"
              >
                {content.location.mapLabel}
              </a>
            </section>

            <section aria-labelledby="footer-contact-title">
              <h2 id="footer-contact-title" className="text-base font-black text-brand-white">
                {content.contact.title}
              </h2>
              <dl className="mt-4 grid gap-4">
                {content.contact.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-bold text-brand-yellow">{item.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-neutral-300">
                      <FooterLink href={item.href} label={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="footer-social-title">
              <h2 id="footer-social-title" className="text-base font-black text-brand-white">
                {content.socialMedia.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {content.socialMedia.links.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                      <Badge variant="outline">{item.label}</Badge>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="footer-hours-title">
              <h2 id="footer-hours-title" className="text-base font-black text-brand-white">
                {content.openingHours.title}
              </h2>
              <dl className="mt-4 grid gap-3 text-sm">
                {content.openingHours.hours.map((item) => (
                  <div key={`${item.days}-${item.label}`}>
                    <dt className="font-bold text-neutral-200">{item.days}</dt>
                    <dd className="mt-1 text-neutral-400">{item.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-5 text-neutral-500">{content.openingHours.note}</p>
            </section>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1.1fr]">
          <section aria-labelledby="footer-business-title">
            <h2 id="footer-business-title" className="text-base font-black text-brand-white">
              {content.businessInformation.title}
            </h2>
            <dl className="mt-4 grid gap-3 text-sm">
              {content.businessInformation.items.map((item) => (
                <div key={item.label}>
                  <dt className="font-bold text-brand-yellow">{item.label}</dt>
                  <dd className="mt-1 leading-6 text-neutral-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="footer-local-seo-title">
            <h2 id="footer-local-seo-title" className="text-base font-black text-brand-white">
              {content.localSeo.title}
            </h2>
            <p className="mt-4 leading-7 text-neutral-300">{content.localSeo.description}</p>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.bottom.identity}</p>
          <p>{content.bottom.summary}</p>
        </div>
      </Container>
    </footer>
  );
}
