# supabase PL/pgSQL

- rpc를 생성하기 위한 함수를 pgSQL로 작성할 수 있다.

## basic

```sql
create or replace function public.my_rpc(
  p_user_id uuid,
  p_amount int
)
returns jsonb
language plpgsql
security definer
as $$
declare
  v_total int;
begin
  v_total := p_amount * 2;

  return jsonb_build_object(
    'user_id', p_user_id,
    'total', v_total
  );
end;
$$;
```

## supabase 전용 함수

```sql
auth.uid() -- 현재 로그인한 사용자의 ID
auth.role() -- 현재 로그인한 사용자의 역할
auth.email() -- 현재 로그인한 사용자의 이메일
auth.jwt() -- 현재 로그인한 사용자의 JWT 토큰
current_setting('request.jwt.claims', true)::json -- 현재 요청의 JWT 토큰에 포함된 클레임
... -- 다른 전용 함수들
```

## supabase

```ts
supabase.rpc("my_rpc", {
  p_user_id: "...",
  p_amount: 10
});
```
