# nginx 504 Gateway Timeout

> 서버와 클라이언트간 proxy 연결 시간이 default인 60초를 넘어서 나타나는 에러
>
> > timeout 시간을 늘려서 해결

```conf
server {
  listen 80;
  server_name abc.ab.io;
  location / {
    proxy_pass http://192.xxx.xxx.xxx:443/;
    proxy_connect_timeout 300;
    proxy_send_timeout 300;
    proxy_read_timeout 300;
    send_timeout 300;
    }
}
```
