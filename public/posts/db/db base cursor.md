# db base cursor

> 대용량 데이터를 한번에 가져오지 않고, 일정량씩 가져오는 방법
>
> > 메모리에 다 올리면 메모리 부족으로 서버가 죽을 수 있음
> >
> > > 스트리밍 방식으로 데이터를 가져올 수 있다.

```sql
declare c cursor for select id from users where age between 20 and 30;

fetch c; -- 첫번째 데이터
fetch c; -- 두번째 데이터
fetch c; -- 세번째 데이터
fetch c; -- 네번째 데이터
fetch c; -- 다섯번째 데이터

fetch last c; -- 마지막 데이터

close c; -- cursor 닫기
```
