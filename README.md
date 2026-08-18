# abhisek-mishra

Personal portfolio for Abhisek Mishra — Lead Software Engineer, Emirates NBD. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Content

All résumé-derived content (experience, skills, projects, education) lives in [`lib/data.ts`](lib/data.ts) — edit that one file to update the site. The résumé PDF served at `/resume.pdf` lives in [`public/resume.pdf`](public/resume.pdf).

## Blog

Blog posts are MDX files in [`content/posts/`](content/posts). To add one, create `content/posts/my-post.mdx` with frontmatter:

```mdx
---
title: "Post title"
date: "2026-08-18"
summary: "One-line summary shown on the blog index."
---

Post content in Markdown/MDX goes here.
```

The `/blog` index and `/blog/[slug]` pages pick it up automatically — no other code changes needed.

## Deploying to Vercel

The project name is `abhisek-mishra`, so Vercel's free auto-generated hostname will be `abhisek-mishra.vercel.app` (unless that project name is already taken on your Vercel account, in which case Vercel will append a suffix).

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts, confirm project name "abhisek-mishra"
vercel --prod # promote to production
```

**Option B — GitHub + Vercel dashboard:**

1. Push this repo to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset should auto-detect as Next.js. Keep the project name as `abhisek-mishra`.
4. Deploy.

No environment variables or external services are required — the site is fully static/SSG.
