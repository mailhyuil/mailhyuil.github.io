# linux network nc - netcat

> TCP 또는 UDP를 사용하여 네트워크 연결을 읽거나 기록하는 컴퓨터 네트워킹 유틸리티

## install

```sh
apt install netcat
```

## usage

```sh
# nc [OPTIONS] HOST PORT

# TCP (default)
nc 127.0.0.1 8080

# UDP
nc -u 127.0.0.1 8080
```
