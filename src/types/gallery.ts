export type GalleryPhotoCategory =
  | "training"
  | "sparring"
  | "events"
  | "competitions"
  | "group-sessions";

export type GalleryPhoto = {
  alt: string;
  aspectRatio: string;
  category: GalleryPhotoCategory;
  id: string;
  image: string;
  objectPosition?: string;
  summary: string;
  title: string;
};

export type GalleryVideoPlatform = "youtube" | "instagram" | "shorts";

export type GalleryVideo = {
  ctaLabel: string;
  embedUrl?: string;
  id: string;
  platform: GalleryVideoPlatform;
  platformLabel: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  title: string;
  url: string;
};
