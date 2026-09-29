# Salahudeen Matine: portfolio

Personal site for recruiters and technical reviewers. Next.js 16, TypeScript and Tailwind CSS 4, hosted on Vercel at
https://salahudeenmatine.vercel.app. Every page is static: no database, CMS, forms or accounts.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run before every push)
npm run lint
```

## Where things live

| To change | Edit |
|---|---|
| Name, availability, email, intro, contact note, degree | `content/site.ts` |
| ISECOM, Big Bus Tours, education, languages, tools table | `content/experience.ts` |
| Projects on the homepage and `/work` | `content/projects.ts` |
| The Snapstore case study | `content/case-studies/snapstore.ts` |
| CV files and their descriptions | `public/cv/` and `content/cv.ts` |
| Work-type labels (Client work, Lab assessment, ...) | `content/work-types.ts` |
| Colours, type scale, layout | `app/globals.css` (tokens at the top) |

Components in `components/` contain no copy, so text changes never need component changes.
Content strings support `inline code` and `[link text](/path)`.

## Replacing a CV

1. Export the PDF **without your phone number or other personal details**.
2. Save it over the matching file in `public/cv/`:
   - `salahudeen-matine-cv.pdf`: main CV (homepage, footer and `/cv`)
   - `salahudeen-matine-cv-osint.pdf`: investigations version (optional, `/cv` only)
   - `salahudeen-matine-cv-technical.pdf`: technical security version (optional, `/cv` only)
3. Build and push. A version only appears on the site when its file exists, so there are never dead links.
   With no main CV present, the site offers "Request my CV by email" instead.

## Adding a project

**Short entry** (on `/work`, optionally on the homepage): add an object to `projects` in `content/projects.ts`.
Set `type` honestly, list what it does *not* show in `limits`, and set `onHome: true` to feature it.
Only add `links` to things that exist and are public.

**Full case study** (`/work/<slug>`):
1. Create `content/case-studies/<slug>.ts` following `snapstore.ts` (sections made of `p`, `list`, `code`, `figure` blocks;
   any block can carry a margin `note`, with `tone: 'limit'` for what the evidence doesn't prove).
2. Register it in `content/case-studies/index.ts`.
3. Set `caseStudy: true` and add a "Read the case study" link on the project in `content/projects.ts`.

### Evidence images

- Put screenshots next to the case study content (e.g. `content/work/<slug>/`) and import them.
- **Crop, never splice.** Removing lines from the middle of a screenshot stops it being evidence.
- Highlights are bands given as percentages of the image height (`{ top, height }`).
- Strip metadata before committing: `exiftool -all= file.png` (or re-save through an image editor).
- Never commit client material, leaked data, real identifiers or secrets.

## Deploying (keeps https://salahudeenmatine.vercel.app)

Vercel builds every pushed branch as a separate preview deployment and only updates the live site from `main`.

1. **Push the branch:** `git push -u origin redesign`
2. **Open the preview:** Vercel dashboard > this project > Deployments > the `redesign` build
   (also linked from the commit's status check on GitHub). Review it on a phone and a laptop.
3. **Add the CV** to `public/cv/`, then `git add public/cv && git commit -m "Add CV" && git push`.
4. **Go live:** on GitHub, open a pull request from `redesign` into `main` and merge it.
   Vercel then deploys production to the same address. **Nothing changes on the live site before this step.**
5. **Refresh link previews:** paste the URL into https://www.linkedin.com/post-inspector/ to clear LinkedIn's cached preview.

**Rolling back:** Vercel dashboard > Deployments > pick the previous production deployment > "Instant Rollback",
or `git revert` the merge commit and push.

The old design stays recoverable in git history (`main` before the merge).

## Notes

- Fonts are self-hosted from `app/fonts/` (SIL Open Font Licence, licences alongside), so builds don't call Google Fonts.
  `assets/og/` holds `.woff` copies for the social preview image, which can't read `.woff2`.
- `/cv.pdf` (the old CV link) redirects to `/cv`. See `next.config.ts`.
- Social preview image: `app/opengraph-image.tsx`. Icons: `app/icon.svg`, `app/apple-icon.png`, `app/favicon.ico`.
