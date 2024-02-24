# nginx 499 Client Closed Request

> 클라이언트가 요청을 하고 나서 nginx가 요청을 처리하고 있는 도중 클라이언트가 접속을 끊어 버리면 nginx는 499 상태 값을 반환한다.
>
> > 서버가 응답을 하기 전 클라이언트가 연결을 끊었을 때 발생하는 에러
> >
> > > 주로 비동기 요청, client timeout으로 인해 연결이 끊어졌을 때 발생
> > >
> > > > client timeout을 늘려서 해결
