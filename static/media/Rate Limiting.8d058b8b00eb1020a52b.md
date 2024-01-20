# rate limiting

## HTTP 429 Too Many Requests

> 요청을 너무 많이하면 429 Too Many Requests 에러가 발생한다.
>
> > Headers에 Retry-After: 0.5 가 포함되어있다.

## Retry-After

> jitter를 적용해서 Retry-After를 계산한다.
