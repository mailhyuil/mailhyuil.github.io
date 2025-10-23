# tcp connection

> connection을 수립해주는 주체는 커널이다.
>
> > 소켓쌍(a pair of sockets)을 사용하여 3-way handshake, 파일 디스크립터가 생성되고 TCB가 생성됨
> >
> > > 하나의 컴퓨터에는 여러 개의 tcp connection이 존재할 수 있음 (ip:port로 구분)
> > >
> > > > 소켓은 앱이 tcp통신을 요청할 때 생성되고, 그 소켓을 통해 tcp connection이 생성됨
> > > >
> > > > > 동시에 여러 http 요청을 보내면 브라우저는 각 요청마다 포트로 요청으로 보내고, 각각의 tcp connection이 생성됨 (chrome 브라우저의 동시 최대 요청은 6개로 제한됨)

## TCB (Transmission Control Block)

> tcp connection을 관리하기 위한 정보를 담고 있는 구조체
>
> > 메모리에 생성되며, 소켓쌍과 1:1로 대응됨

## CONNECT (3-way handshake)

> SYN : synchronize : 연결을 요청하는 패킷
>
> > ACK : acknowledge : 수신 확인 패킷

```sh
클라이언트: SYN
서버: SYN + ACK
클라이언트: ACK
```

## CLOSE (4-way handshake)

> FIN : finish : 연결을 종료하는 패킷
>
> > CLOSE가 끝나면 서버의 파일 디스크립터는 제거되지만, 클라이언트의 파일 디스크립터는 제거되지 않음

```sh
클라이언트: FIN
서버: ACK
서버: FIN
클라이언트: ACK
```
