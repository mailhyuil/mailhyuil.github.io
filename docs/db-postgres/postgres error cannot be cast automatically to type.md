# postgres error cannot be cast automatically to type

> postgresql은 자동 형변환이 안된다.
>
> > sql로 직접 수정해줘야함

```sql
ALTER TABLE <tabel_name> ALTER COLUMN <column_name> TYPE <new_data_type>;

ALTER TABLE project ALTER COLUMN time TYPE integer USING time::integer;

ALTER TABLE "Initiative" ALTER COLUMN region TYPE "Region"[] USING ARRAY[region]
```
