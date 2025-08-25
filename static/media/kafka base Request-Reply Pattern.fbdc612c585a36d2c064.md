# kafka base Request-Reply Pattern

> Request & Response 패턴과 비슷하지만 Response를 비동기로 보내는 방식

```md
1. Producer가 Request를 보내고 그에 대한 reply topic을 구독한다.
2. Consumer는 Request를 받아 처리하고 reply topic에 결과를 보낸다.
3. Producer는 reply topic에서 결과를 받아 처리한다.
```
