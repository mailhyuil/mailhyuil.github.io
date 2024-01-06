# http headers Range

> body의 일부분만 요청한다.
>
> > 서버는 206 Partial Content로 응답한다.
> > 서버는 response header에 Content-Range를 포함한다.
> >
> > > 보통 파일을 다운로드 받을 때 사용한다. (e.g. 다운로드 중에 끊겼을 때 끊긴 부분부터 다시 받을 수 있기 때문에)

```
Range: bytes=0-10

원본 : [{name:hyuil}]
Range 사용 : [{na
# 끊겨서 온다.
```
