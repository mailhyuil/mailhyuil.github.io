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
CONSTRAINT 제약조건이름
FOREIGN KEY (필드이름)
REFERENCES 테이블이름 (필드이름)
```
