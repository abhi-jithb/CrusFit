export type VideoCategory = "training" | "sparring" | "events" | "competitions";

export type VideoItem = {
  category: VideoCategory;
  embedUrl: string;
  id: string;
  sourceUrl: string;
  summary: string;
  title: string;
};
