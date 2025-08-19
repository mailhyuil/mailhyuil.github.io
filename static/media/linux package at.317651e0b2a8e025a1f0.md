# linux package at

> cron 같이 특정 시간에 명령어를 실행시키는 명령어
>
> > cron과 다르게 한번만 실행하고 작업은 사라진다.

## install

```sh
apt install at -y
systemctl enable atd --now
```

## usage

```sh
# at <time> <date> -f <file>
at 17:00 06022020 -f test.sh # 작업 추가

atq # 현재 작업 목록
atrm <job_id> # 작업 삭제
```
