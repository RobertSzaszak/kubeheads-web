# KubeHeads — Website

Marketing site for kubeheads.com. Astro 7, static output, zero client JS.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
npm run check    # typecheck .astro files
```

## Structure

```
src/
  data/site.ts        ← ALL copy lives here. Edit this, not the pages.
  layouts/            ← BaseLayout (head, meta, fonts)
  components/         ← Nav, Footer
  pages/              ← one file per route
  styles/global.css   ← design tokens + primitives
```

Change the pitch by editing `src/data/site.ts`. Pages read from it, so copy edits
never require touching markup.

## Design

Light-default with automatic dark mode via `prefers-color-scheme`. All colours are
CSS custom properties in `global.css` — change `--accent` and the whole site follows.
Fonts are Space Grotesk (headings) + Inter (body) from Google Fonts.

## Going live

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
The launch runbook lives in the private, gitignored `docs/LAUNCH.md`.

## Configuration

Copy `.env.example` to `.env`. Everything is optional and degrades safely:

| Variable | Effect if unset |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Contact form is hidden, mailto link still shown |
| `PUBLIC_CF_BEACON_TOKEN` | No analytics script rendered |
| `PUBLIC_PLAUSIBLE_DOMAIN` | No analytics script rendered |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | No verification meta tag |

No cookie banner: analytics is cookieless, so there is nothing to consent to.
The privacy notice at `/privacy` is required because the form collects personal data.
