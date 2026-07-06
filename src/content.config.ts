import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live as Markdown in src/content/blog/. Add a post by dropping in a
// new .md file with the frontmatter fields below.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      // Optional list thumbnail, e.g. `thumbnail: ./images/my-post.png`
      // (path relative to the post file). Posts without one render text-only.
      thumbnail: image().optional(),
      // Set `draft: true` to keep a post out of listings while you work on it.
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
