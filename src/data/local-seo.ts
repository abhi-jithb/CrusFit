import type { LocalSeoPage } from "@/types/seo";

import { achievements } from "./achievements";

function getAchievementStat(id: string, labelOverride?: string) {
  const achievement = achievements.find((item) => item.id === id);

  if (!achievement) {
    throw new Error(`Missing achievement data for ${id}`);
  }

  return {
    value: achievement.value,
    label: labelOverride ?? achievement.label,
  };
}

const localSeoTrustStats = [getAchievementStat("rating"), getAchievementStat("reviews")];

function buildLocalSeoStats(...stats: LocalSeoPage["stats"]) {
  return [...localSeoTrustStats, ...stats];
}

export const localSeoPages = [
  {
    slug: "boxing-kollam",
    path: "/boxing-kollam",
    discipline: "Boxing",
    keyword: "Boxing Classes Kollam",
    title: "Boxing Classes in Kollam",
    description:
      "Build striking fundamentals, footwork, defence and conditioning with CRUSTFIT INDIA's structured boxing classes in Kollam.",
    metaTitle: "Boxing Classes Kollam | CRUSTFIT INDIA",
    metaDescription:
      "Join CRUSTFIT INDIA for boxing classes in Kollam focused on footwork, combinations, defence, bag work and progressive combat conditioning.",
    relatedKeywords: [
      "Boxing Classes Kollam",
      "Boxing academy Kollam",
      "Combat sports academy Kollam",
      "Martial Arts Academy Kollam",
    ],
    stats: buildLocalSeoStats(getAchievementStat("disciplines")),
    highlights: [
      {
        title: "Boxing fundamentals",
        description:
          "Learn stance, guard, footwork, distance control and combination rhythm before moving into harder rounds.",
      },
      {
        title: "Conditioning for the ring",
        description:
          "Bag work, pad rounds and movement drills help improve stamina, coordination and striking confidence.",
      },
      {
        title: "Beginner-aware coaching",
        description:
          "Training is structured for new members while still supporting athletes who want sharper technical work.",
      },
    ],
    trainingFocus: ["Footwork", "Guard", "Combinations", "Bag work", "Defence", "Conditioning"],
    faq: [
      {
        question: "Do I need boxing experience to join boxing classes in Kollam?",
        answer:
          "No. CRUSTFIT INDIA can onboard beginners with stance, guard, footwork and controlled striking drills before progressing intensity.",
      },
      {
        question: "What should I expect in a boxing class?",
        answer:
          "A boxing session can include warm-up work, footwork, pad or bag drills, technique correction, conditioning and safe progression.",
      },
      {
        question: "Are boxing classes useful for fitness as well as sport?",
        answer:
          "Yes. Boxing training supports cardio, coordination, mobility and strength while also building practical striking skill.",
      },
    ],
  },
  {
    slug: "kickboxing-kollam",
    path: "/kickboxing-kollam",
    discipline: "Kickboxing",
    keyword: "Kickboxing Classes Kollam",
    title: "Kickboxing Classes in Kollam",
    description:
      "Train punches, kicks, timing and high-output conditioning through practical kickboxing classes at CRUSTFIT INDIA.",
    metaTitle: "Kickboxing Classes Kollam | CRUSTFIT INDIA",
    metaDescription:
      "Explore kickboxing classes in Kollam at CRUSTFIT INDIA with pad work, kicks, combinations, cardio and beginner-friendly coaching.",
    relatedKeywords: [
      "Kickboxing Classes Kollam",
      "Kickboxing Kerala",
      "Striking classes Kollam",
      "Martial Arts Academy Kollam",
    ],
    stats: buildLocalSeoStats({ value: "All", label: "Levels" }),
    highlights: [
      {
        title: "Punches and kicks",
        description:
          "Develop practical combinations that connect boxing mechanics with controlled kicking technique.",
      },
      {
        title: "Pad rounds and timing",
        description:
          "Work through coach-led pad rounds that sharpen rhythm, accuracy, balance and movement.",
      },
      {
        title: "Combat fitness",
        description:
          "Kickboxing sessions bring high-energy conditioning without losing the technical structure of martial arts.",
      },
    ],
    trainingFocus: ["Punches", "Kicks", "Pads", "Timing", "Balance", "Cardio"],
    faq: [
      {
        question: "Are kickboxing classes in Kollam beginner friendly?",
        answer:
          "Yes. New members can start with basic stance, striking mechanics, balance and controlled pad work.",
      },
      {
        question: "How is kickboxing different from boxing?",
        answer:
          "Kickboxing combines punches with kicks, movement, timing and balance drills, while boxing focuses on hands, footwork and defence.",
      },
      {
        question: "Can kickboxing help with fitness goals?",
        answer:
          "Yes. Kickboxing is useful for stamina, coordination, mobility and full-body conditioning when coached with safe progression.",
      },
    ],
  },
  {
    slug: "mma-kollam",
    path: "/mma-kollam",
    discipline: "MMA",
    keyword: "MMA Training Kollam",
    title: "MMA Training in Kollam",
    description:
      "Build striking, grappling, clinch awareness and combat conditioning with progressive MMA training at CRUSTFIT INDIA.",
    metaTitle: "MMA Training Kollam | CRUSTFIT INDIA",
    metaDescription:
      "Train MMA in Kollam at CRUSTFIT INDIA with striking, grappling, clinch control, transitions and structured combat sports coaching.",
    relatedKeywords: [
      "MMA Training Kollam",
      "MMA classes Kollam",
      "Combat sports academy Kollam",
      "Martial Arts Academy Kollam",
    ],
    stats: buildLocalSeoStats({ value: "Hybrid", label: "Training" }),
    highlights: [
      {
        title: "Integrated skill work",
        description:
          "MMA training connects striking, clinch work, groundwork and transitions instead of treating them as separate silos.",
      },
      {
        title: "Progressive intensity",
        description:
          "Athletes can build confidence through foundations before stepping into harder rounds or advanced combinations.",
      },
      {
        title: "Combat conditioning",
        description:
          "Sessions support movement, strength, stamina and mat awareness for practical mixed martial arts training.",
      },
    ],
    trainingFocus: ["Striking", "Grappling", "Clinch", "Transitions", "Movement", "Conditioning"],
    faq: [
      {
        question: "What does MMA training in Kollam include?",
        answer:
          "MMA training can include striking, grappling, clinch control, transitions, movement drills and combat-specific conditioning.",
      },
      {
        question: "Can beginners start MMA at CRUSTFIT INDIA?",
        answer:
          "Yes. Beginners can start with foundations and controlled drills before progressing into more advanced MMA training.",
      },
      {
        question: "Do I need separate boxing or grappling experience first?",
        answer:
          "No. Prior experience helps, but MMA training can begin with fundamentals across striking, grappling and movement.",
      },
    ],
  },
  {
    slug: "muay-thai-kollam",
    path: "/muay-thai-kollam",
    discipline: "Muay Thai",
    keyword: "Martial Arts Academy Kollam",
    title: "Muay Thai Training in Kollam",
    description:
      "Train Muay Thai fundamentals, clinch work, knees, elbows and striking conditioning at CRUSTFIT INDIA in Kollam.",
    metaTitle: "Muay Thai Training Kollam | Martial Arts Academy Kollam",
    metaDescription:
      "CRUSTFIT INDIA is a martial arts academy in Kollam offering Muay Thai training with clinch work, knees, elbows, bag rounds and striking drills.",
    relatedKeywords: [
      "Martial Arts Academy Kollam",
      "Muay Thai Kollam",
      "Muay Thai training Kerala",
      "Combat sports academy Kollam",
    ],
    stats: buildLocalSeoStats({ value: "8", label: "Combat Arts" }),
    highlights: [
      {
        title: "Muay Thai fundamentals",
        description:
          "Train stance, balance, punches, kicks, knees, elbows and ring movement with structured coaching.",
      },
      {
        title: "Clinch and control",
        description:
          "Develop clinch awareness, posture, pressure and close-range striking with safe technical progression.",
      },
      {
        title: "Martial arts pathway",
        description:
          "Muay Thai sits inside a broader academy ecosystem covering striking, grappling and traditional martial arts.",
      },
    ],
    trainingFocus: ["Kicks", "Knees", "Elbows", "Clinch", "Bag rounds", "Ring movement"],
    faq: [
      {
        question: "Does CRUSTFIT INDIA offer Muay Thai training in Kollam?",
        answer:
          "Yes. CRUSTFIT INDIA includes Muay Thai as part of its combat sports and martial arts training programs in Kollam.",
      },
      {
        question: "Is Muay Thai suitable for beginners?",
        answer:
          "Yes. Beginners can start with stance, balance, basic strikes and controlled drills before learning advanced clinch work.",
      },
      {
        question: "Why choose a martial arts academy in Kollam for Muay Thai?",
        answer:
          "A structured martial arts academy helps members train technique, conditioning, safety and progression in one disciplined environment.",
      },
    ],
  },
] satisfies LocalSeoPage[];

export function getLocalSeoPage(slug: string) {
  const page = localSeoPages.find((localPage) => localPage.slug === slug);

  if (!page) {
    throw new Error(`Missing local SEO page data for ${slug}`);
  }

  return page;
}
