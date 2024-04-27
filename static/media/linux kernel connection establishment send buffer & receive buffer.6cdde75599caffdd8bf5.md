# linux kernel send buffer & receive buffer

> kernel은 SYN queue, Accept queue와 함께 send buffer와 receive buffer를 가지고 있다.

## receive data

```sh
client data 전송
kernel receive buffer에 data를 저장
kernel ack data
backend process read() 호출 # receive buffer에서 data를 읽고 buffer에서 삭제
backend process 데이터를 parsing 후 처리
```

## send data

```sh
backend process send()/write()/end()/json() 호출 # express일 시
send buffer # data copy
send to client
```
