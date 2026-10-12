// -----------------------------------------------------------------------------
// Photo wall.
//
// To add a photo: shrink it (`shrink-photos -i <file>`), drop it in
// src/photos/, and it appears on the wall automatically. Adding a caption
// below is optional — a photo with no entry still renders, it just shows up
// without words under it.
//
// Ordering comes from the date in the filename, newest first. Two shapes work:
//
//   2026-08-04-ai4-vegas.jpg        the convention: name it yourself
//   IMG_20260804_074826358_HDR.jpg  straight off a phone, no renaming needed
//
// Anything with no recognizable date sorts to the end.
// -----------------------------------------------------------------------------

import type { ImageMetadata } from 'astro';

/** A caption is either the text itself, or text plus separate alt text. */
type CaptionEntry = string | { caption: string; alt?: string };

/**
 * Captions keyed by filename without its extension.
 *
 * Pass a plain string for the common case. Pass an object when the alt text
 * should differ from the caption — captions are read by everyone, alt text is
 * read by people who can't see the photo, so a caption like "Year three" needs
 * an `alt` that actually describes the scene.
 */
export const CAPTIONS: Record<string, CaptionEntry> = {
  IMG_20260804_074826358_HDR: {
    caption: 'Ai4 2026. Third year running, same crew.',
    alt: 'Three people posing beside giant white Ai4 letters under an "Ai4 2026" arch.',
  },
  IMG_20250811_073054874_HDR: {
    caption: 'Ai4 2025 in Las Vegas.',
    alt: 'Three people standing in front of a "Welcome to Ai4 2025" entrance display.',
  },
  PXL_20240814_142500297: {
    caption: 'Ai4 2024, where this became an annual thing.',
    alt: 'Three people posing with oversized Ai4 letters in a hotel lobby.',
  },
};

export interface Photo {
  /** Filename without extension. This is the key used in CAPTIONS. */
  id: string;
  /** Optimizable image, ready to hand to <Image> or getImage(). */
  src: ImageMetadata;
  /** Text shown under the photo. Undefined when there's no CAPTIONS entry. */
  caption?: string;
  /** Alt text. Empty string marks the photo decorative when nothing describes it. */
  alt: string;
  /** Parsed from the filename; undefined when the name carries no date. */
  date?: Date;
}

// Eagerly imported so image metadata (dimensions, format) is available at build
// time — <Image> needs it to emit width/height and avoid layout shift.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../photos/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,avif}',
  { eager: true },
);

/** Matches a YYYY-MM-DD prefix or a camera-style YYYYMMDD run. */
const DATE_RE = /(?:19|20)\d{2}-?\d{2}-?\d{2}/g;

function dateFromName(name: string): Date | undefined {
  for (const match of name.match(DATE_RE) ?? []) {
    const digits = match.replace(/-/g, '');
    const year = Number(digits.slice(0, 4));
    const month = Number(digits.slice(4, 6));
    const day = Number(digits.slice(6, 8));
    const date = new Date(Date.UTC(year, month - 1, day));
    // Round-trip check rejects near-misses like 20261301 or 20260231, which the
    // regex happily matches but Date silently rolls over into the next month.
    if (date.getUTCMonth() === month - 1 && date.getUTCDate() === day) {
      return date;
    }
  }
  return undefined;
}

/** Camera-generated filename tokens; none of these mean anything to a reader. */
const NOISE =
  /^(img|pxl|dsc|dscn|dji|gopro|mvimg|vid|photo|image|screenshot|pano|hdr|edit|copy|final|raw|burst|night|portrait|orig)$/i;

/**
 * Turn a filename into something human, or return '' if there's nothing human
 * left. "2026-08-04-ai4-vegas" becomes "Ai4 vegas"; "IMG_20260804_074826358_HDR"
 * becomes '' rather than "073054874 HDR", because digit soup is worse than
 * silence for a screen reader.
 */
function prettify(name: string): string {
  const words = name
    .replace(DATE_RE, ' ')
    .replace(/[-_]+/g, ' ')
    .split(/\s+/)
    // Keep anything containing a letter, so alphanumerics like "ai4" or "5k"
    // survive; drop bare digit runs (camera serials) and known camera tokens.
    .filter((word) => /[a-z]/i.test(word) && !NOISE.test(word));

  if (words.length === 0) return '';
  const text = words.join(' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Every photo in src/photos/, newest first, undated ones last. */
export const PHOTOS: Photo[] = Object.entries(files)
  .map(([path, module]) => {
    const id = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    const entry = CAPTIONS[id];
    const caption = typeof entry === 'string' ? entry : entry?.caption;
    const explicitAlt = typeof entry === 'string' ? undefined : entry?.alt;

    return {
      id,
      src: module.default,
      caption,
      // Prefer explicit alt, then the caption, then whatever the filename can
      // offer. '' is the honest last resort: it marks the image decorative
      // rather than making a screen reader announce a camera serial number.
      alt: explicitAlt ?? caption ?? prettify(id),
      date: dateFromName(id),
    };
  })
  .sort((a, b) => {
    if (a.date && b.date) return b.date.getTime() - a.date.getTime();
    if (a.date) return -1;
    if (b.date) return 1;
    return a.id.localeCompare(b.id);
  });

// Nudge, not a failure: an uncaptioned photo still publishes, but it's almost
// always an oversight rather than a choice.
const uncaptioned = PHOTOS.filter((photo) => !photo.caption).map((photo) => photo.id);
if (uncaptioned.length > 0) {
  console.warn(
    `[photos] ${uncaptioned.length} photo(s) have no caption in src/data/photos.ts: ` +
      uncaptioned.join(', '),
  );
}
