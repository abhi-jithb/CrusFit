import { Container } from "@/components/container";
import { siteChromeContent } from "@/data/site-content";

export function SiteFooter() {
  const content = siteChromeContent.footer;

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-8">
      <Container className="flex flex-col gap-4 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{content.identity}</p>
        <p>{content.summary}</p>
      </Container>
    </footer>
  );
}
