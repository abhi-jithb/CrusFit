import { siteConfig } from "@/constants/site";

import { achievements } from "./achievements";

export const siteAssets = {
  heroImage: "/images/seo/crustfit-hero.png",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=CRUSTFIT%20INDIA%20Kollam%20Kerala",
};

const heroAchievements = achievements.filter((achievement) =>
  ["rating", "reviews", "disciplines"].includes(achievement.id),
);

export const homePageContent = {
  hero: {
    eyebrow: siteConfig.name,
    title: "Kollam's Premier Boxing & Martial Arts Academy",
    description:
      "Train with a combat-sports academy built for serious striking, disciplined martial arts, strength, mobility and community in Kollam, Kerala.",
    imageAlt: "CRUSTFIT INDIA training floor with boxing and MMA equipment",
    trustIndicatorsLabel: "CRUSTFIT trust indicators",
    primaryCta: {
      href: "#programs",
      label: "Explore programs",
    },
    secondaryCta: {
      href: "#contact",
      label: "Book a visit",
    },
    trustIndicators: heroAchievements.map((achievement) => ({
      label: achievement.trustLabel ?? `${achievement.value} ${achievement.label}`,
      variant: achievement.trustVariant ?? ("outline" as const),
    })),
    stats: heroAchievements.map((achievement) => ({
      label: achievement.statLabel ?? achievement.label,
      value: achievement.value,
    })),
  },
  about: {
    eyebrow: "About the academy",
    title: "A professional combat sports base in Kollam.",
    description:
      "CRUSTFIT INDIA brings striking, grappling, martial arts and performance fitness into one disciplined academy environment for athletes, beginners and fitness-focused members.",
    pillars: [
      {
        title: "Combat-first coaching",
        summary:
          "Training is organized around useful technique, safe intensity and measurable progress.",
      },
      {
        title: "Beginner-aware pathways",
        summary:
          "New athletes can start with foundations before moving toward sparring or advanced classes.",
      },
      {
        title: "Fitness with purpose",
        summary:
          "Strength, conditioning, mobility and rhythm-based sessions support the combat programs.",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "Striking, grappling, martial arts and performance fitness.",
    description:
      "The program foundation keeps every discipline visible from day one, while leaving room for dedicated class pages, schedules and coach assignments later.",
  },
  coaches: {
    eyebrow: "Coaching team",
    title: "Specialist coaching roles for every training path.",
    description:
      "The coach directory is structured for verified profiles, credentials and class ownership as the academy content is finalized.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Built for verified member stories.",
    description:
      "This section is ready for real testimonials without using fabricated quotes. The current content defines the kinds of outcomes the academy can document after launch.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A visual direction for a premium fight academy.",
    description:
      "The initial gallery establishes the dark, sharp and energetic visual language for the brand. Real training photography can replace these assets as content becomes available.",
  },
  contact: {
    eyebrow: "Contact",
    title: `Start training with ${siteConfig.name}.`,
    description:
      "Use this foundation to connect official enquiry channels, verified location links and class schedules when the academy operations content is ready.",
    cardTitle: "Kollam combat sports academy",
    cardDescription:
      "CRUSTFIT INDIA is positioned for athletes who want structured combat sports training and for members who want purposeful fitness through martial arts, Yoga and Zumba.",
    ctaLabel: "Search location",
    details: [
      {
        label: "Location",
        value: `${siteConfig.location.city}, ${siteConfig.location.region}, ${siteConfig.location.country}`,
      },
      {
        label: "Training enquiries",
        value:
          "Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba.",
      },
      {
        label: "Launch content",
        value:
          "Verified batch timings, contact channels and map details can be connected before launch.",
      },
    ],
  },
};

export const siteChromeContent = {
  header: {
    homeAriaLabel: `${siteConfig.name} home`,
    logoInitials: "CF",
    locationLabel: "Kollam, Kerala",
    navAriaLabel: "Primary navigation",
    ctaLabel: "Enquire",
    ctaHref: "/#contact",
  },
  footer: {
    identity: `${siteConfig.name} - ${siteConfig.location.city}, ${siteConfig.location.region}, ${siteConfig.location.country}`,
    summary: "Built for combat sports, martial arts, fitness, and community.",
  },
};

export const seoContent = {
  openGraphAlt: "CRUSTFIT INDIA combat sports academy in Kollam, Kerala",
  openGraphEyebrow: "Combat Sports & Martial Arts Academy",
  openGraphSummary:
    "Boxing, Kickboxing, MMA, Muay Thai and martial arts training in Kollam, Kerala.",
};

export const localSeoPageContent = {
  breadcrumbAriaLabel: "Breadcrumb",
  breadcrumbHomeLabel: "Home",
  heroImageAlt: (discipline: string) => `${discipline} training environment at ${siteConfig.name}`,
  primaryCta: {
    href: "#contact",
    label: "Enquire about training",
  },
  secondaryCta: {
    href: "/#programs",
    label: "View all programs",
  },
  overviewEyebrow: "Local training",
  overviewTitle: (discipline: string) =>
    `Why choose ${siteConfig.name} for ${discipline} in Kollam?`,
  overviewDescription: `${siteConfig.name} serves athletes and beginners in ${siteConfig.location.city} with structured coaching, a dark combat-sports training environment and pathways across Boxing, Kickboxing, MMA, Muay Thai and martial arts.`,
  trainingFocusEyebrow: "Training focus",
  trainingFocusTitle: "Built around technique, discipline and progression.",
  trainingFocusDescription:
    "These focus areas help members understand what each local training page is designed to support before they contact the academy.",
  faqEyebrow: "FAQ",
  faqTitle: (discipline: string) => `Questions about ${discipline} training in Kollam`,
  contactEyebrow: "Contact",
  contactTitle: (discipline: string) => `Start ${discipline} training with ${siteConfig.name}.`,
  contactDescription: (discipline: string) =>
    `Visit or enquire with ${siteConfig.name} in ${siteConfig.location.city}, ${siteConfig.location.region} to learn more about ${discipline} class availability, coaching pathways and beginner onboarding.`,
  mapCtaLabel: `Search ${siteConfig.name} on maps`,
};
