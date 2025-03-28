# Sticky Session

> 여러대의 서버를 로드밸런싱하여 사용할 시에
>
> > 사용자를 처음 요청한 서버에 계속해서 요청을 보내는 방식
> >
> > > session은 서버 메모리에 저장되어 있기 때문에 사용자가 처음 요청한 서버에 계속해서 요청을 보내야한다.

## nginx.conf

```nginx
upstream {
  sticky;
  server 127.0.0.1:9000;
  server 127.0.0.1:9001;
  server 127.0.0.1:9002;
}
```
