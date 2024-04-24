# tcp socket

> socket === ip:port
>
> > 클라이언트, 서버가 가지고 있는 논리적 식별자 (이 두 점을 통해서 tcp connection이 생성됨)
> >
> > > socket pair === (local_ip:port, remote_ip:port)
> > >
> > > > loopback interface를 통해서 로컬 프로세스간 통신도 가능하다.
> > > >
> > > > > Unix socket은 로컬 프로세스간 통신만 가능하지만, TCP socket은 네트워크(3, 4계층)를 통한 프로세스간 통신이 가능하다.
