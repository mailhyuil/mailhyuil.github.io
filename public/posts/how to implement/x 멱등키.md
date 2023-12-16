# 멱등키

> client에서 POST 요청 시 Header에 Idempotency-Key를 넣어서 보내기
>
> > 서버에서는 멱등키를 db에 멱등키:응답 형식으로 저장 (Idempotency-Key : Response)
> >
> > > 이전 요청과 동일한 멱등키를 가진 요청을 받으면 서버에서 이 요청을 중복으로 판단한 뒤 실제로 처리하지 않고 첫 요청과 같은 응답을 반환하는 방식

```sh
# HTTP HEADER
Idempotency-Key: {IDEMPOTENCY_KEY}
```

## Idempotency Database

> 멱등키를 저장하는 db
>
> > 멱등키와 응답을 key:value로 저장
