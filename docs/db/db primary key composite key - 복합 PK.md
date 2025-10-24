# db primary key composite key - 복합 PK

> 복합 PK는 두 개 이상의 컬럼을 PK로 사용하는 것을 말합니다.
>
> > 복합 PK의 순서가 성능에 크게 영향을 미칩니다.

```prisma
// postgres
CREATE TABLE course_grades (
    quarter_id INTEGER,
    course_id TEXT,
    student_id INTEGER,
    grade INTEGER,
    PRIMARY KEY(quarter_id, course_id, student_id)
);
// prisma
@@id([id, name])
```
