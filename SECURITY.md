# Release security

No authentication backend, API credentials, payments or external service integrations are included. Public URLs are the only environment configuration. SmokeReset source and signing material are excluded.

Git and Vercel ignore rules exclude environment files, credentials, certificates, private keys, keystores, dependencies and generated builds. `.env.example` contains empty public URL fields. Never commit private files or runtime browser data.

TypeScript, ESLint with React Hooks and JSX accessibility rules, production build, dependency audit and history secret scans are required before publication. See QA.md for executed results and scan limitations.

Response headers set nosniff, DENY framing, strict-origin-when-cross-origin referrers and deny camera/microphone/geolocation permissions. No security setting is disabled for testing.

Publication requires explicit owner approval. Scan results are evidence of performed checks, not a guarantee that every possible vulnerability has been excluded.
