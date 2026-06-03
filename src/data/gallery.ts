import type { GalleryPhoto, GalleryVideo } from "@/types/gallery";

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "training",
    title: "Training",
    category: "training",
    summary: "Technical sessions built around pads, bags, mats and coach-led progression.",
    image: "/images/gallery/training-placeholder.webp",
    alt: "Athletes training boxing and grappling technique inside a dark combat sports gym",
    aspectRatio: "aspect-[4/3]",
    objectPosition: "center",
  },
  {
    id: "sparring",
    title: "Sparring",
    category: "sparring",
    summary: "Controlled rounds designed for timing, distance, composure and safe intensity.",
    image: "/images/gallery/sparring-placeholder.webp",
    alt: "Two athletes practicing controlled sparring inside a dark boxing ring",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center",
  },
  {
    id: "events",
    title: "Events",
    category: "events",
    summary: "Academy gatherings, demonstrations and in-house fight-night style experiences.",
    image: "/images/gallery/events-placeholder.webp",
    alt: "Combat sports academy event with athletes and audience around a ring",
    aspectRatio: "aspect-[4/3]",
    objectPosition: "center",
  },
  {
    id: "competitions",
    title: "Competitions",
    category: "competitions",
    summary: "Competition-focused moments that reflect preparation, discipline and achievement.",
    image: "/images/gallery/competitions-placeholder.webp",
    alt: "Boxing competition moment with referee raising the winning athlete's glove",
    aspectRatio: "aspect-[4/3]",
    objectPosition: "center",
  },
  {
    id: "group-sessions",
    title: "Group sessions",
    category: "group-sessions",
    summary:
      "Community training blocks for strength, mobility, conditioning and martial arts basics.",
    image: "/images/gallery/group-sessions-placeholder.webp",
    alt: "Group conditioning session inside a dark combat sports academy",
    aspectRatio: "aspect-[4/3]",
    objectPosition: "center",
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "youtube-training-tour",
    title: "YouTube embeds",
    platform: "youtube",
    platformLabel: "YouTube",
    summary:
      "A future slot for long-form academy walkthroughs, training recaps and program explainers.",
    thumbnail: "/images/gallery/training-placeholder.webp",
    thumbnailAlt: "Training floor preview for a future YouTube academy video",
    url: "https://www.youtube.com/@crustfitindia",
    ctaLabel: "Open YouTube channel",
  },
  {
    id: "instagram-reels",
    title: "Instagram reels",
    platform: "instagram",
    platformLabel: "Instagram reels",
    summary: "A future slot for short reels covering pads, sparring, events and member moments.",
    thumbnail: "/images/gallery/events-placeholder.webp",
    thumbnailAlt: "Academy event preview for future Instagram reels",
    url: "https://www.instagram.com/crustfitindia/",
    ctaLabel: "Open Instagram reels",
  },
  {
    id: "youtube-shorts",
    title: "Shorts",
    platform: "shorts",
    platformLabel: "Shorts",
    summary:
      "A future slot for fast training clips, technique snapshots and competition highlights.",
    thumbnail: "/images/gallery/sparring-placeholder.webp",
    thumbnailAlt: "Sparring preview for future short-form video clips",
    url: "https://www.youtube.com/@crustfitindia/shorts",
    ctaLabel: "Open Shorts",
  },
];
