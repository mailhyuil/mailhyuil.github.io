# linux package logrotate

> log 파일을 주기적으로 교체, 관리

## install

```sh
apt install logrotate -y
```

## /etc/logrotate.conf

```conf
# see "man logrotate" for details
# 매주 로그파일을 로테이트
weekly
# 4개의 로그파일 이상이면 가장 오래된 로그파일을 삭제합니다.
rotate 4
# 로그파일을 정리하고 오래된 로그파일을 생성할지 여부
create
# 로테이트후 로그파일 뒤에 날짜를 추가합니다
dateext
# 로그파일을 로테이트한후 압축파일로 생성
#compress
# 디렉토리를 지정하여 logrotate파일을 사용가능합니다
include /etc/logrotate.d
# no packages own wtmp and btmp -- we'll rotate them here
/var/log/wtmp {
    monthly
    create 0664 root utmp
        minsize 1M
    rotate 1
}

/var/log/btmp {
    missingok
    monthly
    create 0600 root utmp
    rotate 1
}
```
