# http headers Authorization

## Basic

> 매 요청마다 사용자가 username:password를 입력하는 방식
>
> username:password는 절대로 store에 저장하면 안됨
>
> > username:password는 HTTP 헤더에 포함하여 전송되는데 이때 특수문자가 포함되면 문제가 생길 수 있기 때문에 base64로 인코딩된 사용자 ID, 비밀번호 쌍을 인증 정보(credentials) 값으로 사용합니다.
> >
> > > 사용자 ID와 비밀번호는 위와 같이 콜론으로 구분합니다.
> > >
> > > > Base64로 인코딩한 정보는 쉽게 디코딩이 가능해서 Basic 인증은 반드시 HTTPS/TLS와 함께 사용해야 합니다.

```txt
Authorization: Basic <BASE64_USERNAME>:<BASE64_PASSWORD>
// or
Authorization: Basic <BASE64_SECRET>:
```

### Basic & Digest 자동 포함 로직

> 서버가 401 Unauthorized 응답과 함께 WWW-Authenticate: Basic realm="..."를 보내면 브라우저가 사용자에게 로그인 창을 띄움.
>
> > 이후로 사용자가 로그인을 하면 브라우저가 Authorization 헤더를 자동으로 추가함.

```ts
@Get("basic-test")
test(@Headers("Authorization") auth: string, @Res() res: Response) {
if (!auth) {
    res.setHeader(
    "WWW-Authenticate",
    'Basic realm="Access to the staging site", charset="UTF-8"',
    );
    throw new UnauthorizedException();
}
const [type, credentials] = auth.split(" ");
if (type !== "Basic") {
    res.setHeader(
    "WWW-Authenticate",
    'Basic realm="Access to the staging site", charset="UTF-8"',
    );
    throw new UnauthorizedException();
}
const plain = atob(credentials);
const [username, password] = plain.split(":");
if (username !== "mailhyuil" || password !== "admin") {
    res.setHeader(
    "WWW-Authenticate",
    'Basic realm="Access to the staging site", charset="UTF-8"',
    );
    throw new UnauthorizedException();
}
return { message: "Hello, World!" };
}

// logout
fetch("/", { headers: { "Authorization": "Basic " + btoa(":") } });
```

## Digest

## Bearer

> jwt 같은 토큰 인증 방식에서 사용
>
> > OAuth 2.0 프레임워크 또는 JWT에서 사용하는 토큰 인증 방식

```txt
Authorization: Bearer <TOKEN>
```
