# L7 http headers MIME Content-Type x-www-form-urlencoded

> html form을 통한 POST 전송 방식 중 가장 기본이 되는 content-type
>
> > 모든 브라우저에서는 application/x-www-form-urlencoded content-type에 대해 body의 데이터를 자동으로 encoding 하도록 구현되어 있다.
> >
> > > 앱에서 해당 타입으로 해당 POST 요청의 body에 대한 인코딩이 되는지 여부를 확인할 필요가 있다.
> > >
> > > e.g. `express.urlencoded({extended: true})`

## URL Encoding

> `key=value&key=value&key=value`
>
> > 데이터의 특수 문자나 공백과 같은 부분이 url `인코딩 규칙[RFC1738]`에 따라 인코딩 됩니다. 특정 문자들은 `%` 기호와 그 문자의 ASCII 코드를 표시하여 인코딩 된다.
