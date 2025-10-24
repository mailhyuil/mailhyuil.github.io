# linux package scp 전송 속도, 대역폭 제한

> 전송 속도 제한 / 대역폭 제한
>
> > 서버에 대역폭 제한이 걸려있는 경우 이렇게 낮춰줘야한다.

```sh
# 전송 속도를 10000 Kbit/s(킬로비트 퍼 세컨드) 단위로 제한
# 10000 Kbit/s = 1.25 MB/s
scp -l 10000 -i key ubuntu@ip:/home/ubuntu
```
