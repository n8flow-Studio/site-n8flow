-- Run only in an isolated database after the migration, as its owner.
-- All fixtures are synthetic and rolled back. Any exception fails the test.
begin;
do $$
declare
  v_payload jsonb := '{"name":"Teste SQL","company":"Empresa teste","email":"sql@example.com","phone":"84999999999","interest":"diagnostico","message":"","attribution":{}}';
  v_result jsonb;
  v_key text := 'sql-test-' || gen_random_uuid()::text;
  v_request uuid := gen_random_uuid();
  v_rate text := repeat('a', 64);
  v_count integer;
begin
  if has_function_privilege('anon', 'public.n8flow_capture_lead(text,uuid,jsonb)', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.n8flow_capture_lead(text,uuid,jsonb)', 'EXECUTE') then raise exception 'RPC publicly executable'; end if;
  if has_schema_privilege('anon','n8flow_private','USAGE')
    or has_schema_privilege('authenticated','n8flow_private','USAGE')
    or has_schema_privilege('service_role','n8flow_private','USAGE') then raise exception 'private schema exposed'; end if;
  if not (select relrowsecurity from pg_class where oid = 'n8flow_private.leads'::regclass) then raise exception 'RLS disabled'; end if;
  v_result := public.n8flow_capture_lead(v_key,v_request,v_payload);
  if v_result <> jsonb_build_object('requestId',v_request,'duplicate',false) then raise exception 'invalid first receipt'; end if;
  v_result := public.n8flow_capture_lead(v_key,gen_random_uuid(),v_payload);
  if v_result <> jsonb_build_object('requestId',v_request,'duplicate',true) then raise exception 'duplicate lost original receipt'; end if;
  v_result := public.n8flow_capture_lead(v_key,gen_random_uuid(),v_payload || '{"company":"Changed"}'::jsonb);
  if v_result <> '{"conflict":true}'::jsonb then raise exception 'payload conflict accepted'; end if;
  select count(*) into v_count from n8flow_private.leads where idempotency_key=v_key;
  if v_count <> 1 then raise exception 'duplicate row'; end if;
  for i in 1..5 loop
    v_result := public.n8flow_check_lead_rate(v_rate);
    if v_result->>'allowed' <> 'true' then raise exception 'early rate denial'; end if;
  end loop;
  v_result := public.n8flow_check_lead_rate(v_rate);
  if v_result->>'allowed' <> 'false' then raise exception 'rate bypass'; end if;
end;
$$;
rollback;
