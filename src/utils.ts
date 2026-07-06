import { getCollection, type CollectionEntry } from 'astro:content';

/** Format a post date consistently across the site, e.g. "Jun 20, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * All published (non-draft) blog posts, newest first.
 * Central helper so the teaser, list page, and any future feed stay in sync.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
