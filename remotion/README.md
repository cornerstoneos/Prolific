# Prolific — Remotion render pipeline

Proof-of-concept: real animated MP4 output driven by code, no screen
recording. Separate from `marketing/` (the Vite/Netlify site) — this
folder only produces video files, it doesn't deploy anywhere.

## Setup
    npm install

## Preview while building (opens a local studio UI)
    npx remotion studio src/index.jsx

## Render to an actual file
    npx remotion render src/index.jsx <composition-id> out/<name>.mp4

Remotion downloads its own Chromium ("chrome-headless-shell") on first
render. If that download is blocked (sandboxed/offline environments), point
it at any already-installed chrome-headless-shell-type binary instead:

    npx remotion render src/index.jsx weekend-dump out/weekend-dump.mp4 \
      --browser-executable=/path/to/chrome-headless-shell

Regular (non-headless-shell) Chrome binaries fail with "Old Headless mode
has been removed" -- it specifically wants the standalone headless-shell
build, not the full browser binary.

## Structure
- `src/index.jsx` -- entry point, calls `registerRoot`
- `src/Root.jsx` -- registers one `<Composition>` per content piece
- `src/<PieceName>.jsx` -- one component per piece, frame-driven animation
  via `useCurrentFrame()` / `interpolate()` (NOT time- or scroll-driven
  like the Framer Motion / CSS patterns in `marketing/`)

Currently has one piece wired up (`weekend-dump`) as the proof this
pipeline works. The other 11 pieces in `marketing/src/content/schema.js`
follow the same pattern once real animation direction is decided per
piece.
