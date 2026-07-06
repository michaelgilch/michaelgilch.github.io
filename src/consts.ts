// -----------------------------------------------------------------------------
// Central site content. Edit these values to update the site — most placeholder
// copy lives here so you rarely have to touch the components themselves.
// -----------------------------------------------------------------------------

export const SITE = {
  /** Shown in the browser tab, meta tags, and header wordmark. */
  title: 'Michael Gilchrist',

  /** Default meta description for SEO / link previews. */
  description:
    'Michael Gilchrist: software engineer, AI enthusiast, and host of the 8minuteAI podcast. Closing the gap between the technical world and everyday people.',
  
  /** Canonical origin. Keep in sync with `site` in astro.config.mjs. */
  url: 'https://michaelgilchrist.dev',
  
  /** Contact email used by the Contact section and footer. */
  email: 'michael@8minute.ai',
  
  /** Short tagline under your name in the hero. */
  tagline: 'Software engineer & AI educator',
} as const;

export const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const PODCAST = {
  name: '8minuteAI',
  url: 'https://8minute.ai',
} as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/michaelgilch' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelgilchrist' },
  { label: 'Email', href: `mailto:michael@8minute.ai` },
] as const;
