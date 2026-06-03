import type { Coach } from "@/types/coach";

export const coaches: Coach[] = [
  {
    name: "Striking Coaching Team",
    role: "Boxing, Kickboxing & Muay Thai",
    summary:
      "Instruction with attention to stance, timing, defensive habits and safe striking progression.",
    disciplines: ["Boxing", "Kickboxing", "Muay Thai"],
  },
  {
    name: "Grappling Coaching Team",
    role: "MMA, Jiu Jitsu & Sambo",
    summary: "Coaching focused on control, transitions, mat awareness and integrated MMA pathways.",
    disciplines: ["MMA", "Jiu Jitsu", "Sambo"],
  },
  {
    name: "Movement Coaching Team",
    role: "Yoga, Zumba & Athletic Conditioning",
    summary:
      "Guidance that supports mobility, recovery, stamina, rhythm and group training energy.",
    disciplines: ["Yoga", "Zumba", "Conditioning"],
  },
];
