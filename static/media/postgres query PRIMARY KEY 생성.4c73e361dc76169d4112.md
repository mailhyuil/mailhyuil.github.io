# postgres primary key

## auto_increment

```sql
id bigint GENERATE ALWAYS AS IDENTITY PRIMARY KEY
```

## uuid

```sql
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
```
