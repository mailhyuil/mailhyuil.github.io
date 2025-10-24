# postgres WAL

> db에서 발생하는 모든 연산은 WAL과 메모리 버퍼(16MB)에 같이 기록되고, 메모리 버퍼가 꽉 차거나 트랜잭션이 종료 또는 시스템 종료 시 WAL에 기록된 로그를 디스크에 저장한다.
>
> write -> shared buffer -> WAL -> commit -> shared buffer flush -> disk
>
> > 트랜잭션의 경우 COMMIT이 발생하면 WAL에 기록된 로그를 디스크에 저장하고 ROLLBACK이 발생하면 WAL에 기록된 로그를 삭제한다.
> >
> > > pg_waldump로 읽을 수 있다.
> > >
> > > > 특별한 설정이 없다면 WAL 파일이 꽉 차면 가장 오래된 WAL 파일부터 덮어쓴다. (재사용)

## CDC (Change Data Capture)에 사용되는 WAL

> 데이터베이스의 변경 사항을 실시간으로 캡처하여 다른 시스템에 전달하는 기술
>
> > WAL을 감시하여 변경 사항을 캡처하고, 변경 사항을 다른 시스템에 전달한다.
> >
> > > wal_level을 logical로 설정해야 한다.
