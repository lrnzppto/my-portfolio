# Lorenz Pepito · Portfolio

Live: https://lorenzpepito.vercel.app

Static site built with [Astro](https://astro.build), hosted on Vercel, with Supabase for contact inquiries and the guestbook. Spec and plan live in `docs/`.

## Update content (no layout code needed)

| What | Where |
|---|---|
| Name, contact address, booking link, social links | `src/site.config.ts` |
| A project / case study | one Markdown file in `src/content/projects/` |
| A service | one Markdown file in `src/content/services/` |
| FAQ | `src/content/faq.json` |
| Testimonials | `src/content/testimonials.json` |

### Add a case study

1. Copy `src/content/projects/don-juan-dancers.md` to a new file. The file name becomes the URL (`/work/<file-name>/`).
2. Fill in the fields. `categories` uses the service file names (for example `video-editing`).
3. Put images or poster frames in `public/work/<file-name>/` and reference them as `/work/<file-name>/image.jpg`.
4. `featured: true` shows it on the home page. `draft: true` hides it everywhere. `anonymized: true` hides the client name (NDA work).
5. Commit to `main`. Vercel rebuilds in under a minute. If a required field is missing, the build fails and the live site stays on the last good version.

Testimonials only show when `permission` is `true`. FAQ items with `draft: true` stay hidden.

## Inquiries

Contact form submissions are stored in the Supabase table `inquiries`. Read and export them in Supabase → Table Editor. Visitors can submit but never read them.

## Database

SQL for every table and policy is in `supabase/migrations/`. Run new files in Supabase → SQL Editor.

## Secrets

- Only the Supabase **publishable** key is in this repo. It is meant to be public; Row Level Security protects the data.
- Never commit `.env` files, the Supabase secret key, or any API key. Store them in Vercel → Settings → Environment Variables or Supabase → Edge Function secrets. `.gitignore` blocks the usual secret files.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```
