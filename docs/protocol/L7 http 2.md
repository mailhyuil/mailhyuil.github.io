# L7 http 2

> 여러 요청을 동시에 보내기 위해 설계된 프로토콜 (멀티플렉싱)
>
> > 만약 여러 요청을 동시에 보낼일이 없다면 사용하는 의미가 없을 수 있다. (cpu 사용량이 높다)

## 특징

```md
1. header와 body를 압축
2. multiplexing
   (단일 TCP 연결로 여러 요청을 동시에 처리)
   (text가 아닌 binary frame 형식으로 전송)
   (HTTP 수준의 HOL Blocking 문제 해결)
3. server push (사용하지 않는다)
4. secure by default
5. CPU 사용량이 높다.
6. 여전히 TCP 수준의 HOL Blocking 문제가 있다.
   (http3로 해결)
```

## 동작

```sh
각 요청은 stream id를 가지고 있음 (client -> server 홀수, server -> client 짝수)
```

## Head of Line Blocking (HOL Blocking)

> 데이터 손실이 발생하는 경우 head of line blocking 문제가 발생할 수 있다.

```sh
1. TCP 세그먼트는 반드시 순서대로 전송되어야한다.
2. 하지만 스트림은 순서대로 전송되지 않는다.
3. 위의 두가지 이유로 인해 head of line blocking 문제가 발생한다.

[12 34 56 78] 모든 세그먼트가 순서대로 도착하면 정상 작동
[12  4 56 78] 세그먼트 3이 손실되면 HOL Blocking이 발생하여 정상적으로 도착한 56 78도 처리되지 않는다.
```
