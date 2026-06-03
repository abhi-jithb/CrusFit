import type { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "rating",
    value: "5.0",
    label: "Rating",
    trustLabel: "5.0 Rating",
    trustVariant: "accent",
    description: "A premium trust signal for CRUSTFIT INDIA's local academy presence.",
  },
  {
    id: "reviews",
    value: "100+",
    label: "Reviews",
    trustLabel: "100+ Reviews",
    trustVariant: "outline",
    description: "A scalable review-count placeholder for verified member feedback.",
  },
  {
    id: "disciplines",
    value: "10",
    label: "Disciplines",
    statLabel: "Combat Disciplines",
    trustLabel: "Multiple Combat Disciplines",
    trustVariant: "outline",
    description: "Multiple combat sports, martial arts and fitness programs under one academy.",
  },
];
