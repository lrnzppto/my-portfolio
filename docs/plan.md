# Implementation Plan: Lorenz Pepito Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-11-20 | **Spec**: [specs.md](./specs.md)

## Summary

Replace the single-file `index.html` with a multi-page static site that sells one idea: a creative who can actually build. Pages are generated at build time from content files, so Lorenz adds projects, services, FAQ items and testimonials by editing content, never layout code. Supabase stores contact inquiries and the guestbook. Calendly handles call booking.

## Technical Context

| Area | Choice | Why |
|---|---|---|
| Framework | **Astro 5**, static output | Ships plain HTML with near-zero JavaScript, so it meets the 2.5 s mobile target (NFR-001). Every page and case study is real HTML with its own title and description, which social crawlers and search engines need (FR-031). Content collections give schema-checked Markdown and JSON content (FR-029). |
| Content | `src/content/` (Markdown + JSON), `src/site.config.ts` | Editable in GitHub's web editor or locally. A schema check fails the build on a missing required field instead of publishing a broken page; the live site keeps the last good version. |
| Hosting | **Vercel** (Git integration, `vercel.json`) | Already connected. Every push to `main` deploys; every branch gets a preview URL. |
| Data | **Supabase** (Postgres + REST, publishable key only) | Guestbook already lives here. New `inquiries` table stores every lead independently of any notification (FR-022, NFR-004). |
| Security | Row Level Security on every table | The browser only holds the publishable key. Visitors may insert inquiries but never read them; guestbook is read + insert only. |
| Booking | **Calendly** (existing discovery-call link) | Already set up. Shows slots in the visitor's time zone and sends confirmations (FR-024). |
| Styling | Hand-written CSS, existing brand tokens | Keeps the current identity (Space Grotesk + Inter, `#e8572a` accent) without a CSS framework. |

**Constraints**: zero secrets in the repo; no paid services; Lorenz maintains it alone.

## Project Structure

```
my-portfolio/
├── docs/                    # spec + plan (not deployed)
├── supabase/migrations/     # SQL for every table and policy (run in Supabase SQL Editor)
├── public/                  # favicon, robots.txt, case-study media
├── src/
│   ├── site.config.ts       # profile, links, booking URL, Supabase URL + publishable key
│   ├── content.config.ts    # content schemas
│   ├── content/
│   │   ├── projects/*.md    # one file per case study (draft: true hides it)
│   │   ├── services/*.md    # one file per service
│   │   ├── faq.json
│   │   └── testimonials.json
│   ├── lib/content.ts       # queries: published projects, ordered services, etc.
│   ├── layouts/Base.astro   # <head>, SEO tags, header, footer
│   ├── components/          # ProjectCard, CtaBand, Guestbook
│   ├── styles/global.css
│   └── pages/               # index, work/, work/[slug], services, about, contact, privacy, 404, sitemap.xml
├── astro.config.mjs
├── vercel.json
└── package.json
```

## Data Model (Supabase)

- `guestbook` (exists): `id`, `name`, `message`, `created_at`. RLS: anyone can read and add within length limits; no update or delete.
- `inquiries` (new): `id`, `name`, `email`, `business`, `services[]`, `description`, `budget`, `timeline`, `source`, `time_zone`, `status` (default `new`), `created_at`. RLS: anyone can insert valid rows; **nobody can read via the API**; Lorenz reads and exports them in the Supabase dashboard (FR-030). Database checks enforce required fields, lengths, email shape and allowed service/budget/timeline values.

## Requirement Mapping and Phasing

### Phase 1: this implementation

| Requirement | How |
|---|---|
| FR-001 to FR-004 | Pages listed above; sticky header with "Book a call"; footer with contact + profiles |
| FR-005, FR-006 | Home: hero, services overview, featured projects, why-me, testimonials (hidden when empty), closing CTA |
| FR-007 to FR-013 | Work page with category filter (empty categories hidden); case study template with all fields, optional metrics, anonymized mode, inline video (`playsinline`, poster, `preload="none"`, never autoplay), related projects and CTA |
| FR-014, FR-015, FR-017 | Services page from content; process steps; automation labeled "in development" |
| FR-016 | FAQ from `faq.json`; entries marked `draft` stay hidden until confirmed |
| FR-018, FR-019 | About: story, credentials incl. AZ-104/AZ-204, tools, dance paragraph, guestbook (FR-034) |
| FR-020, FR-021, FR-025 | Contact form → Supabase `inquiries`; inline validation, data kept on error; honeypot + minimum fill time; database constraints |
| FR-024 | Calendly link in the header, every CTA band and Contact |
| FR-027, FR-028 | Testimonials collection, rendered only with `permission: true` |
| FR-031 (partial), FR-032 (partial) | Per-page title, description, canonical URL, Open Graph + Twitter tags, sitemap, robots.txt |
| NFR-002 | Semantic landmarks, skip link, labels, inline error text, focus styles, reduced motion |
| NFR-007 | Privacy page |

### Phase 2: needs Lorenz (accounts, purchases or content)

| Requirement | What is needed |
|---|---|
| FR-026 public email | Set `email` in `src/site.config.ts` (shown in footer, Contact and Privacy once set). |
| FR-022, FR-023 notifications | A Resend (or similar) account and API key. The key goes in Supabase/Vercel environment settings, **never in the repo**. Then a database webhook + small function emails Lorenz each inquiry and the visitor a confirmation. Until then, inquiries are stored and visible in Supabase. |
| FR-031 share image | A branded 1200×630 share image (needs headshot/brand), added as `og:image`. |
| FR-033 analytics | Turn on Vercel Web Analytics (free, cookieless) in the Vercel dashboard, then add its script and update the privacy notice. |
| FR-032 custom domain | Point `lorenzpepito.dev` (or another domain) at Vercel; update `site` in `astro.config.mjs`. |
| FR-016, FR-014 details | Confirm FAQ answers (set `draft: false`) and turnaround per service. |
| FR-018 | Professional photo and working-hours overlap with US time zones. |
| SC-005 content | 5+ more complete case studies (6 projects already exist as hidden drafts), testimonials with permission. |

## Secrets Policy

- `.gitignore` excludes `.env*`, `.vercel/`, `node_modules/`, `dist/`, `.astro/`, keys and certificates.
- Only the Supabase **publishable** key is in the code. Security comes from RLS, not from hiding that key.
- Any future secret (Resend key, Supabase secret key) lives only in Vercel or Supabase environment settings.

## Verification

1. Vercel preview deployment of the branch builds green.
2. Every page loads with status 200 and its own title; an unknown URL returns the 404 page.
3. Contact form: a test inquiry appears in Supabase; the API refuses to read inquiries back.
4. Guestbook still reads and writes on the About page.
5. Merge to `main`, production deploys, re-run checks on the live domain.
