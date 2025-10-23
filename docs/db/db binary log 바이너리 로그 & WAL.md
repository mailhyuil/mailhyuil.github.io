# db binary log 바이너리 로그 (WAL)

> 데이터 변경사항들에 대한 정보를 포함하는 로그 파일의 세트
>
> > 주로 복제(Replication) 및 복구(Recovery)를 목적으로 사용
> >
> > > WAL(Write-Ahead Logging)이라고도 불립니다.
> > >
> > > > DBMS는 쿼리를 바로 디스크에 기록하지 않고, 메모리에 쌓아두었다가 일정량이 쌓이면 디스크에 기록합니다.
> > > >
> > > > 때문에 바이너리 로그를 함께 남기고, 서버가 다운되면 바이너리 로그를 통해 쿼리를 복구하여 디스크에 기록합니다.

```sh
# binary log 조회
pg_waldump /path/to/pg_wal
```
