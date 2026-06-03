import type { Coach } from "@/types/coach";

export const coaches: Coach[] = [
  {
    name: "Striking Coaching Team",
    specialization: "Boxing, Kickboxing & Muay Thai",
    experience: "Placeholder profile for a senior striking pathway coach.",
    certifications: [
      "Boxing fundamentals coaching",
      "Kickboxing pad-work instruction",
      "Safe sparring progression",
    ],
    achievements: [
      "Builds technical striking foundations for beginners and competitive athletes.",
      "Supports bag work, ring movement, defensive habits and controlled sparring readiness.",
    ],
    image: {
      src: "/images/coaches/striking-coach-placeholder.webp",
      alt: "Placeholder portrait of a striking coach inside a dark boxing gym",
    },
  },
  {
    name: "Grappling Coaching Team",
    specialization: "MMA, Jiu Jitsu & Sambo",
    experience: "Placeholder profile for a grappling and mixed martial arts coach.",
    certifications: [
      "Grappling fundamentals coaching",
      "MMA transition instruction",
      "Mat safety and control systems",
    ],
    achievements: [
      "Develops control, escapes, clinch transitions and mat awareness.",
      "Connects grappling foundations with integrated MMA training pathways.",
    ],
    image: {
      src: "/images/coaches/grappling-coach-placeholder.webp",
      alt: "Placeholder portrait of a grappling coach inside a dark MMA training area",
    },
  },
  {
    name: "Movement Coaching Team",
    specialization: "Yoga, Zumba & Athletic Conditioning",
    experience: "Placeholder profile for movement, recovery and group fitness coaching.",
    certifications: [
      "Mobility and recovery coaching",
      "Group fitness instruction",
      "Combat-sports conditioning support",
    ],
    achievements: [
      "Supports mobility, recovery, stamina, rhythm and training consistency.",
      "Builds movement sessions that complement striking and grappling programs.",
    ],
    image: {
      src: "/images/coaches/movement-coach-placeholder.webp",
      alt: "Placeholder portrait of a movement coach inside a dark performance studio",
    },
  },
];
