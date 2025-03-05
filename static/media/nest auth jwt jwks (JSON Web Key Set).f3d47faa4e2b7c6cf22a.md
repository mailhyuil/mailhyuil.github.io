# nestjs jwks (JSON Web Key Set)

> OpenID Connect을 사용 시 공개키(kid)를 검증하는 방법
>
> > > id-token의 header안에 kid가 들어있다.
> > >
> > > 서버는 jwks (JSON Web Key Set) 엔드포인트에 요청하여 jwks을 받아온 후 id-token의 kid의 유무를 확인하여 kid를 검증 후 jwt를 검증한다.
> > >
> > > > jwks 요청이 빈번할 경우 차단될 수 있으니 반드시 jwks을 일정 시간동안 캐싱하여 사용해야 한다.

```ts
const token = req.headers.authorization.split(" ")[1];

const header = token.split(".")[0];

const headerJson = JSON.parse(Buffer.from(header, "base64").toString());

const kid = headerJson.kid;

const jwks = await axios.get("https://example.com/.well-known/jwks.json");

const jwksJson = jwks.data.keys;

const isValid = jwksJson.some(key => key.kid === kid);

if (!isValid) {
  throw new UnauthorizedException();
}
```
