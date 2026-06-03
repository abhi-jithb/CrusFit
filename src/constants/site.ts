import type { NavItem } from "@/types/content";

const fallbackUrl = "https://crustfitindia.com";

export const siteConfig = {
  name: "CRUSTFIT INDIA",
  title: "CRUSTFIT INDIA | Kollam's Premier Boxing & Martial Arts Academy",
  description:
    "CRUSTFIT INDIA is Kollam's premier boxing and martial arts academy, training Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  locale: "en_IN",
  keywords: [
    "CRUSTFIT INDIA",
    "combat sports academy Kollam",
    "martial arts Kollam",
    "boxing Kollam",
    "MMA Kollam",
    "Muay Thai Kerala",
    "Kickboxing Kerala",
    "Jiu Jitsu Kollam",
    "Sambo India",
    "Yoga Kollam",
    "Zumba Kollam",
  ],
  location: {
    city: "Kollam",
    region: "Kerala",
    country: "India",
  },
  navItems: [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#coaches", label: "Coaches" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ] satisfies NavItem[],
};
