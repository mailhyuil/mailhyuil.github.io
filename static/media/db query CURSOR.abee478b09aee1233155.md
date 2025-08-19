# db query CURSOR

> 대용량 데이터를 한번에 가져오지 않고, 일정량씩 가져오는 방법
>
> > 메모리에 다 올리면 메모리 부족으로 서버가 죽을 수 있음
> >
> > > 스트리밍 방식으로 데이터를 가져올 수 있다.

```sql
DECLARE c CURSOR FOR SELECT id FROM users WHERE age BETWEEN 20 AND 30;

FETCH c; -- 첫번째 데이터
FETCH c; -- 두번째 데이터
FETCH c; -- 세번째 데이터
FETCH c; -- 네번째 데이터
FETCH c; -- 다섯번째 데이터

FETCH FIRST c; -- 첫번째 데이터
FETCH LAST c; -- 마지막 데이터
FETCH PRIOR c; -- 이전 데이터
FETCH NEXT c; -- 다음 데이터
```
