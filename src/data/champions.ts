import type {
  ChampionPerformerGroup,
  ChampionProfile,
  LeadershipProfile,
} from "@/types/champion";

const championImage = "/images/achievements/champion-placeholder.webp";
const leadershipImage = "/images/achievements/leadership-placeholder.webp";

function championAlt(name: string) {
  return `Placeholder champion profile image for ${name} at CRUSTFIT INDIA`;
}

function leadershipAlt(name: string) {
  return `Placeholder leadership profile image for ${name} at CRUSTFIT INDIA`;
}

export const champions: ChampionProfile[] = [
  {
    id: "abhinav-s",
    name: "Abhinav S",
    disciplines: ["Boxing", "Professional Boxing"],
    achievements: [
      "Kerala Boxing Council Middleweight Champion",
      "First 8-round fight winner in South India",
    ],
    image: {
      src: championImage,
      alt: championAlt("Abhinav S"),
    },
  },
  {
    id: "daivik-vishal",
    name: "Daivik Vishal",
    disciplines: ["Boxing", "Kids Category"],
    achievements: [
      "International Book of Record Holder",
      "Maximum number of punches in kids category",
    ],
    image: {
      src: championImage,
      alt: championAlt("Daivik Vishal"),
    },
  },
  {
    id: "ashwin-peter",
    name: "Ashwin Peter",
    disciplines: ["Boxing", "CISCE National"],
    achievements: ["CISCE National Bronze Medalist"],
    image: {
      src: championImage,
      alt: championAlt("Ashwin Peter"),
    },
  },
  {
    id: "abel-paul",
    name: "Abel Paul",
    disciplines: ["Boxing", "CISCE National"],
    achievements: ["CISCE National Boxing Silver Medalist"],
    image: {
      src: championImage,
      alt: championAlt("Abel Paul"),
    },
  },
  {
    id: "joshin",
    name: "Joshin",
    disciplines: ["Football", "Indo Nepal"],
    achievements: ["Indo Nepal Football Championship Winner"],
    image: {
      src: championImage,
      alt: championAlt("Joshin"),
    },
  },
  {
    id: "kripa-bincy",
    name: "Kripa Bincy",
    disciplines: ["Boxing", "State Gold"],
    achievements: ["State Gold Medalist in Boxing"],
    image: {
      src: championImage,
      alt: championAlt("Kripa Bincy"),
    },
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
    image: {
      src: championImage,
      alt: championAlt("Asgar Yazeen"),
    },
  },
  {
    id: "ninan-thomas",
    name: "Ninan Thomas",
    disciplines: ["Boxing", "Professional Boxing"],
    achievements: ["Amateur Boxing State Silver Medalist", "Professional Boxing Runner Up"],
    image: {
      src: championImage,
      alt: championAlt("Ninan Thomas"),
    },
  },
  {
    id: "treesa",
    name: "Treesa",
    disciplines: ["Schools Boxing", "District Gold"],
    achievements: ["District Gold Medal Schools Boxing"],
    image: {
      src: championImage,
      alt: championAlt("Treesa"),
    },
  },
  {
    id: "vaiga",
    name: "Vaiga",
    disciplines: ["Schools Boxing", "District Gold"],
    achievements: ["District Gold Medal Schools Boxing"],
    image: {
      src: championImage,
      alt: championAlt("Vaiga"),
    },
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

export const leadershipProfiles: LeadershipProfile[] = [
  {
    id: "anshad-thaha",
    name: "Anshad Thaha",
    roles: ["President - KDBC", "Official - IBC", "Coach - KBC"],
    image: {
      src: leadershipImage,
      alt: leadershipAlt("Anshad Thaha"),
    },
  },
  {
    id: "darshan-rodriguez",
    name: "Darshan Rodriguez",
    roles: ["Secretary - KDBC", "Official - IBC", "Coach - KBC"],
    image: {
      src: leadershipImage,
      alt: leadershipAlt("Darshan Rodriguez"),
    },
  },
];
