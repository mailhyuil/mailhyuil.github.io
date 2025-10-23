# nest file upload

## base64 업로드

> 파일을 base64로 인코딩하여 바디에 json으로 담아서 전송하는 방식
>
> > 단순하며 파일을 전송하는데에는 문제가 없으나, 파일의 크기가 커지면 전송 시간이 길어진다.
> >
> > > 용량이 너무 크면 json parser의 제한에 걸릴 수 있다.

## S3 presigned url

> S3에 업로드할 파일의 presigned url을 생성하여 클라이언트에 전달하고, 클라이언트에서 해당 url로 파일을 업로드하는 방식
>
> > 파일이 서버를 거치지 않고 바로 S3에 업로드되기 때문에 서버의 부하가 줄어든다.

## multipart/form-data (multer)

> multipart 타입은 application/x-www-form-urlencoded를 포함한 여러 타입을 한번에 보낼 수 있다.
>
> > new FormData()를 사용하면 자동으로 Content-Type: multipart/form-data로 전송할 수 있다.
> >
> > > File 객체를 FormData에 append하면 파일의 이름, 크기, 타입, 내용의 json이 생성된다.
