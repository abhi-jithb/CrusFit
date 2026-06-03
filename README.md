# CRUSTFIT INDIA Website

Production-grade foundation for the CRUSTFIT INDIA combat sports and martial arts academy website in Kollam, Kerala, India.

## Project Overview

CRUSTFIT INDIA is positioned as a professional combat sports academy covering Boxing, Kickboxing, MMA, Muay Thai, Karate, Taekwondo, Jiu Jitsu, Sambo, Yoga and Zumba. This foundation creates a static-first homepage, SEO-ready metadata, reusable layout primitives and a minimal content system that can grow into schedules, program pages, coach profiles and verified academy media.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- `next/font` for self-hosted font optimization
- Server Components by default

## Folder Structure

```text
src/
  app/          App Router routes, metadata, sitemap, robots and global styles
  components/   Shared layout primitives and site chrome
  constants/    Site-level configuration and navigation
  data/         Homepage content data
  lib/          Small shared utilities
  sections/     Homepage section components
  types/        Shared TypeScript content types
public/
  images/       Project visual assets
```

## Development Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Set `NEXT_PUBLIC_SITE_URL` before production deployment so canonical URLs, robots and sitemap entries use the final domain.

## Build Instructions

Run linting:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

## Deployment Instructions

Vercel is the recommended deployment target for a Next.js App Router site.

1. Connect the GitHub repository to Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Use the default install command `npm install`.
4. Use the default build command `npm run build`.
5. Verify `/robots.txt`, `/sitemap.xml`, `/opengraph-image` and the homepage after deployment.

The app is static-first, so it can also be hosted on any platform that supports Next.js server output.

## SEO Strategy

- Global metadata is configured in `src/app/layout.tsx`.
- Canonical URL, title templates, descriptions and keyword coverage are centralized through `src/constants/site.ts`.
- Open Graph and Twitter metadata are configured for rich sharing.
- Dynamic Open Graph image generation is available at `/opengraph-image`.
- `src/app/robots.ts` exposes crawl rules and sitemap discovery.
- `src/app/sitemap.ts` generates the base sitemap.
- Semantic landmarks, section headings and descriptive image alt text are used throughout the homepage.

## Performance Strategy

- Server Components are used by default.
- The homepage is forced static with `dynamic = "force-static"`.
- The hero image uses `next/image` with priority loading.
- Tailwind CSS keeps styling co-located and avoids duplicate custom CSS.
- No animation libraries, icon packages or unnecessary runtime dependencies are included.
- Content is stored as typed data so future sections can grow without prop drilling.

## Coding Standards

- Use TypeScript for all application code.
- Prefer Server Components unless interactivity requires a Client Component.
- Keep content data in `src/data` and site-wide values in `src/constants`.
- Favor composition with reusable primitives such as `Container` and `SectionWrapper`.
- Avoid fabricated operational details. Add verified coach names, schedules, contact channels and map links before launch.
- Run `npm run lint`, `npm run typecheck` and `npm run build` before merging production changes.
