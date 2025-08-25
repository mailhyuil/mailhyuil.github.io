# linux base Unix Domain Socket (Unix Socket, IPC Socket)

> 로컬 프로세스간 통신을 할 수 있는 Unix 소켓 (IPC 소켓)
>
> > tcp/ip 소켓과 다른 점은 네트워크를 통하지 않고, 동일한 호스트 내의 프로세스간 통신을 할 수 있다.
> >
> > 로컬(같은 노드) 내에서의 통신은 Unix Domain Socket을 사용하는 것이 더 효율적이다.
> >
> > > 같은 시스템 내에서 실행되고 있는 프로세스 간의 통신 메커니즘 (IPC)
> > >
> > > > Unix Socket은 파일 시스템에 파일처럼 존재하며, 파일 디스크립터를 통해 통신을 할 수 있다.
> > > >
> > > > > 소켓파일은 주로 .sock 확장자를 가진다.

```sh
ls -l docker.sock
# srwxr-xr-x  1 sangbaekyu  staff     0B Feb  4 13:04 docker.sock
# s: 소켓 파일 /// 이 소켓파일은 docker daemon과 docker client가 통신하기 위한 소켓파일이다.

#시스템의 전체 유닉스 도메인 소켓 목록을 확인
lsof -U

echo hello world | nc -U docker.sock
```
