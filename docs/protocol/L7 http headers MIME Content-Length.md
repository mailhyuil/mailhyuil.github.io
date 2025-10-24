# L7 http headers MIME Content-Length

> 옥텟 단위
>
> > 컨텐츠의 길이를 알려주는 속성
> >
> > > tcp는 스트림 중심 프로토콜로 연속된 스트림으로 데이터를 보내기 때문에 컨텐츠의 시작과 끝을 알 수 없다.
> > >
> > > > Content-Length 헤더를 사용해 컨텐츠의 길이를 명시한다.
> > > >
> > > > > 데이터를 보내는 시점에 길이를 알 수 없다면 Transfer-Encoding: chunked를 사용한다.

```sh
Content-Length: 1234
```
