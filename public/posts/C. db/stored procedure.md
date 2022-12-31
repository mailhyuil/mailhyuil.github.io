# Stored Procedure

> 저장 프로시저는 하나 이상으로 구성된 쿼리문의 집합
>
> > 재사용이 가능
> >
> > > SQL Server의 성능 향상
> > >
> > > > 보안을 강화할 수 있다.

## 기본 문법

> CREATE PROCEDURE or CREATE PROC
>
> > EXECUTE or EXEC
> >
> > > AS 쿼리문 한개
> > > BEGIN 쿼리문 여러개 END

### 변수가 1개일 시

```sql
CREATE PROCEDURE 프로시저명
	@변수명 NVARCHAR(10)
AS
	SELECT * FROM 테이블 WHERE 필드명 = @변수명;

GO

EXEC 프로시저명 '변수';
```

### 변수가 2개일 시

```sql
CREATE PROCEDURE 프로시저명
	@변수명1 NVARCHAR(2),
	@변수명2 INT
AS
	SELECT * FROM 테이블 WHERE 필드명1 LIKE @변수명1+'%' AND 필드명2 > @변수명2;
GO

EXEC 프로시저명 '변수1','변수2';
```
