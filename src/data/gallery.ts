import type { GalleryItem } from "@/types/gallery";

import { siteAssets } from "./site-content";

export const galleryItems: GalleryItem[] = [
  {
    title: "Training Floor",
    summary: "A dark, focused academy environment built for striking, grappling and conditioning.",
    image: siteAssets.heroImage,
    alt: "CRUSTFIT INDIA training floor with boxing and MMA equipment",
    objectPosition: "left center",
  },
  {
    title: "Striking Sessions",
    summary: "Pad work, bag rounds, boxing drills and Muay Thai combinations.",
    image: siteAssets.heroImage,
    alt: "Boxing and striking equipment at CRUSTFIT INDIA",
    objectPosition: "center",
  },
  {
    title: "Combat Conditioning",
    summary: "Structured fitness work that supports martial artists and everyday athletes.",
    image: siteAssets.heroImage,
    alt: "Combat sports conditioning space at CRUSTFIT INDIA",
    objectPosition: "right center",
  },
];
