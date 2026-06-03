import { siteConfig } from "@/constants/site";

import { achievements } from "./achievements";
import { championPerformerGroups, champions } from "./champions";
import { programs } from "./programs";

export const siteAssets = {
  heroImage: "/images/seo/crustfit-hero.png",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=CRUSTFIT%20INDIA%20Pathuz%20Plaza%20Opp%20Mulamkadakam%20Temple%20Kollam%20691012%20Kerala",
};

export const businessAddress = {
  streetAddress: siteConfig.location.streetAddress,
  locality: siteConfig.location.city,
  region: siteConfig.location.region,
  postalCode: siteConfig.location.postalCode,
  country: siteConfig.location.country,
  countryCode: siteConfig.location.countryCode,
  displayLines: [
    "Pathuz Plaza, 1st Floor",
    "Opp Mulamkadakam Temple",
    siteConfig.location.neighborhood,
    siteConfig.location.subLocality,
    `${siteConfig.location.city} ${siteConfig.location.postalCode}`,
    siteConfig.location.region,
  ],
};

export const businessContact = {
  phoneNumbers: [
    {
      label: "Primary phone",
      value: "+91 98958 79695",
      href: "tel:+919895879695",
    },
    {
      label: "Secondary phone",
      value: "+91 90728 58575",
      href: "tel:+919072858575",
    },
  ],
  contactType: "training enquiries",
};

export const businessHours = [
  {
    days: "Monday - Saturday",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "05:00",
    closes: "10:00",
    label: "5:00 AM - 10:00 AM",
  },
  {
    days: "Monday - Saturday",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "15:00",
    closes: "22:00",
    label: "3:00 PM - 10:00 PM",
  },
  {
    days: "Sunday",
    schemaDays: ["Sunday"],
    opens: "06:00",
    closes: "10:00",
    label: "6:00 AM - 10:00 AM",
  },
  {
    days: "Sunday",
    schemaDays: ["Sunday"],
    opens: "16:00",
    closes: "21:00",
    label: "4:00 PM - 9:00 PM",
  },
];

export const socialProfiles = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/crustfitindia/",
    platform: "Instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@crustfitindia",
    platform: "YouTube",
  },
  {
    label: "YouTube Shorts",
    href: "https://www.youtube.com/@crustfitindia/shorts",
    platform: "YouTube Shorts",
  },
];

const googleReviewSummary = {
  title: "Google Review Summary",
  ratingValue: "5.0",
  reviewCount: "100+",
  ratingLabel: "Google rating",
  reviewLabel: "Local reviews",
  summary:
    "A strong local trust signal for athletes comparing combat sports and martial arts academies in Kollam.",
};

const footerProgramLinks = programs.map((program) => ({
  href: program.seoPath ?? "/#programs",
  label: program.title,
}));

const heroAchievements = achievements.filter((achievement) =>
  ["rating", "reviews", "disciplines"].includes(achievement.id),
);

