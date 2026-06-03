import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import { championPerformerGroups, champions, leadershipProfiles } from "@/data/champions";
import { coaches } from "@/data/coaches";
import { galleryPhotos } from "@/data/gallery";
import { programs } from "@/data/programs";
import {
  businessAddress,
  businessContact,
  businessHours,
  homePageContent,
  siteAssets,
  siteChromeContent,
  socialProfiles,
} from "@/data/site-content";
import { videos } from "@/data/videos";
import type { LocalSeoPage } from "@/types/seo";

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function buildPostalAddressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: businessAddress.streetAddress,
    addressLocality: businessAddress.locality,
    addressRegion: businessAddress.region,
    postalCode: businessAddress.postalCode,
    addressCountry: businessAddress.countryCode,
  };
}

function buildOpeningHoursSpecification() {
  return businessHours.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.schemaDays,
    opens: item.opens,
    closes: item.closes,
  }));
}

function buildAggregateRatingSchema() {
  const reviewSummary = siteChromeContent.footer.reviewSummary;

  return {
    "@type": "AggregateRating",
    ratingValue: reviewSummary.ratingValue,
    reviewCount: reviewSummary.reviewCount.replace("+", ""),
    bestRating: "5",
    worstRating: "1",
  };
}

function buildOfferCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    name: `${siteConfig.name} training programs`,
    itemListElement: programs.map((program) => ({
      "@type": "Offer",
      url: absoluteUrl(program.seoPath ?? "/#programs"),
      itemOffered: {
        "@type": "Service",
        name: `${program.title} training`,
        description: program.summary,
        serviceType: program.title,
        areaServed: siteConfig.location.city,
      },
    })),
  };
}

function buildTelephoneList() {
  return businessContact.phoneNumbers.map((phone) => phone.value);
}

function buildContactPointSchema() {
  return businessContact.phoneNumbers.map((phone) => ({
    "@type": "ContactPoint",
    contactType: businessContact.contactType,
    telephone: phone.value,
    areaServed: [siteConfig.location.city, siteConfig.location.region, siteConfig.location.country],
    availableLanguage: ["English", "Malayalam"],
    url: absoluteUrl("/#contact"),
  }));
}

type StaticPageMetadataInput = {
  description: string;
  keywords?: string[];
  path: string;
  title: string;
};

export function buildStaticPageMetadata({
  description,
  keywords,
  path,
  title,
}: StaticPageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${title} at ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
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
    telephone: buildTelephoneList(),
    address: buildPostalAddressSchema(),
    aggregateRating: buildAggregateRatingSchema(),
    contactPoint: buildContactPointSchema(),
    openingHoursSpecification: buildOpeningHoursSpecification(),
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

function buildPrimaryLocalBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "SportsActivityLocation", "ExerciseGym"],
    "@id": `${absoluteUrl("/")}#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteAssets.heroImage),
    logo: absoluteUrl("/icon.svg"),
    telephone: buildTelephoneList(),
    address: buildPostalAddressSchema(),
    aggregateRating: buildAggregateRatingSchema(),
    contactPoint: buildContactPointSchema(),
    openingHoursSpecification: buildOpeningHoursSpecification(),
    areaServed: [
      {
        "@type": "Place",
        name: siteConfig.location.neighborhood,
      },
      {
        "@type": "City",
        name: siteConfig.location.city,
      },
      {
        "@type": "AdministrativeArea",
        name: siteConfig.location.region,
      },
    ],
    knowsAbout: siteConfig.keywords,
    priceRange: "$$",
    sameAs: socialProfiles.map((item) => item.href),
    parentOrganization: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    hasOfferCatalog: buildOfferCatalogSchema(),
  };
}

function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    address: buildPostalAddressSchema(),
    sameAs: socialProfiles.map((item) => item.href),
    contactPoint: buildContactPointSchema(),
  };
}

function buildContactSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/")}#contact-schema`,
    name: `${siteConfig.name} Contact`,
    url: absoluteUrl("/#contact"),
    about: {
      "@id": `${absoluteUrl("/")}#localbusiness`,
    },
    mainEntity: buildContactPointSchema(),
  };
}

