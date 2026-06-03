import type { CoachRole, GalleryItem, Program, TestimonialTheme } from "@/types/content";

export const programs: Program[] = [
  {
    title: "Boxing",
    summary: "Footwork, guard discipline, combinations, bag work and sparring readiness.",
    level: "Beginner to advanced",
    focus: ["Striking", "Defence", "Conditioning"],
  },
  {
    title: "Kickboxing",
    summary: "Practical striking built around punches, kicks, timing and controlled pad rounds.",
    level: "Beginner friendly",
    focus: ["Pads", "Kicks", "Cardio"],
  },
  {
    title: "MMA",
    summary: "Integrated striking, grappling, clinch work and cage-aware movement foundations.",
    level: "Progressive training",
    focus: ["Striking", "Grappling", "Clinch"],
  },
  {
    title: "Muay Thai",
    summary: "Elbows, knees, clinch control, bag rounds and disciplined ring movement.",
    level: "Beginner to advanced",
    focus: ["Clinch", "Knees", "Power"],
  },
  {
    title: "Karate",
    summary: "Traditional martial arts structure with stance work, striking mechanics and control.",
    level: "All levels",
    focus: ["Discipline", "Technique", "Control"],
  },
  {
    title: "Taekwondo",
    summary: "Kicking skill, balance, mobility and structured martial arts progression.",
    level: "All levels",
    focus: ["Kicks", "Balance", "Mobility"],
  },
  {
    title: "Jiu Jitsu",
    summary: "Ground control, positional awareness, escapes and submission fundamentals.",
    level: "Progressive training",
    focus: ["Groundwork", "Escapes", "Control"],
  },
  {
    title: "Sambo",
    summary: "Throws, transitions and combat grappling principles for adaptable athletes.",
    level: "Intermediate pathways",
    focus: ["Throws", "Grappling", "Transitions"],
  },
  {
    title: "Yoga",
    summary: "Mobility, breath control and recovery work that supports athletic durability.",
    level: "All levels",
    focus: ["Mobility", "Breath", "Recovery"],
  },
  {
    title: "Zumba",
    summary: "High-energy group fitness sessions for rhythm, stamina and community training.",
    level: "All levels",
    focus: ["Fitness", "Rhythm", "Energy"],
  },
];

export const coachRoles: CoachRole[] = [
  {
    role: "Striking Coaches",
    summary:
      "Boxing, Kickboxing and Muay Thai instruction with attention to stance, timing and safe progression.",
  },
  {
    role: "Grappling Coaches",
    summary: "MMA, Jiu Jitsu and Sambo coaching focused on control, transitions and mat awareness.",
  },
  {
    role: "Movement Coaches",
    summary:
      "Yoga and Zumba guidance to support mobility, conditioning, recovery and group energy.",
  },
];

export const testimonialThemes: TestimonialTheme[] = [
  {
    title: "Beginner Confidence",
    summary:
      "Member stories will highlight first-week onboarding, coach support and safer training habits.",
  },
  {
    title: "Fight Camp Discipline",
    summary:
      "Verified feedback can document progress across pad rounds, sparring readiness and conditioning.",
  },
  {
    title: "Fitness Community",
    summary:
      "Community testimonials can reflect group energy across martial arts, Yoga and Zumba sessions.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Training Floor",
    summary: "A dark, focused academy environment built for striking, grappling and conditioning.",
    image: "/images/crustfit-hero.png",
  },
  {
    title: "Striking Sessions",
    summary: "Pad work, bag rounds, boxing drills and Muay Thai combinations.",
    image: "/images/crustfit-hero.png",
  },
  {
    title: "Combat Conditioning",
    summary: "Structured fitness work that supports martial artists and everyday athletes.",
    image: "/images/crustfit-hero.png",
  },
];
