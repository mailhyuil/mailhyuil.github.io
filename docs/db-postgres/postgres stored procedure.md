# postgres stored procedure

> 재사용이 가능한 쿼리문의 집합
>
> > 보안을 강화할 수 있다.

```sql
CREATE PROCEDURE 프로시저명 (변수명1 데이터타입, 변수명2 데이터타입)
AS
$$
DECLARE
	변수명 데이터타입;
BEGIN
	SELECT * FROM 테이블 WHERE 필드명 = 변수명;
END;
$$
```
