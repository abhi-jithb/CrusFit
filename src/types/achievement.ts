export type Achievement = {
  description: string;
  id: string;
  label: string;
  statLabel?: string;
  trustLabel?: string;
  trustVariant?: "accent" | "outline";
  value: string;
};

export type ChampionAchievement = {
  achievements: string[];
  disciplines: string[];
  id: string;
  name: string;
};

export type ChampionPerformerGroup = {
  id: string;
  performers: string[];
  summary: string;
  title: string;
};
