export type Program = {
  category: "combat" | "fitness" | "martial-art";
  focus: string[];
  level: string;
  seoPath?: `/${string}`;
  slug: string;
  summary: string;
  title: string;
};
