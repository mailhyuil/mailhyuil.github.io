# postgres constraint check

> field의 값이 조건에 충족하는지 체크하기 위한 제약

```sql
CONSTRAINT check_not_less_than_ten CHECK (field_name < 10)
```
