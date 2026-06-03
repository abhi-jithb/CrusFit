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
