import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonLink, VideoEmbedCard } from "@/components/ui";
import { homePageContent } from "@/data/site-content";
import { videos } from "@/data/videos";

type VideosProps = {
  headingLevel?: 1 | 2;
  preview?: boolean;
  sectionId?: string;
};

export function Videos({ headingLevel, preview = false, sectionId = "videos" }: VideosProps) {
  const content = homePageContent.videos;
  const visibleVideos = preview ? videos.slice(0, 2) : videos;

  return (
    <SectionWrapper
      id={sectionId}
      eyebrow={content.eyebrow}
      headingLevel={headingLevel}
      title={content.title}
      description={content.description}
      className="bg-brand-ink"
    >
      <ul className="grid gap-4 lg:grid-cols-3">
        {visibleVideos.map((video, index) => (
          <li key={video.id}>
            <VideoEmbedCard
              embedTitle={content.embedTitle}
              index={index}
              sourceLabel={content.sourceLabel}
              video={video}
            />
          </li>
        ))}
      </ul>
      {preview ? (
        <div className="mt-8">
          <ButtonLink href={content.viewAllCta.href} variant="secondary">
            {content.viewAllCta.label}
          </ButtonLink>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
