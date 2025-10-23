# http chunk

> http가 동적으로 생성되는 자원을 전송하기 위해 사용하는 방식이다. (e.g. 스트림)
>
> > Transfer-Encoding: chunked을 사용해 청크 인코딩을 명시
> >
> > > Content-Length 헤더를 사용하지 않고 본문에 chunk의 length를 포함한다.
> > >
> > > > Content-Length 헤더와 같이 사용할 수 없다.
> > > >
> > > > > 데이터를 보내는 시점에 Content-Length를 알 수 없을 때 사용한다.
> > > > >
> > > > > > 수신자는 length가 0인 chunk를 받으면 전송이 완료된 것으로 간주한다.
> > > > > >
> > > > > > > chunk data와 length는 CRLF로 구분된다.

## 일반 http 응답

```sh
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 19

Hello World from TCP
```

## chunked http 응답

```sh
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

5
Hello
5
 Worl
9
d from TCP
0
```
