# linux package rsync 서버 간 동기화

## Source 서버

1. rsync 설치
2. rsync 설정(/etc/default/rsync)
3. rsync.conf 생성 및 아래 구문 복사 후 붙여넣기

### /etc/rsyncd.conf

```sh
log file = /var/log/rsync.log  # 로그 파일 경로
[source]                       # 부르고 싶은 명칭
path = /var/www/omeka1/files   # 소스 디렉토리 설정
uid = root                     # rsync 사용 가능한 사용자
gid = root                     # rsync 사용 가능한 그룹
use chroot = yes               # chroot 사용여부
host allow = x.x.x.x           # 해당 호스트 아이피만 접근 가능
max connection = 100           # 최대 연결 개수
timeout 300                    # 타임아웃 시간 설정
```

## Destination 서버

1. rsync 설치
2. rsync 설정(/etc/default/rsync)
3. rsync 명령어 실행

```sh
rsync -avz source_server_ip::source /var/www/omeka2
```

## crontab

> 주기적이고 자동적인 파일 동기화
>
> > crontab -e

```sh
15 2 30 7 *    rsync -avz /AAA/files /BBB      # 7월 30일 2시 15분에  rsync 실행

15 2 * * 1     rsync -avz /AAA/files /BBB      #  매주 첫날 2시 15분에 rsync 실행

0 1 *  * *     rsync -avz /AAA/files /BBB      # 매일 1시 정각에 rsync 실행

0-59/1 * * * * rsync -avz source_server_ip::source /var/www/omeka2   # 1분마다 rsync 실행
```
