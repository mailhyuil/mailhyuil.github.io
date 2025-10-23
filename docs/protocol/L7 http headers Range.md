# http headers Range

> body의 일부분만 요청한다.
>
> > "bytes=0-" 으로 요청을 해보면 하나의 파일을 여러 번의 요청으로 나눠서 받는다.
> >
> > > 서버는 206 Partial Content로 응답한다.
> > >
> > > 요청 범위를 전송할 수 없으면 416 Range Not Satisfiable로 응답한다.
> > >
> > > 서버는 response header에 Content-Range를 포함한다.
> > >
> > > > 파일을 다운로드 받을 때 사용한다. (e.g. 다운로드 중에 끊겼을 때 끊긴 부분부터 다시 받을 수 있기 때문에)
> > > >
> > > > > 스트리밍 서비스에서 일부분만 먼저 받아서 재생할 때 사용한다.

## 요청

```sh
Range: bytes=0-1234

# 파일을 전부 요청
Range: bytes=0-
```

## 응답

```sh
Content-Range: bytes 0-1234/12345
Content-Length: 1235
```
