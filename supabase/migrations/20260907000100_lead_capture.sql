-- ADR-0008: ingestion only. Admin/auth policies require a later approved migration.
begin;
create schema if not exists n8flow_private;
revoke all on schema n8flow_private from public, anon, authenticated, service_role;

create table n8flow_private.leads (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null unique,
  idempotency_key text not null unique check (idempotency_key ~ '^[A-Za-z0-9_-]{16,128}$'),
  payload jsonb not null check (jsonb_typeof(payload) = 'object'),
  created_at timestamptz not null default now(),
  constraint valid_name check (length(payload->>'name') between 1 and 120),
  constraint valid_company check (length(payload->>'company') between 1 and 160),
  constraint valid_email check (length(payload->>'email') between 3 and 254),
  constraint valid_phone check (payload->>'phone' ~ '^\+?[1-9][0-9]{9,14}$'),
  constraint valid_interest check (payload->>'interest' in ('diagnostico','parcerias','institucional')),
  constraint valid_message check (length(payload->>'message') <= 2000)
);
create table n8flow_private.lead_rate_limits (
  client_hash text primary key check (client_hash ~ '^[a-f0-9]{64}$'),
  attempts integer not null,
  expires_at timestamptz not null
);
create index lead_rate_expiry on n8flow_private.lead_rate_limits(expires_at);
alter table n8flow_private.leads enable row level security;
alter table n8flow_private.lead_rate_limits enable row level security;
revoke all on all tables in schema n8flow_private from public, anon, authenticated, service_role;

create function public.n8flow_check_lead_rate(p_client_hash text) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare v_attempts integer; v_expires timestamptz;
begin
  if p_client_hash is null or p_client_hash !~ '^[a-f0-9]{64}$' then raise exception 'invalid rate key'; end if;
  -- Transient counters only: no raw IP and no indefinite expired-row accumulation.
  delete from n8flow_private.lead_rate_limits where expires_at < now();
  insert into n8flow_private.lead_rate_limits(client_hash, attempts, expires_at)
    values(p_client_hash, 1, now() + interval '10 minutes')
    on conflict (client_hash) do update set attempts = least(n8flow_private.lead_rate_limits.attempts + 1, 6)
    returning attempts, expires_at into v_attempts, v_expires;
  return jsonb_build_object('allowed', v_attempts <= 5, 'retryAfterSeconds',
    case when v_attempts <= 5 then 0 else greatest(1, ceil(extract(epoch from v_expires - now()))::integer) end);
end;
$$;

create function public.n8flow_capture_lead(p_key text, p_request_id uuid, p_payload jsonb) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare v_request uuid; v_payload jsonb;
begin
  if p_key is null or p_request_id is null or p_payload is null
    or jsonb_typeof(p_payload) <> 'object'
    or not (p_payload ?& array['name','company','email','phone','interest','message','attribution'])
    or (p_payload - array['name','company','email','phone','interest','message','attribution']) <> '{}'::jsonb
    or jsonb_typeof(p_payload->'attribution') <> 'object'
    or octet_length(p_payload::text) > 16384 then raise exception 'invalid lead payload'; end if;
  if exists (select 1 from jsonb_each(p_payload - 'attribution') as item where jsonb_typeof(item.value) <> 'string') then
    raise exception 'invalid lead fields';
  end if;
  insert into n8flow_private.leads(request_id, idempotency_key, payload)
    values(p_request_id, p_key, p_payload)
    on conflict (idempotency_key) do nothing returning request_id into v_request;
  if v_request is not null then return jsonb_build_object('requestId', v_request, 'duplicate', false); end if;
  -- INSERT waits for a concurrent winner. This subsequent statement sees its commit.
  select request_id, payload into v_request, v_payload from n8flow_private.leads where idempotency_key = p_key;
  if not found then raise exception 'retry capture'; end if;
  if v_payload is distinct from p_payload then return jsonb_build_object('conflict', true); end if;
  return jsonb_build_object('requestId', v_request, 'duplicate', true);
end;
$$;
revoke all on function public.n8flow_check_lead_rate(text) from public, anon, authenticated, service_role;
revoke all on function public.n8flow_capture_lead(text, uuid, jsonb) from public, anon, authenticated, service_role;
grant execute on function public.n8flow_check_lead_rate(text) to service_role;
grant execute on function public.n8flow_capture_lead(text, uuid, jsonb) to service_role;
commit;
