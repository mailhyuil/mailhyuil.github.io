# nodejs event-loop epoll & kqueue & IOCP

> 각 운영체제의 네이티브 I/O Event Notification Interface (linux=epoll, macOS=kqueue, windows=IOCP)를 추상화한 구현체
>
> socket, pipe, tty, timer, signal, async handle 등과 같은 비동기 I/O 이벤트를 감시한다.
>
> > libuv는 Non-Blocking I/O를 (e.g. network I/O) 이 인터페이스를 사용하여 구현한다.
> >
> > 파일 시스템 I/O(system_call)은 Blocking I/O로써 libuv의 백그라운드 스레드에서 처리된다.

## 동작

```md
1. 메인스레드에서 네트워크 요청
2. 이벤트 루프를 통해 libuv에 전달
3. libuv는 소켓을 생성 후 epoll에 등록
4. 소켓에 read할 데이터가 있으면 epoll이 이벤트를 발생시킴
5. libuv는 epoll에서 발생한 이벤트를 메인스레드에 전달
6. 메인스레드는 이벤트를 처리
```

## epoll이 일반파일(disk 파일)을 감시할 수 없는 이유

> 일반 파일은 항상 읽기 가능(ready) 상태, 기다릴 필요가 없음
>
> > epoll은 ready 상태 또는 error 상태가 될 때 이벤트를 발생시키기 때문에 일반 파일을 감시할 수 없음
> >
> > > 마찬가지로 dns.lookup은 getaddrinfo() 시스템콜을 사용해서 /etc/hosts 파일을 읽고 없으면 dns 서버에 요청, 이 모든게 동기적으로 처리됨