const performerCount = championPerformerGroups.reduce(
  (total, group) => total + group.performers.length,
  0,
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
  champions: {
    eyebrow: "Hall of Champions",
    title: "Proof earned in rings, mats and competitive arenas.",
    description:
      "CRUSTFIT INDIA celebrates athletes who have represented the academy through boxing titles, national medals, record-setting performances and championship results.",
    statsAriaLabel: "Hall of Champions highlights",
    cardAchievementLabel: "Recognized achievements",
    performerEyebrow: "Season recognition",
    performerRosterLabel: "Recognized performers",
    stats: [
      {
        value: champions.length.toString(),
        label: "Champion profiles",
      },
      {
        value: performerCount.toString(),
        label: "Best performers",
      },
      {
        value: "2024-25",
        label: "Featured season",
      },
    ],
    viewAllCta: {
      href: "/champions",
      label: "View all champions",
    },
    leadership: {
      eyebrow: "Leadership",
      title: "Academy leadership and combat sports governance.",
      description:
        "CRUSTFIT INDIA leadership profiles are structured for federation roles, official duties and coaching credentials.",
      rolesLabel: "Roles",
    },
  },
  coaches: {
    eyebrow: "Coaching team",
    title: "Specialist coaching profiles for every training path.",
    description:
      "The coach directory is structured for verified portraits, certifications, experience and class ownership as the academy content is finalized.",
    cardLabels: {
      achievements: "Profile focus",
      certifications: "Certifications",
      experience: "Experience",
    },
    viewAllCta: {
      href: "/coaches",
      label: "View all coaches",
    },
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Built for verified member stories.",
    description:
      "This section is ready for real testimonials without using fabricated quotes. The current content defines the kinds of outcomes the academy can document after launch.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Training media from a premium fight academy.",
    description:
      "Photos and video slots are structured for training, sparring, events, competitions and group sessions as real academy media becomes available.",
    tabs: {
      ariaLabel: "Gallery media type",
      photos: "Photos",
      videos: "Videos",
    },
    lightbox: {
      closeAriaLabel: "Close gallery image preview",
      closeLabel: "Close",
      dialogLabel: "Gallery image preview",
      openLabel: "Open image preview",
    },
    videoLabels: {
      embedTitle: "Embedded YouTube video",
      sourceLabel: "Open on YouTube",
    },
    viewAllCta: {
      href: "/gallery",
      label: "View all gallery",
    },
  },
  videos: {
    eyebrow: "Video",
    title: "YouTube training media, ready to scale.",
    description:
      "Official YouTube embeds are managed from one data source so new training, sparring, event and competition videos can be added without changing UI code.",
    embedTitle: "CRUSTFIT INDIA YouTube embed",
    sourceLabel: "Open on YouTube",
    viewAllCta: {
      href: "/gallery#videos",
      label: "View all videos",
    },
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
        value: `${businessAddress.displayLines.join(", ")}, ${siteConfig.location.country}`,
      },
      {
        label: "Phone",
        value: businessContact.phoneNumbers.map((phone) => phone.value).join(" / "),
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
    locationLabel: "Mulamkadakam, Kollam",
    navAriaLabel: "Primary navigation",
    ctaLabel: "Enquire",
    ctaHref: "/#contact",
  },
  footer: {
    about: {
      title: "About CrustFit",
      description:
        "CRUSTFIT INDIA is a professional combat sports and martial arts academy in Mulamkadakam, Kollam, built for Boxing, Kickboxing, MMA, Muay Thai, traditional martial arts and performance fitness.",
    },
    programs: {
      title: "Programs",
      links: footerProgramLinks,
    },
    quickLinks: {
      title: "Quick Links",
      links: siteConfig.navItems,
    },
    contact: {
      title: "Contact",
      items: [
        ...businessContact.phoneNumbers,
        {
          label: "Map search",
          value: "Find CRUSTFIT INDIA on Google Maps.",
          href: siteAssets.mapSearchUrl,
        },
      ],
    },
    location: {
      title: "Location",
      mapLabel: "Open location on maps",
      address: businessAddress.displayLines,
    },
    socialMedia: {
      title: "Social Media",
      links: socialProfiles,
    },
    reviewSummary: googleReviewSummary,
    businessInformation: {
      title: "Business Information",
      items: [
        {
          label: "Academy type",
          value: "Combat Sports & Martial Arts Academy",
        },
        {
          label: "Service area",
          value: "Mulamkadakam, Thirumullavaram, Kollam and surrounding Kerala communities",
        },
        {
          label: "Training focus",
          value:
            "Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba",
        },
      ],
    },
    openingHours: {
      title: "Opening Hours",
      note: "Batch timings can change before launch. Confirm current availability before visiting.",
      hours: businessHours,
    },
    localSeo: {
      title: "Local SEO Content",
      description:
        "For athletes searching Boxing Classes Kollam, MMA Training Kollam, Kickboxing Classes Kollam or Martial Arts Academy Kollam, CRUSTFIT INDIA serves Pathuz Plaza, Mulamkadakam, Thirumullavaram and Kollam with structured combat sports coaching.",
    },
    bottom: {
      identity: `${siteConfig.name} - ${siteConfig.location.neighborhood}, ${siteConfig.location.subLocality}, ${siteConfig.location.city} ${siteConfig.location.postalCode}`,
      summary: "Built for combat sports, martial arts, fitness, and community.",
    },
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