function buildSocialProfileSchema() {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/")}#social-profiles`,
    name: `${siteConfig.name} social media profiles`,
    itemListElement: socialProfiles.map((profile, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ProfilePage",
        name: profile.label,
        url: profile.href,
        about: {
          "@id": `${absoluteUrl("/")}#organization`,
        },
      },
    })),
  };
}

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPrimaryLocalBusinessSchema(),
      buildOrganizationSchema(),
      buildContactSchema(),
      buildSocialProfileSchema(),
    ],
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

type HallOfChampionsJsonLdOptions = {
  includeGroups?: boolean;
  includeLeadership?: boolean;
  limit?: number;
};

export function buildHallOfChampionsJsonLd(
  path = "/",
  fragmentId = "hall-of-champions",
  { includeGroups = true, includeLeadership = true, limit }: HallOfChampionsJsonLdOptions = {},
) {
  const pageUrl = absoluteUrl(path);
  const hallUrl = `${pageUrl}#${fragmentId}`;
  const visibleChampions = typeof limit === "number" ? champions.slice(0, limit) : champions;
  const organization = {
    "@type": "SportsOrganization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };
  const groupItems = includeGroups
    ? championPerformerGroups.map((group, groupIndex) => ({
        "@type": "ListItem",
        position: visibleChampions.length + groupIndex + 1,
        item: {
          "@type": "ItemList",
          "@id": `${pageUrl}#${group.id}`,
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
      }))
    : [];
  const leadershipItems = includeLeadership
    ? leadershipProfiles.map((leader, leaderIndex) => ({
        "@type": "ListItem",
        position: visibleChampions.length + groupItems.length + leaderIndex + 1,
        item: {
          "@type": "Person",
          "@id": `${pageUrl}#leader-${leader.id}`,
          name: leader.name,
          jobTitle: leader.roles,
          memberOf: organization,
        },
      }))
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": hallUrl,
    name: `${siteConfig.name} Hall of Champions`,
    description: homePageContent.champions.description,
    itemListElement: [
      ...visibleChampions.map((champion, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          "@id": `${pageUrl}#champion-${champion.id}`,
          name: champion.name,
          award: champion.achievements,
          knowsAbout: champion.disciplines,
          memberOf: organization,
        },
      })),
      ...groupItems,
      ...leadershipItems,
    ],
  };
}

export function buildCoachesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/coaches")}#webpage`,
    name: `${siteConfig.name} Coaches`,
    description: homePageContent.coaches.description,
    url: absoluteUrl("/coaches"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: coaches.map((coach, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: coach.name,
          jobTitle: coach.specialization,
          description: coach.experience,
          image: absoluteUrl(coach.image.src),
          memberOf: {
            "@id": `${absoluteUrl("/")}#organization`,
          },
          knowsAbout: coach.certifications,
          award: coach.achievements,
        },
      })),
    },
  };
}

export function buildGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/gallery")}#webpage`,
    name: `${siteConfig.name} Gallery`,
    description: homePageContent.gallery.description,
    url: absoluteUrl("/gallery"),
    hasPart: [
      {
        "@type": "ImageGallery",
        name: `${siteConfig.name} photo gallery`,
        image: galleryPhotos.map((photo) => absoluteUrl(photo.image)),
      },
      {
        "@type": "VideoGallery",
        name: `${siteConfig.name} YouTube videos`,
        video: videos.map((video) => ({
          "@type": "VideoObject",
          name: video.title,
          description: video.summary,
          embedUrl: video.embedUrl,
          url: video.sourceUrl,
          uploadDate: "2026-06-03",
        })),
      },
    ],
  };
}
