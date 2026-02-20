# supabase trigger

## 트리거 함수 생성

- plpgSQL 함수 생성

```sql
create or replace function public.on_chat_deleted()
returns trigger
language plpgsql
as $$
begin
  -- 여기서 side effect 처리
  -- 예: 로그, 다른 테이블 정리, 외부 webhook 등
  return old;
end;
$$;
```

## 트리거 적용

```sql
create trigger trg_chat_deleted
after delete on public.chats
for each row
execute function public.on_chat_deleted();
```
