import { SectionWrapper } from "@/components/section-wrapper";
import { MediaGallery } from "@/components/ui";
import { galleryPhotos, galleryVideos } from "@/data/gallery";
import { homePageContent } from "@/data/site-content";

export function Gallery() {
  const content = homePageContent.gallery;

  return (
    <SectionWrapper
      id="gallery"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="bg-brand-black"
    >
      <MediaGallery content={content} photos={galleryPhotos} videos={galleryVideos} />
    </SectionWrapper>
  );
}
