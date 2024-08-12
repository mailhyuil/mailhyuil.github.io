# http 1.0 vs 1.1

> http 1.0이 메모리를 많이 사용하는 이유는 tcp 커넥션을 맺는데에 cpu가 사용되고 커넥션을 맺는 작업을 하는 동안은 다른 작업을 할 수 없다.

```sh
# http 1.0
요청과 응답이 끝나면 tcp 소켓을 닫는다.
메모리 소모가 적다.
cpu 사용량이 높다.
latency가 높다.

# http 1.1
요청과 응답이 끝나도 tcp 소켓을 닫지 않는다.
메모리 소모가 높다.
cpu 사용량이 낮다.
latency가 낮다.
```