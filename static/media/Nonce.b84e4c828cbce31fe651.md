# Nonce

> 한번만 사용되는 임의의 숫자
>
> > 매 요청마다 재생성 해야한다.

```ts
const nonce = crypto.randomBytes(16).toString("base64");
```
