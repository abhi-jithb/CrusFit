import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, GalleryPhotoCard, MediaGallery } from "@/components/ui";
import { galleryPhotos } from "@/data/gallery";
import { homePageContent } from "@/data/site-content";
import { videos } from "@/data/videos";

type GalleryProps = {
  headingLevel?: 1 | 2;
  preview?: boolean;
  sectionId?: string;
};

export function Gallery({ headingLevel, preview = false, sectionId = "gallery" }: GalleryProps) {
  const content = homePageContent.gallery;
  const visiblePhotos = preview ? galleryPhotos.slice(0, 3) : galleryPhotos;

  return (
    <SectionWrapper
      id={sectionId}
      eyebrow={content.eyebrow}
      headingLevel={headingLevel}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      {preview ? (
        <>
          <ul className="grid gap-4 md:grid-cols-3">
            {visiblePhotos.map((photo, index) => (
              <li key={photo.id}>
                <GalleryPhotoCard index={index} photo={photo} />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={content.viewAllCta.href} variant="secondary">
              {content.viewAllCta.label}
            </ButtonLink>
          </div>
        </>
      ) : (
        <MediaGallery content={content} photos={galleryPhotos} videos={videos} />
      )}
    </SectionWrapper>
  );
}
