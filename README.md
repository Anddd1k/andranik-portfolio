# Andranik Harutyunyan — Developer / Portfolio V2

Existing dark portfolio extended to three detailed RU/EN case studies: SmokeReset, Brew & Co. and FlowDesk. The first is a published Android app; the other two are explicitly labelled independent Concept / Demo Projects.

## Local run

Node.js 20.9+ is required; tested on Node.js 24.14.0.

```powershell
npm.cmd ci
npm.cmd run dev -- --port 3100
```

Use `npm` instead of `npm.cmd` on macOS/Linux. Open http://127.0.0.1:3100/ru. `/` redirects to `/ru`.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run start -- --port 3100
$env:VERIFY_URL='http://127.0.0.1:3100'
node scripts/verify.mjs
```

Start the separate demo apps on ports 3101 and 3102 for local review. To show local demo links, put these loopback URLs in `.env.local` and rebuild; this file is ignored and excluded from release archives. `.env.example` has empty public configuration fields.

## Structure

```text
app/[locale]/                   RU/EN home, layout and not-found
app/[locale]/projects/[slug]/    three case studies per language
components/sections/            home, selected work, Android promotion, contacts
components/ui/                  shared motion and interactive hero
lib/site.ts                     name, domain and real contact configuration
lib/releases.ts                 verified Google Play and optional publication URLs
data/projects.ts                descriptions, features, limitations, stacks and screenshots
data/translations.ts            main interface translations
public/projects/                genuine running-site and Google Play screenshots
scripts/verify.mjs              route/link/metadata smoke checks
styles/globals.css              preserved dark design plus V2 cases
```

## Verified material and limits

SmokeReset: `com.smokereset.app`, published by And1k. The Google Play URL is confirmed publicly and by the owner. React, Android and local storage are owner-confirmed. Exact Android libraries are not claimed. Unverified upcoming RU/EN, widgets and breathing exercises are not presented as released features. No medical-effectiveness, download-count or business-outcome claims are made.

Only the public description and public Google Play screenshots are included. SmokeReset source, signing keys and private materials are not present. The compact And1k section links to the confirmed SmokeReset listing as requested by the owner.

Brew & Co. and FlowDesk are fully functioning independent demos, with genuine browser screenshots. Their verified public GitHub and Live Demo URLs are configured in lib/releases.ts after the owner-approved release. Optional environment variables override these defaults. See `PUBLIC_ASSETS.md` for screenshot provenance.

## Configuration

`lib/site.ts` keeps Telegram/GitHub/email as `null` until the owner provides real contact details. Populated contacts get external links and copy buttons. No fake form is included.

`.env.example` lists optional public variables:

- `NEXT_PUBLIC_SITE_URL`: real absolute HTTPS portfolio domain. Enables canonical, hreflang and sitemap URLs, and permits indexing after rebuild.
- `NEXT_PUBLIC_BREW_DEMO_URL`, `NEXT_PUBLIC_BREW_GITHUB_URL`.
- `NEXT_PUBLIC_FLOWDESK_DEMO_URL`, `NEXT_PUBLIC_FLOWDESK_GITHUB_URL`.

These are public URLs, not secrets. With no domain configured, robots blocks indexing and the sitemap stays empty. No production domain is fabricated.

## Publication

Use this folder for the separate `andranik-portfolio` repository. The demos have separate source roots in sibling folders. The public GitHub repository and both demo deployments were created after explicit owner approval. The portfolio website itself has not been deployed. `QA.md` contains executed checks and limitations.

The optional `developerProfileUrl` configuration is deliberately null; the And1k promotion uses the owner-confirmed app listing. Portfolio font subsets and their OFL license are bundled locally under `public/fonts/`.

## Approved public release — 21 October 2026

Repository: https://github.com/Anddd1k/andranik-portfolio

The portfolio source is public; the portfolio website itself has not been deployed. Both demo URLs and repository URLs are configured in lib/releases.ts. TypeScript, lint and production build are rechecked after integration.

Owner explicitly approved public repository creation and publication of the two demos. Before push, full Git history and exported tracked source were rescanned with Gitleaks: no findings. Ignore rules and upload manifests excluded environment files, dependency/build folders and signing material. No SmokeReset source is included. Earlier local QA below is retained as dated verification history.
