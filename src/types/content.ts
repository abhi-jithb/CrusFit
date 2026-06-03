export type NavItem = {
  href: `#${string}` | `/#${string}` | "/";
  label: string;
};

export type Program = {
  focus: string[];
  level: string;
  summary: string;
  title: string;
};

export type CoachRole = {
  role: string;
  summary: string;
};

export type TestimonialTheme = {
  summary: string;
  title: string;
};

export type GalleryItem = {
  image: string;
  summary: string;
  title: string;
};
