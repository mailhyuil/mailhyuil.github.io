# postgres WAL 아카이브

> WAL 파일을 재사용하지 않고 보관
>
> > 보통 외부 저장소에 WAL 로그를 저장하여, 데이터베이스 시스템이 손상된 경우에도 로그를 사용하여 데이터를 복구할 수 있게 합니다.
> >
> > > pg_basebackup을 사용한 이후부터의 WAL 로그만 보관하면 됩니다.
> > >
> > > > wal_level 및 archive_command 설정

## archive

> /mnt/server/archivedir 을 생성하고 쓰기 권한 부여해야 한다.

```conf
wal_level= replica

archive_command = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'  # Unix
```

## restore

```conf
restore_command = 'cp /mnt/server/archivedir/%f %p'
```
