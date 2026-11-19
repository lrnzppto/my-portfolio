import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    status: z.enum(['active', 'in-development']).default('active'),
    includes: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    turnaround: z.string().optional(),
  }),
});

const media = z.object({
  type: z.enum(['image', 'video', 'embed']),
  src: z.string(),
  alt: z.string(),
  poster: z.string().optional(),
  caption: z.string().optional(),
  orientation: z.enum(['vertical', 'horizontal', 'square']).default('horizontal'),
});

// Published projects must be complete case studies (FR-008).
// Drafts can be partial so you can start one and finish it later.
const REQUIRED_WHEN_PUBLISHED = ['summary', 'clientType', 'role', 'challenge', 'approach', 'outcome'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().optional(),
      categories: z.array(reference('services')).default([]),
      client: z.string().optional(),
      anonymized: z.boolean().default(false),
      clientType: z.string().optional(),
      role: z.string().optional(),
      tools: z.array(z.string()).default([]),
      challenge: z.string().optional(),
      approach: z.string().optional(),
      outcome: z.string().optional(),
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      media: z.array(media).default([]),
      cover: z.string().optional(),
      liveUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    })
    .superRefine((d, ctx) => {
      if (d.draft) return;
      for (const key of REQUIRED_WHEN_PUBLISHED) {
        if (!d[key]) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: key + ' is required for a published project' });
      }
      if (d.categories.length === 0) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['categories'], message: 'at least one category is required' });
      if (!d.anonymized && !d.client) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['client'], message: 'client is required unless anonymized' });
    }),
});

const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    link: z.string().url().optional(),
    project: z.string().optional(),
    // Only shown when the client explicitly agreed (FR-027).
    permission: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, projects, faq, testimonials };
