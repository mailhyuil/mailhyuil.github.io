# nginx module zip gzip

```conf
http {
    gzip on;  # gzip 압축 활성화
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_proxied any;
    gzip_min_length 256;
}
```
