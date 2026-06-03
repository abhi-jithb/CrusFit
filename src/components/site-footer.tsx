import { Container } from "@/components/container";
import { siteConfig } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink py-8">
      <Container className="flex flex-col gap-4 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name} - {siteConfig.location.city}, {siteConfig.location.region},{" "}
          {siteConfig.location.country}
        </p>
        <p>Built for combat sports, martial arts, fitness, and community.</p>
      </Container>
    </footer>
  );
}
