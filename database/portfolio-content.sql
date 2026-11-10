-- À exécuter une seule fois dans l'éditeur SQL du projet Supabase.
create table if not exists public.portfolio_content (
  id smallint primary key check (id = 1),
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;
revoke all on public.portfolio_content from anon, authenticated;
grant select, insert, update on public.portfolio_content to service_role;

-- Les médias publiés sur le portfolio doivent être accessibles en lecture.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-media',
  'portfolio-media',
  true,
  3145728,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'application/pdf']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
