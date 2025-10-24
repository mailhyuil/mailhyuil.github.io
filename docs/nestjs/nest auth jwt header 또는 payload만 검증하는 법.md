# nest auth jwt header 또는 payload만 검증하는 법

> 온점(.)을 기준으로 헤더는 0번째, 페이로드는 1번째, 시그니처는 2번째에 위치한다.
>
> > split(".")을 사용하여 payload를 가져온 후 base64로 디코딩한다.
> >
> > > 카카오 로그인의 경우 header를 이 방식으로 변환하고 안에 있는 kid(공개키)를 사용하여 전체 jwt를 검증한다.

```ts
const token = req.headers.authorization.split(" ")[1];

const header = token.split(".")[0];
const payload = token.split(".")[1];

const headerJson = JSON.parse(Buffer.from(header, "base64").toString());
const payloadJson = JSON.parse(Buffer.from(payload, "base64").toString());

console.log(headerJson);
/**
{
  "alg": "HS256",
  "typ": "JWT"
}
*/
console.log(payloadJson);
/**
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
*/
```
