# http withCredentials

> 서로 다른 도메인에 요청을 보낼 때 credentials 헤더를 포함할지 제외할지 결정하는 옵션
>
> > credentials 란 Cookie 헤더, Authorization 헤더 를 말한다.

## credentials 정보를 포함해서 요청을 보내기 위해서는

> client : withCredentials 옵션을 true 로 설정
>
> > server : Access-Control-Allow-Credentials 헤더를 true 로 설정
> > server : Access-Control-Allow-Headers 헤더에 허용할 헤더를 명시해야 함 또한
> > server : preflight 요청에 대한 응답을 보낼 때는 Access-Control-Allow-Credentials 헤더 값이 true로 설정되어야 합니다.
> > server : Access-Control-Allow-* 헤더를 사용할 경우 *를 사용할 수 없음
> >
> > > 위의 조건을 만족하지 않으면 CORS 에러가 발생한다.
