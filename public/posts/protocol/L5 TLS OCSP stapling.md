# TLS OCSP stapling (Online Certificate Status Protocol)

> 클라이언트는 인증서를 받은 후 인증서를 CA 기관에 직접 요청하여 인증서를 검증한다.
>
> > 이는 결국 초기 연결 속도를 저하시킨다.
> >
> > 또한 개인정보 유출 위험 (어디 접속하는지 CA가 다 앎)
> >
> > > OCSP stapling이란 서버가 미리 인증서 상태를 CA에서 받아서 클라이언트한테 같이 넘겨줌
> > >
> > > 클라이언트가 CA에 직접 물어볼 필요없음
