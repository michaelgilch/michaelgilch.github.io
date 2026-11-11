import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every post and project is a folder holding an index.md plus its images.

// Blog posts: src/content/blog/<folder>/index.md, image alongside as cover.png.
// Published posts use a `YYYY-MM-DD-` folder prefix; drafts have no date in the
// folder name. The prefix is stripped from the URL, so
// 2026-07-07-stop-overthinking/ publishes at /blog/stop-overthinking/.
const blog = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/blog',
    generateId: ({ entry }) =>
      entry.replace(/\/index\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      // Optional list thumbnail, e.g. `thumbnail: ./cover.png` (relative to
      // index.md). Posts without one render text-only.
      thumbnail: image().optional(),
      // Set `draft: true` to keep a post out of listings while you work on it.
      draft: z.boolean().optional().default(false),
    }),
});

// Projects: src/content/projects/<slug>/index.md (frontmatter only for now),
// image alongside, e.g. `image: ./image.png`. Shown sorted by `order`.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      /** Short tech tags, e.g. ['TypeScript', 'Postgres']. */
      tech: z.array(z.string()),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      /** Square-ish logo/icon; shown at 64-128px, so icons beat screenshots. */
      image: image().optional(),
      order: z.number(),
    }),
});

export const collections = { blog, projects };
