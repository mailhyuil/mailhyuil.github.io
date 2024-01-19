# linux cmd netstat

> tcp, udp, ip, icmp 프로토콜에 대한 네트워크 연결, 라우팅 테이블, 네트워크 인터페이스, 네트워크 프로토콜 통계를 보여주는 명령어

```sh
netstat -n # 포트넘버
netstat -p # PID

netstat -a # all
netstat -l # listening
netstat -t # tcp
netstat -u # udp

netstat -pan | grep :port
```
