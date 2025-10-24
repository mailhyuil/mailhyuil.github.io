# nodejs event loop libuv thread pool - worker thread, background thread

> nodejs는 대부분의 cpu 작업을 main thread 수행하지만 몇가지 작업은 background thread에서 수행한다.
>
> 일반파일 I/O(블로킹 I/O)나 일부 네이티브 작업은 event-loop를 통해 백그라운드 스레드에서 처리한다.
>
> > libuv thread pool로 구현되어있다. (libuv는 c로 작성된 nodejs의 event-loop + 비동기 I/O 라이브러리)
> >
> > 기본 4개의 스레드가 생성된다.
> >
> > > 만약 background thread를 사용하는 조건이 충족되지 않는다면 main thread에서 처리된다. (e.g. bcryptjs)
> > >
> > > 패키지 사용 시 문서를 확인하거나 코드를 보고 uv_queue_work()를 호출하는지를 확인하는게 좋다.

## background thread의 역할

1. crypto module (pbkdf2, randomBytes, randomFill, sign with callback, verify with callback)
2. zlib module
3. fs I/O (블로킹 I/O) (system call read(), write())
4. dns lookup (블로킹 I/O) (네트워크 요청전에 system call getaddrinfo() 사용)

## 블로킹 I/O vs 논블로킹 I/O

> 블로킹 I/O는 백그라운드 스레드로 처리
>
> > 논블로킹 I/O (네트워크 IO)는 Native I/O Event Notification Interface (epoll/kqueue/IOCP)를 통해 비동기적으로 처리된다.

## background thread pool 늘리기

> libuv의 기본 스레드 풀 크기는 4개이다.
>
> > 이는 컨텍스트 스위칭 비용 줄이기, 쿼드코어 설계를 기본으로 설계되었기 때문이다.
> >
> > > crypto, zlib, dns.lookup(), fs 작업이 많다면 스레드 풀 크기를 늘려야 한다. (8 ~ 16개 정도) (최대 128개까지 가능)

```sh
UV_THREADPOOL_SIZE=8 node app.js
```
