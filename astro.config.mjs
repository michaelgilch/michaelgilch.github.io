// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical URL used for sitemaps, RSS, and absolute links.
  // The custom domain serves at the root, so no `base` path is needed.
  site: 'https://michaelgilchrist.dev',

  markdown: {
    // Syntax-highlight blog code blocks with Shiki's built-in Nord theme so
    // they match the site palette.
    shikiConfig: {
      theme: 'nord',
    },
  },
});
