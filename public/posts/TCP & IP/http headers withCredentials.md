# http withCredentials

> 기본적으로 브라우저가 제공하는 요청 API와 서버들은 요청의 헤더나 쿠키에 인증과 관련된 데이터를 담지 않았다고 판단한다.
> (withCredentials: false)
> (httpClient나 enableCors의 기본값)
>
> > false는 credentials를 요청에 담지 않는다는 뜻이기 때문에 담아서 보내도 서버에서는 credentials가 없는 요청으로 인식한다.
> > (오류를 뱉지 않는다.)
> >
> > > true로 설정하게 되면 credentials가 있는 요청으로 인식하고 cors에 설정 규정(origin, header, method...)에 맞지 않는 요청에 대해서는 오류를 뱉는다.
> > > true로 설정할 경우 origin에 \*를 사용할 수 없다. 정확히 명시해 줄 것
> > >
> > > > Cookie 헤더나 Authorization 헤더에 credentials를 담을 거라면 true로 설정하고 cors 규정을 지켜서 보안을 유지해야 한다.

## credentials 정보를 포함해서 요청을 보내기 위해서는

> 아래의 조건을 만족하지 않으면 CORS 에러가 발생한다.

```
client : withCredentials 옵션을 true 로 설정하여 Authorization, Cookie 헤더에 credentials을 포함될 것이라는 것을 명시

server : Access-Control-Allow-Credentials 헤더를 true 로 설정하여 credentials 정보를 포함한 요청을 허용
server : preflight 요청에 대한 응답을 보낼 때도 Access-Control-Allow-Credentials 헤더 값이 true로 설정되어야 합니다.
server : Access-Control-Allow-Headers 헤더에 허용할 헤더(Authorization, Cookie)를 명시해야 함
server : Access-Control-Allow-* 헤더를 사용할 경우 *를 사용할 수 없음
```
