## nginx proxy_buffer

> 기본적으로 Nginx는 프록시 서버에서 수신한 응답을 디스크나 메모리에 버퍼링하여 클라이언트로 전송합니다.
>
> > 실시간 응답이 필요한 경우(예: 실시간 데이터 스트림이나 WebSocket) 버퍼링이 지연을 초래할 수 있으므로 이 옵션을 비활성화하여 실시간성을 높입니다.
> >
> > 이를 위해 `proxy_buffering off;`를 사용합니다.
> >
> > > 백엔드 서버의 응답 크기가 Nginx의 버퍼 크기를 초과하는 경우 502 Bad Gateway 오류가 발생할 수 있습니다.
> > >
> > > 이 경우 `proxy_buffer_size`, `proxy_buffers`, `proxy_busy_buffers_size`를 적절히 조정하여 문제를 해결할 수 있습니다.

```conf
server {
    listen       80;
    listen  [::]:80;
    location / {
        proxy_buffer_size        128k;
        proxy_buffers            4 256k;
        proxy_busy_buffers_size  256k;

        proxy_pass http://ip_address:3000;
    }
}
```
