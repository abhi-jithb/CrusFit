import type { NavItem } from "@/types/content";

const fallbackUrl = "https://crustfitindia.com";

export const siteConfig = {
  name: "CRUSTFIT INDIA",
  title: "CRUSTFIT INDIA | Boxing & Martial Arts Academy in Kollam",
  description:
    "CRUSTFIT INDIA is a combat sports and martial arts academy in Mulamkadakam, Kollam, training Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  locale: "en_IN",
  keywords: [
    "CRUSTFIT INDIA",
    "combat sports academy Kollam",
    "combat sports academy Mulamkadakam",
    "martial arts Kollam",
    "martial arts academy Mulamkadakam",
    "boxing Kollam",
    "boxing classes Mulamkadakam",
    "MMA Kollam",
    "Muay Thai Kerala",
    "Kickboxing Kerala",
    "Jiu Jitsu Kollam",
    "Sambo India",
    "Yoga Kollam",
    "Zumba Kollam",
  ],
  location: {
    streetAddress: "Pathuz Plaza, 1st Floor, Opp Mulamkadakam Temple",
    postalCode: "691012",
    neighborhood: "Mulamkadakam",
    subLocality: "Thirumullavaram",
    city: "Kollam",
    region: "Kerala",
    country: "India",
    countryCode: "IN",
  },
  navItems: [
    { href: "/#about", label: "About" },
    { href: "/#programs", label: "Programs" },
    { href: "/champions", label: "Champions" },
    { href: "/coaches", label: "Coaches" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
  ] satisfies NavItem[],
};
