# postgres WAL 아카이브 pg_basebackup

> 클러스터 단위로 백업
>
> > 데이터 디렉토리, 테이블 스페이스 등 모든 파일을 백업한다.

```sh
pg_basebackup -D /mnt/server/backupdir -c fast -X none
```
