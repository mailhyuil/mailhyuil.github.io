# http withCredentials

> 기본적으로 브라우저가 제공하는 요청 API 들은 브라우저의 쿠키와 같은 인증과 관련된 데이터를 함부로 요청 데이터에 담지 않도록 되어있다.
>
> > credentials 란 Cookie 헤더, Authorization 헤더 를 말한다.
> >
> > > withCredentials가 false면 Cookie나 Authorization 헤더 같은 인증 정보를 요청에 담지 않는다.

## credentials 정보를 포함해서 요청을 보내기 위해서는

> 아래의 조건을 만족하지 않으면 CORS 에러가 발생한다.

```
client : withCredentials 옵션을 true 로 설정하여 Authorization, Cookie 헤더를 요청에 포함

server : Access-Control-Allow-Credentials 헤더를 true 로 설정하여 credentials 정보를 포함한 요청을 허용
server : Access-Control-Allow-Headers 헤더에 허용할 헤더(Authorization, Cookie)를 명시해야 함
server : preflight 요청에 대한 응답을 보낼 때는 Access-Control-Allow-Credentials 헤더 값이 true로 설정되어야 합니다.
server : Access-Control-Allow-* 헤더를 사용할 경우 *를 사용할 수 없음
```
