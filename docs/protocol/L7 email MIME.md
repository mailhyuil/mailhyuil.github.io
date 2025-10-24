# L7 email MIME

> SMTP는 ASCII 문자만을 전송할 수 있기 때문에, 이메일에 첨부파일을 보내기 위해 MIME 표준이 만들어졌다.
>
> > MIME은 SMTP서버내의 프로그램등이 메일을 읽을 때 ascii가 아닌 부분을 판별하고 인코딩, 디코딩할 수 있게 한다.
> >
> > > ascii가 아닌 데이터는 binary를 base64로 인코딩(ascci로 변환)하여 전송하고 수신측에서는 base64를 binary로 디코딩한다.
> > >
> > > > 윈도우에서 파일의 확장자를 보고 어떤 프로그램으로 열지 결정하는 것처럼 Content-Type을 보고 어떻게 처리할지 결정하게 할 수 있다.

```txt
Content-Type
Content-Transfer-Encoding
Content-Disposition
Content-ID
Content-Description
Content-Language
...
```
