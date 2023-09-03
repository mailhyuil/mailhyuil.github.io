# gzip 배포

> 빌드된 각각 파일을 gzip으로 압축 ex) app.js.gz, document.js.gz
>
> > nginx에서 gzip on 설정
> >
> > > 이미지, 바이너리 파일은 효과 없음

```
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

## server

```sh
Content-Encoding: gzip
```

## client

```sh
Accept-Encoding: gzip, deflate
```
