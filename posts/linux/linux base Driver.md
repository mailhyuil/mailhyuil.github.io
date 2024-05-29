# Driver (Device Driver)

> 장치 구동기
>
> > 외부 입출력 장치의 입출력을 제어하기 위해 커널의 일부로서 동작하는 프로그램이다.
> >
> > > I/O device에는 모두 driver가 필요하다. (e.g. keyboard, mouse, monitor, disk, NIC...)
> > >
> > > > 패킷 전송/수신, 인터럽트, 설정 관리, 상태 모니터링등을 수행
> > > >
> > > > > driver는 디바이스의 레지스터/버퍼에 접근하여 입출력을 수행한다.
