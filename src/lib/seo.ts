import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import { championAchievements, championPerformerGroups } from "@/data/achievements";
import { homePageContent, siteAssets } from "@/data/site-content";
import type { LocalSeoPage } from "@/types/seo";

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function buildLocalSeoMetadata(page: LocalSeoPage): Metadata {
  const canonical = absoluteUrl(page.path);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.relatedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${page.title} at ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

function buildLocalBusinessSchema(page: LocalSeoPage) {
  return {
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${absoluteUrl(page.path)}#localbusiness`,
    name: siteConfig.name,
    description: page.metaDescription,
    image: absoluteUrl(siteAssets.heroImage),
    url: absoluteUrl(page.path),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.location.city,
      },
      {
        "@type": "AdministrativeArea",
        name: siteConfig.location.region,
      },
    ],
    knowsAbout: page.relatedKeywords,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: page.title,
        serviceType: page.discipline,
        areaServed: siteConfig.location.city,
      },
    },
  };
}

function buildFaqSchema(page: LocalSeoPage) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(page.path)}#faq`,
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(page: LocalSeoPage) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: absoluteUrl(page.path),
      },
    ],
  };
}

export function buildLocalSeoJsonLd(page: LocalSeoPage) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildLocalBusinessSchema(page), buildFaqSchema(page), buildBreadcrumbSchema(page)],
  };
}

export function buildHallOfChampionsJsonLd() {
  const hallUrl = `${absoluteUrl("/")}#hall-of-champions`;
  const organization = {
    "@type": "SportsOrganization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": hallUrl,
    name: `${siteConfig.name} Hall of Champions`,
    description: homePageContent.champions.description,
    itemListElement: [
      ...championAchievements.map((champion, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          "@id": `${absoluteUrl("/")}#champion-${champion.id}`,
          name: champion.name,
          award: champion.achievements,
          knowsAbout: champion.disciplines,
          memberOf: organization,
        },
      })),
      ...championPerformerGroups.map((group, groupIndex) => ({
        "@type": "ListItem",
        position: championAchievements.length + groupIndex + 1,
        item: {
          "@type": "ItemList",
          "@id": `${absoluteUrl("/")}#${group.id}`,
          name: group.title,
          description: group.summary,
          itemListElement: group.performers.map((performer, performerIndex) => ({
            "@type": "ListItem",
            position: performerIndex + 1,
            item: {
              "@type": "Person",
              name: performer,
              award: group.title,
              memberOf: organization,
            },
          })),
        },
      })),
    ],
  };
}
