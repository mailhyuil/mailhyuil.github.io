# postgres foreign key

```sql
CREATE TABLE public."user"(
	id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	username varchar(25) UNIQUE NOT NULL,
	password varchar(125) NOT NULL
	);

CREATE TABLE post(
	id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	title varchar(25),
	content text,
	user_id bigint,
	FOREIGN KEY (user_id) REFERENCES public."user" (id)
);
```

## CONSTRAINT 이름 직접 지정

```sql
CONSTRAINT constraint_name
FOREIGN KEY (field_name)
REFERENCES table_name (field_name)
```
