-- Guestbook (applied 2026-11-20). Public read; anyone can add a valid entry; nobody can edit or delete via the API.
create table if not exists public.guestbook (
  id         bigint generated always as identity primary key,
  name       text        not null,
  message    text        not null,
  created_at timestamptz not null default now(),
  constraint guestbook_name_length    check (char_length(btrim(name))    between 1 and 60),
  constraint guestbook_message_length check (char_length(btrim(message)) between 1 and 500)
);

alter table public.guestbook enable row level security;

revoke all on table public.guestbook from anon, authenticated;
grant select on table public.guestbook to anon, authenticated;
grant insert (name, message) on table public.guestbook to anon, authenticated;

drop policy if exists "Anyone can read guestbook" on public.guestbook;
create policy "Anyone can read guestbook"
  on public.guestbook for select to anon, authenticated using (true);

drop policy if exists "Anyone can sign guestbook" on public.guestbook;
create policy "Anyone can sign guestbook"
  on public.guestbook for insert to anon, authenticated
  with check (
    char_length(btrim(name)) between 1 and 60
    and char_length(btrim(message)) between 1 and 500
  );

create index if not exists guestbook_created_at_idx on public.guestbook (created_at desc);
