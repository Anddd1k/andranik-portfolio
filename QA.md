# Verification — 21 October 2026

## Final portfolio production release

Live: https://andranik-portfolio.vercel.app. Vercel project `anddd1ks-projects/andranik-portfolio`, deployment `dpl_BtkLMTG87pe2JCCysVx3BsSWjHyv`, READY / production. Production `NEXT_PUBLIC_SITE_URL` is `https://andranik-portfolio.vercel.app`; both local and Vercel builds used it. Contacts remain unset and hidden.

- TypeScript, ESLint, production build and npm audit repeated successfully; audit reported zero known vulnerabilities.
- Public `scripts/verify.mjs` passed eight localized pages, links/anchors, root redirect, not-found handling, metadata and assets.
- `scripts/verify-production.mjs` passed HTTPS, canonical/hreflang on all eight RU/EN pages, index/follow, exact eight-entry sitemap, crawlable robots, working demo URLs, expected GitHub/Google Play links, hidden contacts and absence of loopback URLs.
- Public HTTPS returns 200; HTTP redirects to HTTPS; HSTS is enabled; no X-Robots-Tag blocks indexing. Search-engine inclusion itself is external and has not been claimed or verified.
- Production Lighthouse 13.5.0 SEO-only run: **100/100**, no run warnings. This is a new public-site measurement; the full local category scores below remain historical.
- Browser: all three loaded project covers; mobile menu opens and closes on navigation; three RU case routes render; FlowDesk language switch preserves its case and reaches EN. No console errors or warnings. At viewport 390 px document width is 375; the EN case at 320 px has document width 305.
- Full predeployment Git history scan: four commits, zero findings. Upload manifest excluded environment/local/build/dependency files. Final documentation history is rescanned before push.
- Existing Brew and FlowDesk deployment IDs were compared before/after and remain unchanged.

Production reports and screenshots accompany the release deliverable outside this source repository. Reproduce public checks with `VERIFY_URL=https://andranik-portfolio.vercel.app` and the two scripts. Physical-device and full manual screen-reader testing remain outside this verification.

The original local verification precedes the owner-approved release. Current publication status and live checks are recorded at the end of this document.

| Check | Result |
|---|---|
| TypeScript strict check | Passed |
| ESLint, TypeScript/React Hooks/JSX accessibility | Passed |
| Production build | Passed |
| HTTP route/link/header smoke checks | Passed |
| npm audit, production + development dependencies | 0 known vulnerabilities reported |
| Gitleaks 8.30.1 staged source scan | No leaks found |
| Gitleaks complete initial Git history scan | One source commit scanned; no leaks found |

The final documentation commit is also included in the complete history scan during release packaging; see the accompanying release report for its count and final commit ID.

## Browser checks

Eight RU/EN pages, all internal links and anchors, root redirect, four removed project URLs, not-found handling, metadata, robots, sitemap, favicon and OG image. Browser: real project covers, a Brew & Co. case, RU/EN case-preserving switch and loaded case image. Responsive widths 390 and 320 px were checked.

## Lighthouse 13.5.0 — mobile navigation

Local production server, headless Chrome 123, simulated mobile/network/CPU settings. These are measurements, not guaranteed production scores.

| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| 90 | 100 | 100 | 66 |

SEO is reduced by intentional noindex/robots rules before approved publication. The portfolio enables canonical, hreflang, sitemap and indexing only after a real domain is configured. Demos are intentionally noindex. Lighthouse reports and initial diagnostic runs accompany the release package. Some runs reported that the host CPU was slower than expected; performance varies with device, server warmth and concurrent load.

## Fixes and limits

Known findings were corrected: vulnerable development glob dependency chain, insufficient text contrast, visible/accessibility label mismatches, small link targets, mobile table overflow and an SVG title hydration mismatch. Overview charts use lightweight plots of the same sample data; the Analytics view loads Recharts on demand. Motion features and portfolio fonts load through lighter paths.

Responsive browser dimensions were tested, not physical phones. A complete manual screen-reader audit, unavailable-storage fault injection and gesture-based drag testing were not performed. Keyboard-accessible status controls were exercised. No real backend, payment or external account was tested because none is connected. Real contact copy actions remain untested until the owner supplies contact details. SmokeReset was verified from owner confirmation and public Google Play material, not by running or inspecting its private Android source.

## Reproduce

```sh
npm ci
npm run typecheck
npm run lint
npm run build
npm run start -- --port 3100
# In another terminal, set VERIFY_URL if using a non-default port:
node scripts/verify.mjs
```

Use npm.cmd on Windows PowerShell when needed. Gitleaks reports are redacted. Ignore rules and the tracked-file audit exclude environment files, signing material, dependencies, builds and private app code.

## Approved public release — 21 October 2026

Repository: https://github.com/Anddd1k/andranik-portfolio

The portfolio source is public; the portfolio website itself has not been deployed. Both demo URLs and repository URLs are configured in lib/releases.ts. TypeScript, lint and production build are rechecked after integration.

Owner explicitly approved public repository creation and publication of the two demos. Before push, full Git history and exported tracked source were rescanned with Gitleaks: no findings. Ignore rules and upload manifests excluded environment files, dependency/build folders and signing material. No SmokeReset source is included. Earlier local QA below is retained as dated verification history.
