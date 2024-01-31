# postgres WAL 아카이브

> WAL 파일을 재사용하지 않고 보관
>
> > 보통 외부 저장소에 WAL 로그를 저장하여, 데이터베이스 시스템이 손상된 경우에도 로그를 사용하여 데이터를 복구할 수 있게 합니다.
> >
> > > pg_basebackup을 사용한 이후부터의 WAL 로그만 보관하면 됩니다.
> > >
> > > > wal_level 및 archive_command 설정

## archive

> postgres restart시 WAL 파일이 archive_command에 설정된 명령으로 실행된다.
>
> /mnt/server/archivedir 을 생성하고 쓰기 권한 부여해야 한다.
>
> > archive_command 명령은 PostgreSQL 서버를 실행했던 시스템 사용자 권한으로 실행되어야
> >
> > 또한 성공한 경우 0, 아닌경우 0 이 아니게 반환되도록 해야

```conf
wal_level= replica

archive_mode = on

archive_command = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'  # Unix

archive_timeout = 1
```

## pg_basebackup

```sh
pg_basebackup -D /mnt/server/backupdir -c fast -X none
```

## restore

> postgres 중지
>
> data 경로의 파일들을 다른 곳으로 이동시키고 전부 삭제
>
> pg_basebackup 파일을 data경로로 복사(pg_wal 제외)
>
> data경로에 recovery.signal 파일 생성
>
> recovery.signal 파일은 postgres가 복구모드로 실행되도록 알려줌
>
> (특정 시점으로 복구를 원하면 이 파일에 recovery_target_time을 설정)
>
> 서버를 실행하면 복구모드로 실행된다
>
> 복구가 완료되면 recovery.signal이 사라짐

```conf
restore_command = 'cp /mnt/server/archivedir/%f %p'

# 특정 시점으로 복구 시
restore_target_time = '2021-04-05 00:21:28'
```
