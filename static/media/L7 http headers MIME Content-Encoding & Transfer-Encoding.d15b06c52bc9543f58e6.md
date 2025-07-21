# http MIME Content-Encoding & Transfer-Encoding

> 두 인코딩이 동시 적용되면 전송 인코딩이 디코딩된 후 컨텐츠 인코딩이 디코딩된다.

## 컨텐츠 인코딩 (Content-Encoding)

> body의 데이터를 인코딩하는 방식을 명시한다.
>
> > 성능향상을 위해 압축에 주로 사용된다. (gzip, deflate, br)
> >
> > > 종단 간 적용 (서버에서 인코딩하고 클라이언트에서 디코딩한다.)

```sh
Content-Encoding: gzip
```

## 전송 인코딩 (Transfer-Encoding)

> http 메시지 전체를 인코딩하는 방식을 명시한다.
>
> > 데이터를 안전하게 전송하기 위해 사용된다. 메시지의 시작과 끝을 식별하는 일 (chunked)
> >
> > > Content-Length 헤더와 같이 사용할 수 없다.
> > >
> > > > 데이터를 보내는 시점에 Content-Length를 알 수 없을 때 사용한다.
> > > >
> > > > > 홉 간 적용 (서버에서 인코딩하고 프록시에서 디코딩한다.) (홉 간에 여러 다른 인코딩을 적용할 수 있다.)

```sh
Transfer-Encoding: chunked
```
