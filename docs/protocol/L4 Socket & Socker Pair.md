# L4 Socket & Socker Pair

> 소켓이란 운영체제(OS)가 제공하는 네트워크 입출력 인터페이스
>
> 클라이언트, 서버가 가지고 있는 논리적 식별자 (이 두 점을 통해서 L4 connection이 생성됨)
>
> > loopback interface를 통해서 로컬 프로세스간 통신도 가능하다.
> >
> > > TCP/UDP socket은 네트워크(3, 4계층)를 통한 프로세스간 통신이 가능하다.
> > >
> > > 추가로 Unix Socket이란 로컬 프로세스간의 통신을 위한 소켓으로 ip:port가 아닌 파일 시스템 경로로 통신

## Socket

```sh
socket = ip:port
```

## Socket Pair

> TCP에서 연결을 유지하기 위해서 소켓 쌍을 메모리에 저장한다.
>
> > UDP의 경우 소켓 쌍이 필요없고 target의 socket으로 데이터를 전송할 뿐이다. (비연결)
> >
> > 단 응답까지 받고 싶다면 소켓 쌍을 만들어야 한다.

```ts
(local_ip:port, remote_ip:port)
```
