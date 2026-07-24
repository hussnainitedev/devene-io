# Devene.io

Astro static site, content-editable via Sanity, deployed on Netlify.

- **Live site:** https://devene-io.netlify.app
- **Netlify project:** https://app.netlify.com/projects/devene-io

## Structure

```
src/pages/        Astro pages (routes) — home, services, people, work, process, blog, contact
src/components/    Nav, Footer
src/layouts/       Base.astro (head, fonts, shared shell)
src/styles/        global.css — full design system, ported 1:1 from the original HTML
src/lib/content.js Fallback content (used until Sanity is connected)
src/lib/data.js     Fetches from Sanity, falls back to content.js if unset/empty
studio/             Sanity Studio — schema + admin UI for editing content
```

The site builds and deploys today using the fallback content in `src/lib/content.js`, so it's live even before Sanity is wired up. Once `SANITY_PROJECT_ID` is set (see below), matching Sanity documents take over automatically — no code changes needed.

## Run locally

```bash
npm install
npm run dev
```

## Connect Sanity (content editing)

1. Create a free account and project at https://www.sanity.io/manage → "Create project". Name it whatever you like (e.g. "devene-io"). Note the **Project ID** shown on the project page. Use dataset name `production` (default).
2. In `studio/`, install and log in:
   ```bash
   cd studio
   npm install
   npx sanity login
   ```
3. Point the studio at your project — either set env vars before running, or edit `studio/sanity.config.ts` directly and replace `'your-project-id'`:
   ```bash
   set SANITY_STUDIO_PROJECT_ID=your-project-id
   set SANITY_STUDIO_DATASET=production
   npm run dev
   ```
   This opens the Studio locally at `http://localhost:3333` with forms for Services, Team Members, Team Groups, Case Studies, Testimonials, FAQ Items, Blog Posts, and Site Settings.
4. Deploy the Studio so you (or teammates) can edit content from anywhere, no local setup required:
   ```bash
   npx sanity deploy
   ```
   Pick a studio hostname (e.g. `devene-io` → `https://devene-io.sanity.studio`). Log in there to add/edit content.
5. Give me (or set directly in Netlify) two values so the live site starts reading from Sanity:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET` (usually `production`)

   In Netlify: **Site configuration → Environment variables**. After adding them, trigger a redeploy (**Deploys → Trigger deploy**).
6. Optional but recommended — auto-rebuild the site whenever content is published:
   - Netlify: **Site configuration → Build & deploy → Build hooks** → create one, copy the URL.
   - Sanity manage dashboard → your project → **API → Webhooks** → add the build hook URL, trigger on "Create / Update / Delete", dataset `production`.

## Forms

The contact and newsletter forms use **Netlify Forms** (already detected on the live deploy — no backend needed). Submissions show up under **Site configuration → Forms** in Netlify, with spam honeypots active.

## Redeploying manually

```bash
npm run build
```
then use the Netlify MCP deploy tool, or `netlify deploy --prod` via the Netlify CLI if you connect this repo to a GitHub remote for continuous deployment instead.
