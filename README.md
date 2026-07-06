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
- `src/data/projects.ts` — the Projects section
- `src/data/resume.ts` — experience, skills, education
- `src/components/sections/About.astro` — hero bio text
- `public/resume.pdf` — the downloadable resume (replace the placeholder)

### Adding a blog post

Drop a Markdown file into `src/content/blog/` with frontmatter:

```markdown
---
title: 'My post title'
description: 'One-line summary for the listing and link previews.'
date: 2026-07-01
---

Your content...
```

It appears on the blog list automatically, and on the home page if it's one of
the three most recent. Set `draft: true` to hide a work-in-progress post.

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
