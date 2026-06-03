import { getLocalSeoPage } from "@/data/local-seo";
import { buildLocalSeoMetadata } from "@/lib/seo";
import { LocalSeoPage } from "@/sections/local-seo/local-seo-page";

const page = getLocalSeoPage("muay-thai-kollam");

export const dynamic = "force-static";
export const metadata = buildLocalSeoMetadata(page);

export default function MuayThaiKollamPage() {
  return <LocalSeoPage page={page} />;
}
