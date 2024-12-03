## nginx proxy_buffer

> 502 Bad Gateway 에러 방지

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
