# linux base log syslog & journald

## syslog

```txt
서버: rsyslog
데이터 형식: 텍스트 파일 (/var/log/syslog)
검색: grep 사용 (느림)
원격로깅: 기본적으로 지원 (rsyslog)
성능: 단순 텍스트라 가벼움
설정: /etc/rsyslog.conf
```

## journald

```txt
서버: systemd-journald
데이터 형식: 바이너리 저장 (journalctl 조회)
검색: 강력한 필터링 (journalctl)
원격로깅: 직접 지원 안함 (syslog 필요)
성능: 바이너리로 검색 성능 뛰어남
설정: /etc/systemd/journald.conf
```
