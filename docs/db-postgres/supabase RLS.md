# supabase RLS (Row Level Security)

- 테이블 단위로 데이터에 대한 접근 권한을 제어하는 기능
- RLS 켜져 있으면, policy 없으면 전부 차단
- policy는 OR 조건처럼 누적됨
- using = 읽기 조건 / with check = 쓰기 조건

## schema

```sql
public - 네가 만든 모든 비즈니스 테이블
auth - supabase 내부용 (건들면 안됨)
storage

-- 이외 스키마 (건들 필요 없음)
realtime
graphql_public
...
```

## role

```sql
anon - 비로그인
authenticated - 로그인
service_role - 서버 / Edge Function (service_role은 RLS 무시)
```

## basic

```sql
-- select → using
-- insert → with check
-- update → 둘 다 필요

create policy "Allow read access for all users"
on "public"."User"
as permissive
for select
to public
using (true);
```
