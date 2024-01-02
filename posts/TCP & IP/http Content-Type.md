# Content-Type

> 필수는 아니다 하지만 명시해서 클라이언트나 서버가 어떻게 처리할지 결정할 수 있도록 해주는 것이 좋다.
>
> > 명시하지 않을 시 브라우저는 기본으로 Content-type: text/plain; charset=us-ascii로 인식한다.
> >
> > > 브라우저는 Content-Type을 보고 어떻게 처리할지 결정한다.
> > >
> > > > ajax를 사용할 때는 코드로 처리를 해줘도 딱히 상관없지만 명시해주는게 best practice

## application

```sh
Content-Type: application/json # json
Content-Type: application/javascript # javascript IE8 이하는 지원하지 않음
Content-Type: application/octet-stream : # stream 형태
Content-Type: application/x-www-form-urlencode # HTML Form 형태
Content-Type: application/xml # xml
# x-www-form-urlencode와 multipart/form-data은 둘다 폼 형태이지만
# x-www-form-urlencode은 대용량 바이너리 테이터를 전송하기에 비능률적이기 때문에
# 대부분 첨부파일은 multipart/form-data를 사용하게 된다.
```

## text

```sh
Content-Type: text/css
Content-Type: text/html
Content-Type: text/javascript
Content-Type: text/plain
Content-Type: text/xml
```

## multipart

```sh
Content-Type: multipart/formed-data # 파일 첨부
Content-Type: multipart/mixed # email
Content-Type: multipart/related # email
```

## file

```sh
Content-Type: application/pdf # pdf
Content-Type: application/zip # zip
Content-Type: application/msword # doc
Content-Type: application/vnd.ms-excel # xls
```

## image

```sh
Content-Type: image/gif # gif
Content-Type: image/jpeg # jpeg, jpg, jpe
Content-Type: image/png # png
Content-Type: image/tiff # tiff, tif
Content-Type: image/x-icon # ico
Content-Type: image/svg+xml # svg
```

## audio

```sh
Content-Type: audio/mpeg # MP3 or other MPEG audio
```
