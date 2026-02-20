# supabase cli

## install

```sh
npm install -g supabase

npx supabase login


supabase init
supabase start

# local URL 확인
supabase status

# 새로운 마이그레이션 생성
supabase migration new init_schema

# local 데이터베이스에 적용
supabase db reset

# remote에 반영
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```
