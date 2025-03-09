# linux base event loop

> 이벤트 처리 매커니즘

## OS별 이벤트 처리 매커니즘

```txt
Epoll: Linux
Kqueue: BSD
IOCP: Windows
Event ports: Solaris
```

## epoll

> epoll은 리눅스에서 사용되는 이벤트 처리 매커니즘으로, 다수의 파일 디스크립터를 감시하는데 사용된다. epoll은 다음과 같은 3가지 시스템 콜을 제공한다.

```txt
epoll_create: epoll 인스턴스를 생성한다.
epoll_ctl: epoll 인스턴스에 파일 디스크립터를 추가하거나 제거한다.
epoll_wait: epoll 인스턴스에 등록된 파일 디스크립터에 이벤트가 발생할 때까지 대기한다.
```
