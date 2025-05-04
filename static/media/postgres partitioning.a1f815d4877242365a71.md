# postgres partitioning

```sql
-- table 생성
create table grades(id serial primary key, score int not null);
-- 1000만개의 row insert
insert into grades(score) select floor(random()*100) from generate_series (0, 10000000);
-- index 생성
create index grades_index on grades(score);
-- 확인
\d grades;
-- partitioning
create table grades_parts (id serial not null, g int not null) partition by range(g);
create table g0035 (like grades_parts including indexes);
create table g3560 (like grades_parts including indexes);
create table g6080 (like grades_parts including indexes);
create table g80100 (like grades_parts including indexes);
alter table grades_parts attach partition g0035 for values from (0) to (35);
alter table grades_parts attach partition g3560 for values from (35) to (60);
alter table grades_parts attach partition g6080 for values from (60) to (80);
alter table grades_parts attach partition g80100 for values from (80) to (100);
-- data insert
insert into grades_parts select * from grades_org;
-- partition index 생성
create index grades_parts_index on grades_parts(g);
-- 확인
explain analyze select * from grades_parts where g = 35; -- g0035만 조회
```
