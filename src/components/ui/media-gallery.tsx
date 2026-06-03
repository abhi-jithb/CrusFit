"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import type { GalleryPhoto } from "@/types/gallery";
import type { VideoItem } from "@/types/video";

import { Badge } from "./badge";
import { buttonClassName } from "./button";
import { MotionReveal } from "./motion-reveal";

type MediaGalleryContent = {
  lightbox: {
    closeAriaLabel: string;
    closeLabel: string;
    dialogLabel: string;
    openLabel: string;
  };
  tabs: {
    ariaLabel: string;
    photos: string;
    videos: string;
  };
  videoLabels: {
    embedTitle: string;
    sourceLabel: string;
  };
};

type MediaGalleryProps = {
  content: MediaGalleryContent;
  photos: GalleryPhoto[];
  videos: VideoItem[];
};

export function MediaGallery({ content, photos, videos }: MediaGalleryProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const tabsId = useId();

  useEffect(() => {
    if (window.location.hash === "#videos") {
      setActiveTab("videos");
    }
  }, []);

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  return (
    <>
      <span id="videos" className="block scroll-mt-24" />
      <div
        role="tablist"
        aria-label={content.tabs.ariaLabel}
        className="mb-8 inline-flex rounded-md border border-white/10 bg-white/[0.04] p-1"
      >
        {(["photos", "videos"] as const).map((tab) => (
          <button
            key={tab}
            id={`${tabsId}-${tab}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`${tabsId}-${tab}-panel`}
            onClick={() => setActiveTab(tab)}
            className="rounded-[0.375rem] px-4 py-2 text-sm font-black uppercase text-neutral-300 transition hover:text-brand-yellow aria-selected:bg-brand-yellow aria-selected:text-brand-black"
          >
            {content.tabs[tab]}
          </button>
        ))}
      </div>

      <div
        id={`${tabsId}-photos-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-photos`}
        hidden={activeTab !== "photos"}
      >
        <ul className="columns-1 gap-4 md:columns-2 xl:columns-3">
          {photos.map((photo, index) => (
            <li key={photo.id} className="mb-4 break-inside-avoid">
              <MotionReveal delay={Math.min(index * 0.03, 0.18)} hoverScale>
                <article className="combat-card combat-card--interactive overflow-hidden">
                  <button
                    type="button"
                    aria-label={`${content.lightbox.openLabel}: ${photo.title}`}
                    onClick={() => setActivePhoto(photo)}
                    className="group block w-full text-left"
                  >
                    <div className={`relative ${photo.aspectRatio} overflow-hidden bg-brand-panel`}>
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                        style={{ objectPosition: photo.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="outline">{photo.title}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-black text-brand-white">{photo.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-300">{photo.summary}</p>
                    </div>
                  </button>
                </article>
              </MotionReveal>
            </li>
          ))}
        </ul>
      </div>

      <div
        id={`${tabsId}-videos-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-videos`}
        hidden={activeTab !== "videos"}
      >
        <ul className="grid gap-4 lg:grid-cols-3">
          {videos.map((video, index) => (
            <li key={video.id}>
              <MotionReveal className="h-full" delay={Math.min(index * 0.04, 0.16)} hoverScale>
                <article className="combat-card combat-card--interactive h-full overflow-hidden">
                  <div className="aspect-video bg-brand-panel">
                    <iframe
                      title={`${content.videoLabels.embedTitle}: ${video.title}`}
                      src={video.embedUrl}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="accent">YouTube</Badge>
                    <h3 className="mt-4 text-xl font-black text-brand-white">{video.title}</h3>
                    <p className="mt-2 leading-7 text-neutral-300">{video.summary}</p>
                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex min-h-10 items-center text-sm font-black uppercase text-brand-yellow transition hover:text-brand-white"
                    >
                      {content.videoLabels.sourceLabel}
                    </a>
                  </div>
                </article>
              </MotionReveal>
            </li>
          ))}
        </ul>
      </div>

      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={content.lightbox.dialogLabel}
          className="fixed inset-0 z-50 grid place-items-center bg-brand-black/90 p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-md border border-white/10 bg-brand-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-brand-panel">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black text-brand-white">{activePhoto.title}</h3>
                <p className="mt-2 leading-7 text-neutral-300">{activePhoto.summary}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={content.lightbox.closeAriaLabel}
                className={buttonClassName({ size: "sm" })}
                onClick={() => setActivePhoto(null)}
              >
                {content.lightbox.closeLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
