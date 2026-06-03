export type Achievement = {
  description: string;
  id: string;
  label: string;
  statLabel?: string;
  trustLabel?: string;
  trustVariant?: "accent" | "outline";
  value: string;
};
