# postgres WAL archive backup

> WAL 파일을 재사용하지 않고 보관
>
> > 보통 외부 저장소에 WAL 로그를 저장하여, 데이터베이스 시스템이 손상된 경우에도 로그를 사용하여 데이터를 복구할 수 있게 합니다.
> >
> > > pg_basebackup을 사용한 이후부터의 WAL 로그만 보관하면 됩니다.
> > >
> > > > pg_basebackup을 한번이라도 해놔야 point in recovery가 가능하다.

## archive

> postgres restart시 WAL 파일이 archive_command에 설정된 명령으로 실행된다.
>
> /mnt/server/archivedir 을 생성하고 쓰기 권한 부여해야 한다.
>
> > archive_command 명령은 PostgreSQL 서버를 실행했던 시스템 사용자 권한으로 실행되어야
> >
> > 또한 성공한 경우 0, 아닌경우 0 이 아니게 반환되도록 해야

```conf
archive_mode = on
archive_command = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'  # Unix
archive_timeout = 1 # 1초마다 강제로 WAL 파일을 archive_command로 보냄 (0이면 16MB 채워지면 보냄)
```

## pg_basebackup

> pg_basebackup을 하면 아카이브에 000000010000000000000002.00000028.backup 이렇게 마킹된 파일이 생성된다.
>
> > 000000010000000000000002 밑의 파일은 지워도 된다.

```sh
pg_basebackup -D /backup/base -Ft -z -X fetch -P -v
# -D : 백업파일이 저장될 디렉토리
# -Ft : tar 형식으로 백업
# -z : gzip으로 압축
# -X none : WAL 파일을 복사하지 않음
# -X fetch : WAL을 백업이 끝난 후, 백업이 시작된 시점의 WAL만 가져옴
# -X stream : WAL을 백업 중 스트리밍(실시간)으로 받아서 함께 저장
# -P : 진행률 표시
# -v : 자세한 정보 표시
```
