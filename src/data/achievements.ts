import type { Achievement, ChampionAchievement, ChampionPerformerGroup } from "@/types/achievement";

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

export const championAchievements: ChampionAchievement[] = [
  {
    id: "abhinav-s",
    name: "Abhinav S",
    disciplines: ["Boxing", "Professional Boxing"],
    achievements: [
      "Kerala Boxing Council Middleweight Champion",
      "First 8-round fight winner in South India",
    ],
  },
  {
    id: "daivik-vishal",
    name: "Daivik Vishal",
    disciplines: ["Boxing", "Kids Category"],
    achievements: [
      "International Book of Record Holder",
      "Maximum number of punches in kids category",
    ],
  },
  {
    id: "ashwin-peter",
    name: "Ashwin Peter",
    disciplines: ["Boxing", "CISCE National"],
    achievements: ["CISCE National Bronze Medalist"],
  },
  {
    id: "abel-paul",
    name: "Abel Paul",
    disciplines: ["Boxing", "CISCE National"],
    achievements: ["CISCE National Boxing Silver Medalist"],
  },
  {
    id: "joshin",
    name: "Joshin",
    disciplines: ["Football", "Indo Nepal"],
    achievements: ["Indo Nepal Football Championship Winner"],
  },
  {
    id: "kripa-bincy",
    name: "Kripa Bincy",
    disciplines: ["Boxing", "State Gold"],
    achievements: ["State Gold Medalist in Boxing"],
  },
  {
    id: "asgar-yazeen",
    name: "Asgar Yazeen",
    disciplines: ["Boxing", "Wushu", "Taekwondo"],
    achievements: [
      "Kerala University Boxing Champion",
      "Kerala University Wushu Champion",
      "Taekwondo District Champion",
      "State Bronze Medalist in Amateur Boxing",
    ],
  },
  {
    id: "ninan-thomas",
    name: "Ninan Thomas",
    disciplines: ["Boxing", "Professional Boxing"],
    achievements: ["Amateur Boxing State Silver Medalist", "Professional Boxing Runner Up"],
  },
  {
    id: "treesa",
    name: "Treesa",
    disciplines: ["Schools Boxing", "District Gold"],
    achievements: ["District Gold Medal Schools Boxing"],
  },
  {
    id: "vaiga",
    name: "Vaiga",
    disciplines: ["Schools Boxing", "District Gold"],
    achievements: ["District Gold Medal Schools Boxing"],
  },
];

export const championPerformerGroups: ChampionPerformerGroup[] = [
  {
    id: "best-performers-2024-25",
    title: "Best Performers 2024-25",
    summary: "CRUSTFIT INDIA athletes recognized for standout performance in the 2024-25 season.",
    performers: ["Minal S", "Pranav S Kumar", "Juvan Sherin"],
  },
];
