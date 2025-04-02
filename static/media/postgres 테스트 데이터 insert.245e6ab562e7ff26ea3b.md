# postgres 테스트 데이터 insert

```sql
-- table 생성
create table grades(id serial primary key, score int not null);
-- 1000만개의 row insert
insert into grades(score) select floor(random()*100) from generate_series (0, 10000000);
-- index 생성
create index grades_index on grades(score);
-- 확인
\d grades;
```
