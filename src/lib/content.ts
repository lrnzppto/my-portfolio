import { getCollection } from 'astro:content';

export async function getServices() {
  const items = await getCollection('services');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function serviceLabels(): Promise<Record<string, string>> {
  const items = await getServices();
  return Object.fromEntries(items.map((s) => [s.id, s.data.title]));
}

export async function getPublishedProjects() {
  const items = await getCollection('projects', ({ data }) => !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFaq() {
  const items = await getCollection('faq', ({ data }) => !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getTestimonials() {
  const items = await getCollection('testimonials', ({ data }) => data.permission && !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}
