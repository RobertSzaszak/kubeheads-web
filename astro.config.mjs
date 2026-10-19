// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, deployed to GitHub Pages by .github/workflows/deploy.yml.
// See docs/infrastructure.md: the apex A record still points at GoDaddy Website
// Builder and must be repointed before this goes live.
export default defineConfig({
  site: 'https://kubeheads.com',
  // /og is a rendering surface for the social card, not a page worth indexing.
  integrations: [sitemap({ filter: (page) => !page.includes("/og") })],
  build: { inlineStylesheets: 'auto' },
});
