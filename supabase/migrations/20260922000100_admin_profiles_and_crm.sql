-- ADR-0008: Admin profiles, authentication linkage and authorized lead consultation.
begin;

-- Tabela de perfis administrativos em schema privado
create table if not exists n8flow_private.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  role text not null check (role in ('admin', 'commercial')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table n8flow_private.profiles enable row level security;
revoke all on table n8flow_private.profiles from public, anon, authenticated, service_role;

-- Função auxiliar interna para verificar se o usuário autenticado atual é um admin ativo
create or replace function n8flow_private.is_active_admin() returns boolean
language plpgsql security definer set search_path = '' as $$
begin
  return exists (
    select 1
    from n8flow_private.profiles
    where id = auth.uid()
      and role = 'admin'
      and active = true
  );
end;
$$;

-- RPC para consultar perfil do usuário autenticado no painel
create or replace function public.n8flow_get_my_profile() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  v_profile jsonb;
begin
  if auth.uid() is null then
    return null;
  end if;

  select jsonb_build_object(
    'id', id,
    'email', email,
    'role', role,
    'active', active
  )
  into v_profile
  from n8flow_private.profiles
  where id = auth.uid();

  return v_profile;
end;
$$;

-- RPC para listagem autorizada de leads (acesso exclusivo a admin ativo)
create or replace function public.n8flow_get_admin_leads(
  p_limit integer default 50,
  p_offset integer default 0
) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  v_leads jsonb;
  v_total integer;
begin
  if not n8flow_private.is_active_admin() then
    raise exception 'Unauthorized' using errcode = '42501';
  end if;

  select count(*) into v_total from n8flow_private.leads;

  select coalesce(jsonb_agg(
    jsonb_build_object(
      'id', l.id,
      'requestId', l.request_id,
      'createdAt', l.created_at,
      'name', l.payload->>'name',
      'email', l.payload->>'email',
      'company', l.payload->>'company',
      'phone', l.payload->>'phone',
      'interest', l.payload->>'interest',
      'message', l.payload->>'message',
      'attribution', l.payload->'attribution'
    ) order by l.created_at desc
  ), '[]'::jsonb)
  into v_leads
  from (
    select * from n8flow_private.leads
    order by created_at desc
    limit least(p_limit, 100)
    offset greatest(p_offset, 0)
  ) l;

  return jsonb_build_object(
    'total', v_total,
    'leads', v_leads
  );
end;
$$;

-- RPC para buscar detalhe de um lead por ID (acesso exclusivo a admin ativo)
create or replace function public.n8flow_get_admin_lead_by_id(p_lead_id uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  v_lead jsonb;
begin
  if not n8flow_private.is_active_admin() then
    raise exception 'Unauthorized' using errcode = '42501';
  end if;

  select jsonb_build_object(
    'id', id,
    'requestId', request_id,
    'createdAt', created_at,
    'payload', payload
  )
  into v_lead
  from n8flow_private.leads
  where id = p_lead_id;

  if v_lead is null then
    return null;
  end if;

  return v_lead;
end;
$$;

-- Permissões das RPCs
revoke all on function public.n8flow_get_my_profile() from public, anon, service_role;
grant execute on function public.n8flow_get_my_profile() to authenticated;

revoke all on function public.n8flow_get_admin_leads(integer, integer) from public, anon, service_role;
grant execute on function public.n8flow_get_admin_leads(integer, integer) to authenticated;

revoke all on function public.n8flow_get_admin_lead_by_id(uuid) from public, anon, service_role;
grant execute on function public.n8flow_get_admin_lead_by_id(uuid) to authenticated;

commit;
