-- Contact inquiries (FR-020, FR-022, FR-030).
-- Visitors can INSERT a valid inquiry. Nobody can read, edit or delete inquiries through the public API:
-- there is no select/update/delete policy or grant. Lorenz reads and exports them in the Supabase dashboard.
create table if not exists public.inquiries (
  id          bigint generated always as identity primary key,
  name        text        not null,
  email       text        not null,
  business    text,
  services    text[]      not null,
  description text        not null,
  budget      text,
  timeline    text,
  source      text,
  time_zone   text,
  status      text        not null default 'new',
  created_at  timestamptz not null default now(),
  constraint inquiries_name_length check (char_length(btrim(name)) between 1 and 100),
  constraint inquiries_email_format check (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint inquiries_business_length check (business is null or char_length(business) <= 200),
  constraint inquiries_services_valid check (
    cardinality(services) between 1 and 6
    and services <@ array['web-development','graphic-design','video-editing','podcast-editing','social-media','automation']::text[]
  ),
  constraint inquiries_description_length check (char_length(btrim(description)) between 1 and 5000),
  constraint inquiries_budget_valid check (budget is null or budget in ('under-500','500-1500','1500-5000','5000-plus','not-sure')),
  constraint inquiries_timeline_valid check (timeline is null or timeline in ('asap','1-month','1-3-months','flexible')),
  constraint inquiries_source_length check (source is null or char_length(source) <= 200),
  constraint inquiries_time_zone_length check (time_zone is null or char_length(time_zone) <= 64),
  constraint inquiries_status_valid check (status in ('new','replied','call_booked','proposal_sent','won','lost'))
);

alter table public.inquiries enable row level security;

revoke all on table public.inquiries from anon, authenticated;
-- Column-level grant: visitors cannot set id, status or created_at.
grant insert (name, email, business, services, description, budget, timeline, source, time_zone)
  on table public.inquiries to anon, authenticated;

drop policy if exists "Visitors can submit inquiries" on public.inquiries;
create policy "Visitors can submit inquiries"
  on public.inquiries for insert to anon, authenticated
  with check (status = 'new');

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
