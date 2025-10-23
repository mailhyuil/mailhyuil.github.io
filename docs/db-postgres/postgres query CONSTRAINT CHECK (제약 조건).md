# postgres CONSTRAINT (제약 조건)

## PRIMARY KEY

```sql
CONSTRAINT constraint_name PRIMARY KEY(record);
```

## FOREIGN KEY

```sql
CONSTRAINT constraint_name FOREIGN KEY (record) REFERENCES table_name (record);
```

## UNIQUE

```sql
CONSTRAINT constraint_name UNIQUE (record1, record2);
```

## NOT NULL

```sql
CONSTRAINT constraint_name NOT NULL
```

## CHECK

> field의 값이 조건에 충족하는지 체크하기 위한 제약

```sql
CONSTRAINT constraint_name CHECK (record < 10)
```

## CASCADE

```sql
-- DELETE 시, 참조하는 모든 테이블의 레코드를 삭제
CONSTRAINT constraint_name FOREIGN KEY (record) REFERENCES table_name (record) ON DELETE CASCADE;
-- UPDATE 시, 참조하는 모든 테이블의 레코드를 수정
CONSTRAINT constraint_name FOREIGN KEY (record) REFERENCES table_name (record) ON UPDATE CASCADE;
```

## 나중에 추가하기

```sql
ALTER TABLE [table_name] ADD CONSTRAINT ...
```
