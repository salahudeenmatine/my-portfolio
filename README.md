# Salahudeen Matine — Portfolio

Personal portfolio site built with Next.js and Tailwind CSS.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Before deploying

- Replace `https://YOUR_DOMAIN` in `app/layout.tsx` with your real URL (e.g. `https://salahudeenmatine.vercel.app`).
- Ensure `public/cv.pdf` contains your latest CV.
- Ensure `public/images/headshot.jpg` exists.

## Cache troubleshooting

**Favicon not updating?**
Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows/Linux).
Or open DevTools → Network tab → check "Disable cache" → reload.

**OG / link preview not updating after deploy?**
OG previews are cached aggressively by platforms. Use these tools to force a refresh:
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter/X: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/tools/debug/

## OG image

Generated dynamically by Next.js at `/opengraph-image` via `app/opengraph-image.tsx`.
Uses the built-in `next/og` `ImageResponse` API — no external packages required.
Renders at 1200×630px matching the site aesthetic.
