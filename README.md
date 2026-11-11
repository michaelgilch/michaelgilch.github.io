# michaelgilchrist.dev

Personal site for Michael Gilchrist — a single-page portfolio (About, Projects,
Blog, Resume, Contact) plus a Markdown blog. Built with [Astro](https://astro.build)
and deployed to GitHub Pages.

## Develop

```sh
npm install      # once
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # serve the built site locally
```

## Editing content

Most copy lives in a few files so you rarely touch components:

- `src/consts.ts` — site title, tagline, email, nav, social links
- `src/data/resume.ts` — experience, skills, education
- `src/components/sections/About.astro` — hero bio text
- `src/content/site/headshot.jpeg` — the hero photo
- `public/resume.pdf` — the downloadable resume (replace the placeholder).
  Stays in `public/` so it keeps a stable `/resume.pdf` URL.

Posts and projects each live in their own folder under `src/content/`, with
their images next to them:

```
src/content/
  blog/
    2026-07-03-the-ai-mindset-shift/   published: dated folder
      index.md
      cover.png
    keep-the-decisions/                draft: no date in the folder name
      index.md
  projects/
    wspr/
      index.md
      image.png
```

### Adding a blog post

Create `src/content/blog/<slug>/index.md`:

```markdown
---
title: 'My post title'
description: 'One-line summary for the listing and link previews.'
date: 2026-07-01
thumbnail: ./cover.png   # optional, image in the same folder
draft: true
---

Your content...
```

While it's a draft, leave the date off the folder name. To publish, remove
`draft: true`, set `date`, and rename the folder to `YYYY-MM-DD-<slug>`. The
date prefix is dropped from the URL, so it publishes at `/blog/<slug>/`. It
appears on the blog list automatically, and on the home page if it's one of the
three most recent.

### Adding a project

Create `src/content/projects/<slug>/index.md`:

```markdown
---
name: 'my-project'
description: 'One or two sentences.'
tech: ['Python', 'Postgres']
repo: 'https://github.com/michaelgilch/my-project'   # optional
demo: 'https://example.com'                          # optional
image: ./image.png                                   # optional, square-ish icon
order: 3                                             # position on the page
---
```

A missing image or a misspelled field fails the build with a clear error.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. First-time setup (in the repo on GitHub):

1. **Settings → Pages → Source:** GitHub Actions.
2. **Settings → Pages → Custom domain:** `michaelgilchrist.dev`, then enable
   **Enforce HTTPS** once the certificate is issued.
3. DNS at your registrar:
   - Apex `@` A records: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - Apex `@` AAAA records: `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` CNAME → `michaelgilch.github.io`

The domain is pinned via `public/CNAME`, so it survives every deploy.
