# postgres failover (장애 극복)

> 컴퓨터 서버, 시스템, 네트워크 등에서 이상이 생겼을 때 예비 시스템으로 자동전환되는 기능
>
> > PostgreSQL does not provide the system software required to identify a failure on the primary and notify the standby database server. Many such tools exist and are well integrated with the operating system facilities required for successful failover, such as IP address migration.
> >
> > > PGPOOL을 사용

## failback

> failover에 따라 전환된 서버, 시스템, 네트워크 등을 이상이 발생하기 전의 상태로 되돌리는 처리를 의미
