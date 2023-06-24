## nginx proxy_pass

> 요청을 라우팅할 ip
>
> > Browser -> public_id:80 -> private_ip:3000

```conf
server {
    listen       80;
    listen  [::]:80;
    location / {
        proxy_pass http://ip_address:3000;

        # 502 Bad Gateway 에러 방지
        proxy_buffer_size          128k;
        proxy_buffers              4 256k;
        proxy_busy_buffers_size    256k;
    }
}
```
