// Site-wide settings. Edit these values; no layout code changes needed.
export const site = {
  name: 'Lorenz Pepito',
  title: 'Lorenz Pepito · Developer & Creative Specialist',
  description:
    'Lorenz Pepito: a Computer Engineer turned creative specialist. Websites, video, design and social media for personal brands, coaches, creators and small businesses.',
  tagline: 'A creative who can actually build.',
  url: 'https://lorenzpepito.vercel.app',
  // Public contact address shown in the footer and on the Contact page.
  // Leave empty to hide it.
  email: '',
  bookingUrl: 'https://calendly.com/lrnzppto/book-a-discovery-call',
  replyTime: 'within one business day',
  location: 'Philippines (UTC+8)',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lorenz-pepito-5a8895252/' },
    { label: 'Instagram', url: 'https://www.instagram.com/lrnzppto/' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@lrnzppto' },
  ],
  // Supabase: the publishable key is designed to be public.
  // Data access is controlled by Row Level Security (see supabase/migrations).
  // Never put the Supabase SECRET key in this file or anywhere in the repo.
  supabase: {
    url: 'https://ptcnknvuylqmyzoehlta.supabase.co',
    publishableKey: 'sb_publishable_s_OVZancbgVJ_Lsu2twdow_vWplWrrq',
  },
};
